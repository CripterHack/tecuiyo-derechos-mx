# Metadatos estáticos y correcciones de atribución

Fecha de revisión: 13 de octubre de 2026. Base funcional: PR #66, publicado en GitHub Pages. Este cambio conserva el alojamiento estático y no añade servicios de envío, seguimiento ni cobro.

## Páginas que pueden descubrirse

El comando `npm run build` extrae metadatos del contenido real, compila con Vite y genera un `index.html` por ruta. Cada archivo contiene título, descripción, canonical y etiquetas de vista previa antes de ejecutar JavaScript. El contenido completo continúa renderizándose con React; esto no equivale a renderizado completo en servidor ni garantiza indexación, posiciones o visitas.

| Contenido | Rutas |
| --- | ---: |
| Páginas principales | 14 |
| Artículos disponibles | 20 |
| Guías | 6 |
| Recursos | 8 |
| Situaciones laborales | 12 |
| Total | 60 |

El generador usa el AST de TypeScript instalado para leer campos literales de los datos existentes. Comprueba identificadores, duplicados y correspondencia con las rutas de `App.tsx`. No inventa artículos para referencias sin resumen. Los recursos en preparación conservan ese estado en su descripción.

Las URLs canonical usan `https://tecuiyo.izignamx.com/` y directorios con barra final. El sitemap enumera sólo las rutas generadas y no inventa fechas de actualización. Las rutas desconocidas y el documento 404 usan `noindex`, sin canonical que las atribuya a la portada. El componente `RouteMetadata` actualiza las mismas etiquetas al navegar dentro de React, utilizando el manifiesto generado.

Se conservan la política CSP, los assets de Vite y el script externo de recuperación de rutas. La vista previa usa el logo existente de 512 × 512. No se introducen scripts en línea.

## Correcciones editoriales acotadas

Se corrigieron los resúmenes de los artículos 24, 25, 85, 61, 66, 67 y 68. Las correcciones distinguen la falta de contrato escrito de una presunción automática, incorporan la referencia a beneficiarios, atribuyen correctamente el salario remunerador y explican la clasificación de jornada mixta. Para tiempo extraordinario se distingue el texto reformado de su aplicación gradual y el supuesto de emergencia del artículo 65.

Sólo estos siete registros muestran la nueva fecha de revisión y una fuente específica. Los otros trece resúmenes no se presentan como revisados en esta entrega. El texto nuevo se identifica como resumen educativo, con acceso a la fuente oficial. La revisión completa de la biblioteca, guías y datos antiguos continúa en el [issue #64](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/64).

Fuentes primarias consultadas:

- [Ley Federal del Trabajo consolidada, Cámara de Diputados](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFT.pdf).
- [Decreto de jornada laboral, DOF del 1 de mayo de 2026](https://dof.gob.mx/nota_detalle_popup.php?codigo=5786537), incluidos sus transitorios.

## Comprobaciones y límites

Sobre las dependencias del PR #67 ya integrado, `npm ci`, 139 pruebas de Vitest en 14 suites, seis pruebas CSS, lint, tipos, compilación y validación de 50 noticias completaron correctamente. Una comprobación HTTP local obtuvo 200 para las 60 rutas canonical, verificó assets y preservación de CSP, y contrastó el título del artículo 85 entre HTML y navegación cliente. La revisión independiente encontró un problema con tokens de sustitución de JavaScript en los metadatos; se corrigió mediante un callback y se añadió una regresión focal.

El manifiesto aumenta el bundle inicial de 335,37 a aproximadamente 352,71 kB (112,40 kB gzip en la compilación inicial). Las páginas siguen cargándose por separado. El coste permite compartir las mismas etiquetas entre HTML estático y navegación cliente; no se afirma que elimine JavaScript para leer el contenido.

La consulta pública al dominio devolvió 403 desde el servicio utilizado. Esa respuesta no permite verificar visualmente producción ni concluir que el sitio esté caído. Los logs de Pages confirman el despliegue; la configuración y acceso efectivo de los buscadores requieren seguimiento posterior.

Para actualizar el contenido, ejecuta `npm run build` y revisa los cambios de `generatedRouteMetadata.js`; no edites ese manifiesto a mano. La generación falla si cambian los datos entre la extracción y la construcción de las páginas.

La mejora facilita descubrir recursos y la página de apoyo. No demuestra ingresos. El [issue #65](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/65) conserva el seguimiento de aportaciones efectivamente confirmadas por las plataformas y de mejoras basadas en resultados, sin equiparar clics con pagos.

Referencias técnicas: [Google: fundamentos SEO para JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=es-419) y [GitHub: creación de un sitio Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).
