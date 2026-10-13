import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import typography from "@tailwindcss/typography";

const require = createRequire(import.meta.url);
const tailwindRequire = createRequire(require.resolve("tailwindcss"));
const nested = tailwindRequire("postcss-nested");
const lockfile = JSON.parse(readFileSync(new URL("../package-lock.json", import.meta.url), "utf8"));
const fixtures = JSON.parse(readFileSync(new URL("./fixtures/css-dependencies.json", import.meta.url), "utf8"));

function assertPatchedVersion(version, context) {
  const match = /^(\d+)\.(\d+)\.(\d+)$/.exec(version);
  assert.ok(match, `${context}: se requiere una versión estable, recibida ${version}`);
  const [major, minor, patch] = match.slice(1).map(Number);
  const patched = major > 7 || (major === 7 && (minor > 1 || (minor === 1 && patch >= 6)));
  assert.ok(patched, `${context}: ${version} debe ser >=7.1.6 por GHSA-rj75-hqrm-r3gf`);
}

test("El lockfile no contiene copias vulnerables de postcss-selector-parser", () => {
  const parsers = Object.entries(lockfile.packages).filter(([path]) => path.endsWith("/postcss-selector-parser"));
  assert.ok(parsers.length > 0, "El lockfile debe contener el parser de los consumidores CSS");
  for (const [path, pkg] of parsers) {
    assertPatchedVersion(pkg.version, path);
  }
});

test("Los tres consumidores CSS resuelven un parser corregido", () => {
  const consumers = [
    ["tailwindcss", require.resolve("tailwindcss")],
    ["postcss-nested", tailwindRequire.resolve("postcss-nested")],
    ["@tailwindcss/typography", require.resolve("@tailwindcss/typography")],
  ];
  for (const [consumer, entrypoint] of consumers) {
    const consumerRequire = createRequire(entrypoint);
    const parserPackage = consumerRequire("postcss-selector-parser/package.json");
    assertPatchedVersion(parserPackage.version, consumer);
  }
});

for (const fixture of fixtures) {
  test(fixture.name, async () => {
    const plugins = fixture.plugin === "nested"
      ? [nested()]
      : [tailwindcss({
          content: [{ raw: fixture.content, extension: "html" }],
          darkMode: "class",
          plugins: fixture.typography ? [typography] : [],
        })];
    const result = await postcss(plugins).process(fixture.css, { from: undefined });
    const rules = [];
    result.root.walkRules(rule => rules.push(rule));

    for (const expected of fixture.rules) {
      const rule = rules.find(candidate => candidate.selector === expected.selector);
      assert.ok(rule, `Falta el selector ${expected.selector}`);
      for (const [property, value] of Object.entries(expected.declarations)) {
        const declaration = rule.nodes.find(node => node.type === "decl" && node.prop === property);
        assert.ok(declaration, `Falta ${property} en ${expected.selector}`);
        assert.equal(declaration.value, value, `${expected.selector}: ${property}`);
      }
    }
  });
}
