# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a Tecuiyo! Este documento te guiará a través del proceso de contribución.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)
- [Pull Requests](#pull-requests)
- [Estándares de Código](#estándares-de-código)
- [Configuración del Entorno](#configuración-del-entorno)

## 📜 Código de Conducta

Este proyecto adhiere a un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables a [conducta@tecuiyo.com](mailto:conducta@tecuiyo.com).

## 🚀 Cómo Contribuir

### Para Desarrolladores

1. **Configuración del entorno**
   ```bash
   git clone https://github.com/tecuiyo/tecuiyo.git
   cd tecuiyo
   npm install
   npm run dev
   ```

2. **Tipos de contribuciones**
   - 🐛 Corrección de bugs
   - ✨ Nuevas características
   - 📚 Mejoras en documentación
   - 🎨 Mejoras de UI/UX
   - ⚡ Optimizaciones de rendimiento
   - 🧪 Mejoras en testing

### Para Juristas y Expertos Legales

1. **Revisión de contenido legal**
   - Verificar exactitud de artículos de la LFT
   - Validar fórmulas de cálculo
   - Revisar casos de estudio

2. **Creación de contenido**
   - Nuevos casos de estudio
   - Guías prácticas
   - Explicaciones simplificadas

## 🐛 Reportar Bugs

### Antes de reportar
- Verifica que el bug no haya sido reportado previamente
- Asegúrate de que el bug sea reproducible
- Recopila información del entorno (navegador, OS, etc.)

### Formato del reporte
```markdown
**Descripción del Bug**
Una descripción clara y concisa del bug.

**Pasos para Reproducir**
1. Ve a '...'
2. Haz clic en '....'
3. Desplázate hacia abajo hasta '....'
4. Ve el error

**Comportamiento Esperado**
Una descripción clara de lo que esperabas que pasara.

**Capturas de Pantalla**
Si aplica, agrega capturas de pantalla para ayudar a explicar el problema.

**Información del Entorno:**
- OS: [ej. iOS]
- Navegador: [ej. chrome, safari]
- Versión: [ej. 22]
```

## 💡 Sugerir Mejoras

### Formato de sugerencia
```markdown
**Descripción de la Mejora**
Una descripción clara y concisa de la mejora propuesta.

**Justificación**
Explica por qué esta mejora sería útil para Tecuiyo.

**Solución Propuesta**
Una descripción clara de lo que quieres que pase.

**Alternativas Consideradas**
Una descripción clara de cualquier solución alternativa que hayas considerado.
```

## 🔄 Pull Requests

### Proceso
1. **Fork** el repositorio
2. **Crea** una rama desde `main`
3. **Realiza** tus cambios
4. **Prueba** que todo funcione correctamente
5. **Commit** con mensajes descriptivos
6. **Push** a tu fork
7. **Crea** un Pull Request

### Checklist del PR
- [ ] El código sigue los estándares del proyecto
- [ ] Se han agregado tests si es necesario
- [ ] La documentación ha sido actualizada
- [ ] Los cambios son backward compatible
- [ ] Se ha probado en diferentes navegadores
- [ ] Los commits tienen mensajes descriptivos

### Formato del PR
```markdown
## Descripción
Breve descripción de los cambios realizados.

## Tipo de Cambio
- [ ] Bug fix (cambio que corrige un issue)
- [ ] Nueva característica (cambio que agrega funcionalidad)
- [ ] Breaking change (cambio que causaría que funcionalidad existente no funcione como se esperaba)
- [ ] Mejora de documentación

## ¿Cómo ha sido probado?
Describe las pruebas que ejecutaste para verificar tus cambios.

## Checklist:
- [ ] Mi código sigue las guías de estilo del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado mi código, particularmente en áreas difíciles de entender
- [ ] He hecho los cambios correspondientes a la documentación
- [ ] Mis cambios no generan nuevas advertencias
```

## 🎨 Estándares de Código

### TypeScript/React
- Usar TypeScript estricto
- Componentes funcionales con hooks
- Props tipadas con interfaces
- Naming conventions descriptivos

### Estilos
- Usar Tailwind CSS
- Seguir el sistema de diseño establecido
- Componentes responsivos por defecto
- Soporte para modo oscuro

### Estructura de Archivos
```
src/
├── components/
│   ├── ui/           # Componentes base reutilizables
│   ├── Feature.tsx   # Componentes específicos
├── pages/            # Páginas de la aplicación
├── hooks/            # Custom hooks
├── lib/              # Utilidades
├── data/             # Datos estáticos
└── utils/            # Funciones helper
```

### Convenciones de Naming
- Componentes: `PascalCase`
- Archivos: `PascalCase.tsx`
- Variables/funciones: `camelCase`
- Constantes: `SNAKE_CASE`
- CSS classes: `kebab-case`

### Commits
Usa [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: agrega nueva calculadora de finiquitos
fix: corrige cálculo de aguinaldo
docs: actualiza guía de instalación
style: mejora espaciado en componente Button
refactor: reorganiza estructura de páginas
test: agrega tests para calculadora
```

## 🛠️ Configuración del Entorno

### Herramientas Recomendadas
- **Editor**: VS Code con extensiones:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint

### Scripts Disponibles
```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run type-check   # Verificación de tipos
npm run lint         # Linting
npm run lint:fix     # Fix automático de linting
```

### Variables de Entorno
Crea un archivo `.env.local` para configuración local:
```env
VITE_APP_NAME=Tecuiyo
VITE_APP_VERSION=1.0.0
```

## 🧪 Testing

### Ejecutar Tests
```bash
npm run test         # Ejecutar tests
npm run test:watch   # Tests en modo watch
npm run test:coverage # Coverage report
```

### Escribir Tests
- Tests unitarios para utilidades
- Tests de componentes con Testing Library
- Tests de integración para flujos críticos

## 📚 Recursos Adicionales

- [Documentación de React](https://reactjs.org/docs)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)
- [Guía de Tailwind CSS](https://tailwindcss.com/docs)
- [Ley Federal del Trabajo](http://www.diputados.gob.mx/LeyesBiblio/pdf/125_020719.pdf)

## 📞 Contacto

¿Tienes preguntas? No dudes en contactarnos:

- **Email**: contribuir@tecuiyo.com
- **Discusiones**: [GitHub Discussions](https://github.com/tecuiyo/tecuiyo/discussions)
- **Issues**: [GitHub Issues](https://github.com/tecuiyo/tecuiyo/issues)

---

¡Gracias por contribuir a Tecuiyo! 🎉