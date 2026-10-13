# Actualización compatible y auditoría de dependencias

Fecha: 13 de octubre de 2026. Base: `6fe21375c6d58fbff2f44732c6c1c60086fcc1a6`, que incorpora el PR #66. Seguimiento: [issue #62](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/62).

## Resultado

La actualización reduce `npm audit` de 14 entradas afectadas a cinco altas. Los conteos incluyen propagaciones entre paquetes; pasan de tres avisos raíz a uno. No se presenta como auditoría limpia. `npm audit --omit=dev` conserva cinco entradas altas.

| Paquete | Antes | Después |
| --- | --- | --- |
| ESLint y @eslint/js | 9.13.0 | 9.39.5 |
| typescript-eslint y su familia | 8.11.0 | 8.71.2 |
| @eslint/plugin-kit | 0.2.3 | 0.4.1 |
| Ajv | 6.12.6 | 6.15.0 |

Plugin Kit y Ajv se actualizan como dependencias nativas de los padres, sin overrides adicionales. Se conservan Tailwind 3.4.17, Typography 0.5.15 y los overrides de selector-parser 7.1.6. Se conservaron también las trece propiedades `libc` de paquetes Rollup que npm eliminó al normalizar el lockfile, sin alterar sus versiones.

El piso del proyecto completo para Node 22 pasa a 22.13 por `eslint-visitor-keys@5.0.1`. `.nvmrc` y CI continúan en Node 24. El mínimo de Vitest 5, por sí solo, sigue siendo 22.12.

## Avisos resueltos y pendientes

- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7): el parser de comentarios de Plugin Kit queda corregido con 0.4.1.
- [GHSA-2g4f-4pwh-qvx6](https://github.com/advisories/GHSA-2g4f-4pwh-qvx6): Ajv queda corregido con 6.15.0.
- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): `braces <=3.0.3` conserva el agotamiento de pila por patrones anidados. El aviso y registro consultados no publican una versión corregida. Las cinco entradas restantes corresponden a esta cadena: braces, micromatch, chokidar, fast-glob y Tailwind.

Tailwind 3.4.19 y fast-glob 3.3.3 todavía conservan la cadena afectada. No se aplicó `npm audit fix --force`, una versión ficticia de braces o una migración Tailwind 4. El issue #62 queda abierto para incorporar un parche mantenido o evaluar esa migración por separado.

[ESLint 9 está fuera de soporte desde el 6 de agosto de 2026](https://eslint.org/version-support/). Este cambio resuelve avisos compatibles de la configuración existente; no convierte esa línea en una solución mantenida a largo plazo. La migración a ESLint 10 requiere revisar los plugins y sus reglas por separado.

## Exposición comprobada

El hook `generateBundle` de Rollup inspeccionó todos los chunks JavaScript de esta compilación: 46 chunks y 206 identificadores de módulo emitidos. No incluyen braces, chokidar, micromatch, fast-glob o Tailwind. La evidencia normalizada se conserva en [audits/2026-10-dependencies](audits/2026-10-dependencies).

Esto respalda que la cadena concreta observada pertenece al toolchain actual y no a los módulos JavaScript emitidos para el navegador. El entorno de desarrollo y CI conserva el aviso. La comprobación no demuestra ausencia de otras vulnerabilidades ni verifica por sí sola el artefacto servido en producción. La clasificación de npm con `--omit=dev` tampoco determina alcance de ejecución en el navegador.

## Verificación

Node 24.19.0, npm 11.9.0. Pasaron instalación limpia sin bypass de peers, 124 pruebas de aplicación, seis pruebas CSS, lint, tipos, build y validación de 50 noticias. No se modificaron reglas de lint para ocultar errores.

El CSS anterior y posterior es idéntico: 111588 bytes, SHA-256 `6a13640f4e7e04c80f54fd41ecbf193155ae4cac16caef72f7c478611045ada6`. La actualización no cambia código de interfaz ni la salida CSS.

Los JSON conservan la auditoría anterior y posterior a esta actualización. Para reproducir la consulta actual, usa `npm audit --json`, `npm audit --omit=dev --json` y `npm ls eslint typescript-eslint braces chokidar micromatch fast-glob tailwindcss --all`. Los avisos publicados y el registro pueden cambiar después de esta fecha.
