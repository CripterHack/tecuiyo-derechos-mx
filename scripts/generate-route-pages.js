import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import ts from "typescript";
import { BASE_ROUTE_METADATA } from "../src/data/baseRouteMetadata.js";
import { getCanonicalUrl, getHeadMetadata, isManagedMetadata, NOT_FOUND_METADATA, SITE_ORIGIN } from "../src/utils/routeMetadata.js";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readSource(root, relativePath) {
  const filename = path.join(root, relativePath);
  return ts.createSourceFile(filename, await readFile(filename, "utf8"), ts.ScriptTarget.Latest, true);
}

/** Extrae sólo campos literales; nunca ejecuta componentes ni el texto legal. */
async function readArrayMetadata(root, relativePath, variableName, fields) {
  const source = await readSource(root, relativePath);
  let array;
  function visit(node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === variableName) {
      if (array) throw new Error(`${relativePath}: hay más de una lista llamada ${variableName}.`);
      if (!node.initializer || !ts.isArrayLiteralExpression(node.initializer)) {
        throw new Error(`${relativePath}: ${variableName} debe ser una lista literal para generar sus rutas.`);
      }
      array = node.initializer;
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  if (!array) throw new Error(`No se encontró ${variableName} en ${relativePath}.`);

  return array.elements.map(element => {
    if (!ts.isObjectLiteralExpression(element)) throw new Error(`${relativePath}: entrada de ruta no literal.`);
    const values = {};
    for (const field of fields) {
      const property = element.properties.find(node => ts.isPropertyAssignment(node) && node.name?.getText(source).replace(/^['"]|['"]$/g, "") === field);
      if (!property || !ts.isPropertyAssignment(property) || !ts.isStringLiteralLike(property.initializer)) {
        throw new Error(`${relativePath}: el campo ${field} debe ser un texto literal.`);
      }
      values[field] = property.initializer.text;
    }
    if (!/^[a-zA-Z0-9-]+$/.test(values.id)) throw new Error(`${relativePath}: identificador de ruta inválido.`);
    return values;
  });
}

async function verifyBaseRoutes(root) {
  const source = await readSource(root, "src/App.tsx");
  const paths = [];
  const detailPaths = [];
  function visit(node) {
    if ((ts.isJsxSelfClosingElement(node) || ts.isJsxOpeningElement(node)) && node.tagName.getText(source) === "Route") {
      const attribute = node.attributes.properties.find(property => ts.isJsxAttribute(property) && property.name.getText(source) === "path");
      if (attribute?.initializer && ts.isStringLiteral(attribute.initializer)) {
        const routePath = attribute.initializer.text;
        if (routePath.includes(":")) detailPaths.push(routePath);
        else if (routePath !== "*") paths.push(routePath);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  const expected = BASE_ROUTE_METADATA.map(route => route.path).sort();
  if (JSON.stringify(paths.sort()) !== JSON.stringify(expected)) {
    throw new Error("Actualiza baseRouteMetadata.js para mantener los metadatos alineados con las rutas de App.tsx.");
  }
  const expectedDetails = ["/biblioteca/:id", "/guias/:id", "/formularios/:id", "/buscador/:id"].sort();
  if (JSON.stringify(detailPaths.sort()) !== JSON.stringify(expectedDetails)) {
    throw new Error("Actualiza el generador de metadatos para mantener los detalles alineados con las rutas de App.tsx.");
  }
}

export async function collectRouteMetadata(root = projectRoot) {
  await verifyBaseRoutes(root);
  const [articles, guides, resources, situations] = await Promise.all([
    readArrayMetadata(root, "src/data/articleDetails.ts", "ARTICLE_DETAILS", ["id", "numero", "titulo"]),
    readArrayMetadata(root, "src/data/guias.ts", "guiasPrincipales", ["id", "titulo", "descripcion"]),
    readArrayMetadata(root, "src/data/formularios.ts", "formularios", ["id", "titulo", "descripcion", "estado"]),
    readArrayMetadata(root, "src/pages/SituacionDetalle.tsx", "situacionesLaborales", ["id", "titulo", "descripcion"]),
  ]);
  const routes = [
    ...BASE_ROUTE_METADATA,
    ...articles.map(article => ({
      path: `/biblioteca/${article.id}`,
      title: `Artículo ${article.numero}: ${article.titulo} | Tecuiyo`,
      description: `Resumen educativo del artículo ${article.numero}: ${article.titulo}. Consulta el texto oficial de la LFT y orientación para tu caso; no sustituye asesoría jurídica.`,
    })),
    ...guides.map(guide => ({
      path: `/guias/${guide.id}`,
      title: `${guide.titulo} | Tecuiyo`,
      description: `${guide.descripcion}. Guía educativa; consulta fuentes oficiales y orientación para tu caso.`,
    })),
    ...resources.map(resource => ({
      path: `/formularios/${resource.id}`,
      title: `${resource.titulo} — ${resource.estado === "disponible" ? "plantilla educativa" : "recurso en preparación"} | Tecuiyo`,
      description: `${resource.descripcion} ${resource.estado === "disponible" ? "Plantilla educativa descargable; revisa y adapta el texto. No es un formato oficial." : "Consulta las orientaciones disponibles; todavía no ofrece una plantilla descargable."}`,
    })),
    ...situations.map(situation => ({
      path: `/buscador/${situation.id}`,
      title: `${situation.titulo} | Tecuiyo`,
      description: `${situation.descripcion} Recurso educativo; consulta fuentes oficiales y orientación para tu caso.`,
    })),
  ];
  if (new Set(routes.map(route => route.path)).size !== routes.length) throw new Error("Hay rutas duplicadas en los metadatos.");
  return routes;
}

function escapeHtml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export function renderRouteHtml(template, route) {
  const metadata = getHeadMetadata(route);
  const cleaned = template
    .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*>/gi, tag => {
      const attribute = tag.match(/\b(name|property)\s*=\s*(["'])(.*?)\2/i);
      return attribute && isManagedMetadata(attribute[1].toLowerCase(), attribute[3]) ? "" : tag;
    })
    .replace(/<link\b[^>]*>/gi, tag => /\brel\s*=\s*(["'])canonical\1/i.test(tag) ? "" : tag);
  const tags = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    ...metadata.meta.map(attributes => `<meta ${Object.entries(attributes).map(([name, value]) => `${name}="${escapeHtml(value)}"`).join(" ")} />`),
    ...(metadata.canonical ? [`<link rel="canonical" href="${escapeHtml(metadata.canonical)}" />`] : []),
  ].join("\n    ");
  if (!/<\/head>/i.test(cleaned)) throw new Error("La plantilla de Vite no contiene un encabezado HTML.");
  return cleaned.replace(/<\/head>/i, () => `${tags}\n  </head>`);
}

export async function generateStaticPages(outputDirectory, routes) {
  const template = await readFile(path.join(outputDirectory, "index.html"), "utf8");
  for (const route of routes) {
    if (!route.path || !/^\/(?:[a-zA-Z0-9-]+\/)*[a-zA-Z0-9-]*$/.test(route.path)) throw new Error("Ruta estática inválida.");
    const directory = path.join(outputDirectory, route.path.slice(1));
    await mkdir(directory, { recursive: true });
    await writeFile(path.join(directory, "index.html"), renderRouteHtml(template, route));
  }
  const notFoundFile = path.join(outputDirectory, "404.html");
  const notFoundTemplate = await readFile(notFoundFile, "utf8");
  await writeFile(notFoundFile, renderRouteHtml(notFoundTemplate, NOT_FOUND_METADATA));
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(route => `  <url><loc>${escapeHtml(getCanonicalUrl(route.path))}</loc></url>`).join("\n")}\n</urlset>\n`;
  await writeFile(path.join(outputDirectory, "sitemap.xml"), sitemap);
  await writeFile(path.join(outputDirectory, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`);
}

async function main() {
  const routes = await collectRouteMetadata();
  if (process.argv[2] === "--source") {
    const output = `// Generado desde las rutas y contenido reales por scripts/generate-route-pages.js.\n// Ejecuta npm run build para actualizarlo; no agregues recursos inexistentes.\nexport const ROUTE_METADATA = ${JSON.stringify(routes, null, 2)};\n`;
    await writeFile(path.join(projectRoot, "src/data/generatedRouteMetadata.js"), output);
  } else if (process.argv[2] === "--pages") {
    const { ROUTE_METADATA } = await import("../src/data/generatedRouteMetadata.js");
    if (JSON.stringify(ROUTE_METADATA) !== JSON.stringify(routes)) {
      throw new Error("El contenido cambió durante el build. Vuelve a ejecutar npm run build para alinear el cliente y el HTML.");
    }
    await generateStaticPages(path.join(projectRoot, "dist"), routes);
    process.stdout.write(`Metadatos y HTML estático generados para ${routes.length} rutas.\n`);
  } else {
    throw new Error("Usa --source antes de Vite o --pages después de Vite.");
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  main().catch(error => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
