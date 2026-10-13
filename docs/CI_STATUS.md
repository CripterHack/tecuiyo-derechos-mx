# Estado de CI/CD y diagnóstico del 12 de octubre de 2026

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

El build conserva una advertencia por un bundle JavaScript mayor a 500 kB. La auditoría de dependencias conserva alertas en herramientas de lint y CSS, incluidas las dependencias transitivas descritas en #59. Estos resultados no equivalen a una revisión integral de seguridad ni a pruebas funcionales de todas las páginas. La suite actual solo cubre cuatro estados del componente de noticias.

## Entrega y seguimiento

- [Issue #58](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/58): compatibilidad Vite/Vitest/Node y recuperación del pipeline.
- [Issue #60](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/60): verificación real de TypeScript y tipos de Vitest 5, incluida en esta corrección.
- [Issue #59](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/59): actualización bloqueada de `postcss-selector-parser`, pendiente de una corrección separada y comparación del CSS.

El despliegue mediante `actions/deploy-pages@v4` continúa limitado a un `push` exitoso en `main`. El PR verifica y construye, pero no publica en producción. Para confirmar la recuperación de producción después del merge, revisar la nueva ejecución en `main` y su job `deploy`.

Los PR anteriores de Dependabot #35 y #47 deben reevaluarse respecto al estado actual antes de integrarlos. Sus propuestas de Vitest 4 preceden a la actualización de Vitest 5 presente en `main`.

Referencias técnicas: [migración de Vitest 5](https://vitest.dev/guide/migration/), [versiones soportadas de Vite](https://vite.dev/releases).
