export const SITE_ORIGIN = "https://tecuiyo.izignamx.com";

export const NOT_FOUND_METADATA = {
  path: null,
  title: "Página no encontrada | Tecuiyo",
  description: "No encontramos este recurso de Tecuiyo. Consulta las páginas y recursos educativos disponibles desde el inicio.",
};

export function normalizeRoutePath(pathname) {
  return pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
}

export function getCanonicalUrl(routePath) {
  return `${SITE_ORIGIN}${routePath === "/" ? "/" : `${routePath}/`}`;
}

/** Comparte los mismos valores entre el HTML publicado y la navegación React. */
export function getHeadMetadata(route) {
  const canonical = route.path ? getCanonicalUrl(route.path) : null;
  const robots = canonical ? "index, follow" : "noindex, follow";
  const image = `${SITE_ORIGIN}/logo@512.png`;

  return {
    title: route.title,
    canonical,
    meta: [
      { name: "description", content: route.description },
      { name: "robots", content: robots },
      { name: "googlebot", content: robots },
      { property: "og:title", content: route.title },
      { property: "og:description", content: route.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_MX" },
      { property: "og:site_name", content: "Tecuiyo" },
      ...(canonical ? [{ property: "og:url", content: canonical }] : []),
      { property: "og:image", content: image },
      { property: "og:image:width", content: "512" },
      { property: "og:image:height", content: "512" },
      { property: "og:image:alt", content: "Logotipo de Tecuiyo" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: route.title },
      { name: "twitter:description", content: route.description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: "Logotipo de Tecuiyo" },
    ],
  };
}

export function isManagedMetadata(attribute, value) {
  return attribute === "property"
    ? value.startsWith("og:")
    : ["description", "robots", "googlebot"].includes(value) || value.startsWith("twitter:");
}
