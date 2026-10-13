# Revisión red team y sostenibilidad de Tecuiyo

Fecha: 13 de octubre de 2026. Base revisada: `main` en `4d89a095133fc641ed2637731bf62d0507581317`. Hosting: GitHub Pages, dominio `tecuiyo.izignamx.com`. La reparación de CI del PR #61 ya se fusionó y desplegó; esta revisión produce una propuesta nueva hacia `main`.

## Resultado

Los mayores obstáculos encontrados son respuestas y acciones que aparentan estar completas sin serlo. Una invitación a aportar necesita utilidad comprobable, claridad sobre quién mantiene el proyecto y recursos que se puedan compartir. La ausencia histórica de aportaciones no permite atribuir una causa sin datos de tráfico, difusión y pagos.

Esta es una revisión manual de código, contenido y flujos, con pruebas locales. No constituye un escaneo formal completo de Codex Security, una certificación jurídica ni una prueba de intrusión sobre infraestructura de terceros. Los recursos/preflight del escaneo formal no estaban disponibles. El challenge HTTP de Cloudflare impide usar las consultas realizadas como comprobación visual del sitio en producción.

## Hallazgos y acciones

| Prioridad | Evidencia en la base revisada | Consecuencia | Acción propuesta |
| --- | --- | --- | --- |
| P1 | Calculadora: vacaciones desde seis días, proporcionales desde enero sin intersección con ingreso, umbrales por 365.25 | Importes y elegibilidad engañosos | Tabla revisada, fechas calendario y alcance de prestaciones explícito; no liquidación completa |
| P1 | Cambiar salario/fechas conserva el resultado calculado | Se puede copiar un importe de datos anteriores | Invalidar resultado y mostrar los datos utilizados |
| P1 | Formularios: IDs y títulos distintos entre catálogo/detalle, toasts sin archivo real | Una descarga anunciada no existe | Dataset único; archivos educativos locales reales; trámites sin plantilla quedan en preparación |
| P1 | Descargas, validación jurídica, 95% de éxito y 500+ beneficiarios hardcoded | Confianza basada en cifras no demostradas | Retirar cifras; identificar escenarios educativos |
| P1 | 404 redirige a query sin recuperación | Un enlace externo a una herramienta o apoyo abre el inicio | Recuperar ruta, búsqueda y fragmento, validando mismo origen y conservando consultas normales |
| P1 | Artículos duplicados y atribuciones/plazos contradictorios | Información laboral poco fiable | Corregir temas contrastados y abrir revisión editorial completa (#64) |
| P2 | Contacto usa popup mailto y promete ayuda genérica | Dependencia de cliente de correo y expectativas ambiguas | Enlace real, dirección seleccionable y copia con resultado veraz; ayuda personal al directorio |
| P2 | Funding sólo en metadata/footer, PayPal ausente de la aplicación | No hay recorrido claro para sostener el proyecto | `/apoyar`, navegación y CTA posterior a utilidad, con alternativas no monetarias |
| P2 | Aviso enumera datos/newsletter/salvaguardas no demostrados; términos contradicen MIT | Operación y licencia ambiguas | Describir operación existente y distinguir servicios externos; validación jurídica pendiente |
| P2 | Esquemas de noticias admiten protocolos no web, credenciales y fechas inválidas | Datos externos insuficientemente validados | Esquema compartido para navegador, investigación y validación de datos |
| P2 | Permisos Pages/OIDC globales en CI; watchdog agrega cualquier cambio | Privilegios y alcance de escritura excesivos | Permisos por job, checkout sin credenciales persistidas y allowlist de noticias |
| P2 | App importa todas las páginas desde el inicio | Descarga inicial de recursos que no se van a consultar | Carga por ruta con estado accesible y recuperación de módulos fallidos |
| P2 | Bloques legales usan `prose` sin registrar Typography | Jerarquía, listas y citas sin el formato previsto | Activar el plugin ya instalado y probar la configuración real |

La continuación también resuelve referencias internas de biblioteca y relacionados: la disponibilidad se deriva de los 20 resúmenes reales de `articleDetails.ts`, no de una lista duplicada de IDs. Las 16 referencias sin resumen abren el PDF oficial con una etiqueta que explica el alcance. La extracción conserva los textos existentes y no los certifica como revisados. Las guías muestran consejos, documentos sugeridos y tiempos orientativos; el acceso a los pasos es un enlace real y no guarda progreso. Se retiraron plazos sin fuente y órdenes procesales universales antes de hacer visibles esas notas.

El esquema permisivo de noticias es una debilidad de validación, no prueba de un XSS explotable en producción. React, DOMPurify y la política de contenido reducen exposición; las noticias actuales revisadas usan HTTPS. No se encontró una credencial en el código inspeccionado. Estas observaciones no prueban ausencia de secretos o vulnerabilidades fuera del alcance revisado.

## Alcance del cálculo

La herramienta estima aguinaldo proporcional del año de salida, vacaciones proporcionales del ciclo laboral en curso y prima vacacional mínima. Muestra sus periodos y supuestos. Los días del aguinaldo intersectan ingreso, año de salida y salida; las vacaciones usan el aniversario laboral. La tabla posterior a la reforma de 2022 no se aplica como si fuera válida para separaciones anteriores a 2023.

La suma no determina una liquidación completa ni un pago neto. No incluye indemnización, prima de antigüedad, salarios pendientes, vacaciones de ciclos anteriores, pagos ya realizados, impuestos, intereses o mejoras contractuales. Faltan bases y circunstancias para estimar varios de esos conceptos de forma fiable. Su exclusión de la suma no implica renunciar a ellos. La ayuda competente se enlaza junto al resultado.

Fuente primaria contrastada: [LFT de la Cámara de Diputados](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf), documento que declara última reforma del 14-05-2026. Se contrastaron vacaciones (76–81), aguinaldo (87), antigüedad (162/485/486), feriado de sucesión (74) y prescripción por separación (518). Sólo se actualizan fechas de revisión de los temas efectivamente revisados. No se garantiza vigencia de toda la biblioteca ni se equipara actualizar noticias con revisar una ley.

## Contacto sin backend

La aplicación puede preparar un correo y copiar la dirección. Abrir el cliente de correo no envía un mensaje ni confirma recepción. Si el cliente no abre o el portapapeles falla, la dirección sigue visible para usarla manualmente. GitHub es público: sirve para errores reproducibles sin nombres, documentos o detalles de casos laborales. La asesoría individual corresponde al directorio de ayuda.

Un formulario alojado externo es una opción futura, si se elige y configura un proveedor real. Antes de habilitarlo: destino controlado por el mantenedor, endpoint público válido, campos mínimos, aviso sobre el tercero, protección contra abuso y estados basados en respuestas reales. Los secretos no deben incorporarse al bundle. No se agrega una falsa API, un endpoint de ejemplo activo ni un mensaje simulado de entrega.

## Modelo de apoyo inicial

El mantenedor confirmó en esta sesión que GitHub Sponsors y PayPal están activos y bajo su control. Se conservan los perfiles ya presentes en el repositorio; PayPal usa HTTPS. No se realizó una aportación de prueba, se consultaron saldos ni se modificaron perfiles, tiers o datos bancarios.

La propuesta pública explica quién mantiene Tecuiyo, qué trabajo se busca sostener y que aportar es opcional. Los pagos se realizan en el proveedor. El visitante confirma allí destinatario, monto, moneda y frecuencia. No existen contadores ficticios, confirmaciones por parámetros URL, bloqueo de resultados ni promesas de asesoría o de resultados legales por aportar.

| Vía | Papel inicial | Trabajo pendiente |
| --- | --- | --- |
| PayPal.Me existente | Aportación voluntaria externa de libre elección | Comprobar experiencia de visitante y datos mostrados en el proveedor |
| GitHub Sponsors existente | Apoyo a mantenimiento OSS | Revisar opciones efectivamente publicadas; recurrencia sólo si existe en el perfil |
| Apoyo institucional | Colaboración educativa o mantenimiento con independencia editorial | Propuesta concreta y acuerdo separado, sin rankings pagados |
| Contribución no monetaria | Compartir recursos, señalar errores y contribuir | Publicar mejoras y facilitar reportes útiles |

[GitHub documenta opciones únicas y mensuales](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/setting-up-github-sponsors-for-your-personal-account); eso no demuestra que un perfil concreto tenga tiers publicados. [PayPal.Me documenta pagos por enlace](https://www.paypal.com/us/cshelp/article/paypalme-frequently-asked-questions-help432); no se asume recurrencia ni moneda por defecto de la cuenta.

Los apoyos recurrentes pueden reducir la necesidad de campañas repetidas, pero el contenido laboral requiere mantenimiento. No hay evidencia para prometer ingresos pasivos o fechas para la primera aportación. La hipótesis inicial es que una utilidad fiable y una propuesta de mantenimiento comprensible facilitarán el apoyo; debe validarse con pagos reales.

## Experimento posterior a publicación

1. Verificar los flujos como visitante, incluidos enlace profundo, correo sin cliente configurado y destinatarios externos, sin usar pagos como una prueba automática.
2. Definir una meta mensual a partir del tiempo y coste reales de mantenimiento. No publicar una meta inventada ni comprometer entregables sin capacidad.
3. Publicar una explicación breve del propósito del apoyo y un avance verificable con enlaces a cambios. La difusión y los destinatarios corresponden al mantenedor; esta revisión no envía mensajes a terceros.
4. En un primer periodo de 30 días, registrar aportaciones completadas, ingreso neto y apoyos recurrentes en los paneles de los proveedores. Un clic no es una donación. Si no se mide tráfico, no calcular conversión. El valor cero también es un resultado.
5. Decidir si continuar la propuesta, mejorar difusión o entrevistar a posibles organizaciones interesadas. Evitar añadir productos o suscripciones propias antes de validar demanda y mantenimiento.

No se incorporó analítica nueva. Si se desea medir clics o visitas, elegir herramienta, coste, consentimiento y alcance de privacidad antes de hacerlo. No utilizar datos laborales para captar leads ni publicar identidades de aportantes sin autorización.

## Verificación de la propuesta

Entorno local: Node 24.19.0, npm 11.9.0. La instalación limpia con `npm ci` completó sin cambiar el lockfile. Pasaron:

- 124 pruebas Vitest en once archivos: 42 de cálculo, 24 de documentos, seis de contacto, cuatro existentes de noticias, 30 de rutas/esquema/RSS, cinco de carga de páginas, tres de integridad de biblioteca y diez de lectura de guías.
- Seis pruebas Node de dependencias y compatibilidad CSS, incluida la compilación con la configuración real de Typography.
- ESLint, comprobación real de TypeScript y validación de las 50 noticias activas. Las 555 archivadas cumplen el mismo esquema.
- Build final: bundle de entrada JS 335.37 kB (gzip 108.80 kB), frente a 716.18 kB (gzip 206.80 kB) de la primera revisión del PR. Las páginas y dependencias compartidas descargan sus chunks adicionales al usarse. Hay 19 chunks de página y ninguno supera 500 kB; desaparece la advertencia sin cambiar el límite.
- CSS final 111.59 kB (gzip 16.93 kB). Activar Typography añade estilos a los bloques `prose` existentes: jerarquía, listas, citas y modo oscuro. Es un cambio visual previsto, distinto del override del parser del PR #61, que conservó el CSS anterior.
- Revisión de espacios preservando finales de línea CRLF existentes. Los casos de calendario también se verificaron con zona `America/Mexico_City`.

Las pruebas verifican generación de contenido y llamadas a descarga/portapapeles/impresión, no el guardado físico, recepción del correo o ejecución de un pago. La recuperación de módulos se probó mediante un rechazo simulado; no recupera un archivo de entrada que nunca se descargó. No se comprobó la caché pública ni se hizo una revisión visual exhaustiva de Typography. No se enviaron correos ni se procesaron aportaciones. El PR no publica estos cambios en producción hasta fusionarse en `main` y completar Actions.

## Seguimiento

- [#63: reparación de flujos estáticos y confianza](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/63).
- [#64: fuentes, integridad y revisión editorial laboral](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/64).
- [#65: validar sostenibilidad y aportaciones reales](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/65).
- [#62: alertas restantes de dependencias](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/62).

Otros pendientes: mediciones de rendimiento con navegadores reales, accesibilidad de los flujos completos, metadatos por ruta/SEO y validación jurídica de privacidad/términos. No deben presentarse como resueltos por esta entrega.
