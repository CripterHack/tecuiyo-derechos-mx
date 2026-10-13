# Estado de CI/CD y diagnóstico del 12 de octubre de 2026

## Estado confirmado al 13 de octubre de 2026

El [PR #61](https://github.com/CripterHack/tecuiyo-derechos-mx/pull/61) fue fusionado en `main`, commit `4d89a095133fc641ed2637731bf62d0507581317`. La [ejecución 38420756657](https://github.com/CripterHack/tecuiyo-derechos-mx/actions/runs/38420756657) completó verificación y despliegue; GitHub Pages informó éxito el 13-10-2026 a las 15:19:31 UTC. Los issues #58, #59 y #60 quedaron cerrados. El issue #62 conserva las alertas de dependencias pendientes.

Las secciones siguientes conservan el diagnóstico y las comprobaciones anteriores al merge como registro histórico. Sus referencias al PR abierto o al despliegue anterior no describen el estado actual. La comprobación HTTP del dominio recibió un challenge de Cloudflare y no permitió validar visualmente la publicación; el éxito de despliegue está confirmado por los logs de Actions.

## Incidente

El merge del PR #57 dejó `main` en `a350334aa9237d450357a0b62d7fc3c89271e269` con Vitest 5.0.4 y Vite 5.4.10. La instalación con `npm ci` falló por incompatibilidad de peer dependencies. La [ejecución 38339891363](https://github.com/CripterHack/tecuiyo-derechos-mx/actions/runs/38339891363) omitió pruebas, lint, tipos, build y despliegue. La [ejecución anterior 38339849146](https://github.com/CripterHack/tecuiyo-derechos-mx/actions/runs/38339849146), sobre `ce57c6b150ab8c5180fa3142373b59957e0622d4`, sí desplegó.

Cambiar solamente Node.js no resuelve el conflicto. CI/CD usaba Node 18 y Content Watchdog Node 20, pero Vitest 5 requiere `^22.12.0 || ^24.0.0 || >=26.0.0`.

## Corrección

| Herramienta | Versión bloqueada tras la corrección |
| :--- | :--- |
| Node.js de ambos workflows | 24, desde `.nvmrc` |
| Vite | 6.4.4 |
| Plugin React SWC | 3.11.0 |
| Vitest | 5.0.4 |

La combinación satisface los peer dependencies. Vite 6.4 recibe parches de seguridad y permite una reparación acotada sin cambiar al bundler de Vite 8. Ambos workflows usan `npm ci` sin omitir la validación de dependencias. `package.json` declara el rango de Node compatible.

La migración de tipos usa `@testing-library/jest-dom/vitest` y `defineConfig` de `vitest/config`. El script `type-check` comprueba explícitamente la aplicación y el proyecto de Node, que ahora incluye ambas configuraciones Vite/Vitest. Antes, `tsc --noEmit` sobre el proyecto raíz vacío producía un resultado exitoso sin comprobar la aplicación.

## Evidencia de verificación local

Entorno: Node 24.19.0 y npm 11.9.0.

```bash
npm ci
CI=true npm run test
npm run lint
npm run type-check
npm run build
npm run validate-data
```

La instalación limpia, las cuatro pruebas existentes, lint, la comprobación real de tipos y el build pasan. La validación de datos confirma 50 noticias. Errores de tipo temporales en `src` y en `vitest.config.ts` producen TS2322 y salida no exitosa con el nuevo comando. Los archivos temporales se retiraron.

El build conserva una advertencia por un bundle JavaScript mayor a 500 kB. La auditoría de dependencias conserva alertas adicionales en herramientas de lint y CSS. Estos resultados no equivalen a una revisión integral de seguridad ni a pruebas funcionales de todas las páginas. La suite de componentes cubre cuatro estados del componente de noticias. La continuación del 13 de octubre añade cinco comprobaciones de dependencias y compatibilidad CSS, descritas más adelante.

## Entrega y seguimiento

- [Issue #58](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/58): compatibilidad Vite/Vitest/Node y recuperación del pipeline.
- [Issue #60](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/60): verificación real de TypeScript y tipos de Vitest 5, incluida en esta corrección.
- [Issue #59](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/59): actualización bloqueada de `postcss-selector-parser`, corregida en un commit separado de la rama del PR #61, con comparación del CSS.

El despliegue mediante `actions/deploy-pages@v4` continúa limitado a un `push` exitoso en `main`. El PR verifica y construye, pero no publica en producción. Para confirmar la recuperación de producción después del merge, revisar la nueva ejecución en `main` y su job `deploy`.

Los PR anteriores de Dependabot #35 y #47 deben reevaluarse respecto al estado actual antes de integrarlos. Sus propuestas de Vitest 4 preceden a la actualización de Vitest 5 presente en `main`.

Referencias técnicas: [migración de Vitest 5](https://vitest.dev/guide/migration/), [versiones soportadas de Vite](https://vite.dev/releases).

## Continuación del 13 de octubre: parser CSS

El PR #61 continúa abierto hacia `main`. Esta continuación se agrega al mismo PR para mantener la reparación compatible de Vite/Vitest como requisito previo. No se fusionó ni se ejecutó un despliegue de producción.

La última publicación confirmada por los logs de GitHub Pages corresponde a `ce57c6b150ab8c5180fa3142373b59957e0622d4`, mediante el job `deploy` de la ejecución 38339849146. La comprobación HTTP actual encontró una protección de Cloudflare, lo cual no prueba una caída del sitio.

### Corrección acotada

Los `overrides` de npm sustituyen `postcss-selector-parser` por la versión estable 7.1.6 únicamente bajo `tailwindcss` y `@tailwindcss/typography`. El alcance de Tailwind también cubre su dependencia PostCSS Nested. Se conservaron Tailwind 3.4.17, Typography 0.5.15 y PostCSS Nested 6.2.0. No se agregó un override global, no se degradó Typography y no se migró a Tailwind 4.

Actualizar solamente los padres a Tailwind 3.4.19 y Typography 0.5.20 no resuelve el problema: esas versiones todavía requieren parser 6. Esta sustitución es temporal. Debe reevaluarse cuando los padres adopten de forma nativa una versión corregida, ejecutando la comparación CSS y las pruebas antes de retirarla o cambiarla.

### Pruebas y comparación

`npm run test:css-dependencies` ejecuta cinco pruebas con Node:

1. Ninguna ruta del lockfile contiene un parser anterior a 7.1.6.
2. Los tres consumidores instalados resuelven un parser corregido.
3. Tailwind conserva variantes group/peer, dark, atributos, selectores arbitrarios y `@apply`.
4. PostCSS Nested conserva combinadores y pseudo-clases al expandir `&`.
5. Typography conserva `prose`, modificadores de elementos y pseudo-elementos `::marker`/`::before`.

Las dos comprobaciones de versiones fallaron antes de aplicar el cambio por las copias 6.0.10 y 6.1.4. Las tres pruebas de salida CSS pasaron con la configuración anterior. Tras la corrección pasan las cinco. CI ejecuta este comando antes del lint, tipos y build.

El CSS de la aplicación y de las tres fixtures se comparó byte por byte antes y después del override, con resultados idénticos:

| Salida | Bytes | SHA-256 |
| :--- | ---: | :--- |
| Aplicación | 93 241 | `0b3544759e824611b57031c99d2093e7c491db4abe5e9f3de50d288e7604a59b` |
| Tailwind y variantes | 815 | `4bf6409a344ab92fb88db29a27b03978d3bad0b46452af68ae1ad175bf7a2eac` |
| PostCSS Nested | 76 | `4fe0fc280805f3b6c856be2a5dc55656e26531d7ee743a00e3269e92f93cfffd` |
| Typography | 14 906 | `a5fe400de308ba728681264fab568883ae629bd6559d720904f1197b2eacd9dc` |

La configuración actual de la aplicación no registra el plugin Typography, aunque algunas páginas usan clases `prose`. Por eso las pruebas de compatibilidad lo cargan explícitamente en una fixture. Esta corrección no modifica la configuración visual de la aplicación. La igualdad de estas salidas no sustituye una revisión visual exhaustiva de todas las páginas.

También pasan las cuatro pruebas de componentes, lint, la comprobación real de TypeScript, build y validación de 50 noticias. La instalación limpia usa `npm ci` sin bypass de peer dependencies. El árbol instalado solo contiene parser 7.1.6.

### Auditoría restante

El advisory del parser deja de aparecer. `npm audit` pasa de 17 a 14 entradas reportadas: 11 altas, 1 moderada y 2 bajas. Estas cifras incluyen dependencias afectadas por propagación y no representan 14 fallos independientes. `npm audit --omit=dev` todavía reporta cinco entradas de la cadena Tailwind/chokidar/fast-glob/micromatch/braces. No se presenta esta corrección como una auditoría completamente limpia ni como prueba de ausencia de vulnerabilidades en la aplicación.

El [issue #62](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/62) registra el seguimiento de las alertas restantes, la evaluación de exposición y las posibles actualizaciones compatibles. Una migración de Tailwind 4 o una auditoría con cambios forzados no forma parte de esta reparación.

Referencias: [advisory del parser](https://github.com/postcss/postcss-selector-parser/security/advisories/GHSA-rj75-hqrm-r3gf), [overrides de npm](https://docs.npmjs.com/cli/v11/configuring-npm/package-json/).
