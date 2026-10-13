# 🚀 Guía de Despliegue

Esta guía explica cómo desplegar Tecuiyo en diferentes plataformas.

## 📋 Tabla de Contenidos

- [Prerrequisitos](#-prerrequisitos)
- [Build de Producción](#-build-de-producción)
- [Lovable Platform](#lovable-platform)
- [Vercel](#-vercel)
- [Netlify](#-netlify)
- [GitHub Pages](#-github-pages)
- [Docker](#-docker)
- [Variables de Entorno](#-variables-de-entorno)

## ✅ Prerrequisitos

- Node.js 24, definido en `.nvmrc` y usado por ambos workflows
- npm
- Git

Usa `nvm install` y `nvm use` si administras Node.js con nvm. El rango compatible con Vitest 5 está declarado en `package.json`: `^22.12.0 || ^24.0.0 || >=26.0.0`.

## 🏗️ Build de Producción

### Crear Build Local
```bash
# Instalar dependencias
npm ci

# Crear build de producción
npm run build

# Previsualizar el build
npm run preview
```

El build se generará en la carpeta `dist/`.

### Verificación del Build
```bash
# Verificar que no hay errores de TypeScript
npm run type-check

# Verificar linting
npm run lint

# Ejecutar tests
npm test

# Verificar dependencias CSS y compatibilidad de sus consumidores
npm run test:css-dependencies
```

## ▲ Vercel

### Despliegue Automático

1. **Conecta tu repo**: Ve a [vercel.com](https://vercel.com)
2. **Importa proyecto**: Selecciona el repositorio de Tecuiyo
3. **Configura**: Vercel detectará automáticamente Vite
4. **Despliega**: Haz clic en "Deploy"

### Configuración Manual

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar desde la línea de comandos
vercel

# Para producción
vercel --prod
```

### Archivo de Configuración (vercel.json)

```json
{
  "framework": "vite",
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 🔷 Netlify

### Despliegue Desde Git

1. **Conecta repositorio**: En [netlify.com](https://netlify.com)
2. **Configuración de build**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Despliega**: Netlify construirá automáticamente

### Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Desplegar
netlify deploy

# Para producción
netlify deploy --prod
```

### Archivo de Configuración (netlify.toml)

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 📄 GitHub Pages

### Pipeline de CI/CD (Automatizado)

El proyecto cuenta con un workflow automátizado en `.github/workflows/ci-cd.yml` que realiza lo siguiente:

1. **Verificación Contínua (CI)**:
    - Se ejecuta en cada `push` y `pull_request` a `main`.
    - Usa la versión de Node.js definida en `.nvmrc`.
    - Instala las dependencias bloqueadas (`npm ci`), sin omitir la validación de peer dependencies.
    - Ejecuta las pruebas (`npm run test`, en modo CI).
    - Comprueba las versiones corregidas del parser CSS y la salida de Tailwind, PostCSS Nested y Typography (`npm run test:css-dependencies`).
    - Ejecuta el linter (`npm run lint`) para asegurar calidad de código.
    - Verifica los proyectos de aplicación y Node (`npm run type-check`), incluidas ambas configuraciones Vite/Vitest.
    - Construye la aplicación (`npm run build`).

2. **Despliegue Contínuo (CD)**:
    - Solo se ejecuta si el paso de CI es exitoso y estamos en la rama `main`.
    - Publica `dist/` como artefacto con `actions/upload-pages-artifact@v3`.
    - El job `deploy` usa `actions/deploy-pages@v4` y el entorno `github-pages`.
    - Los PR verifican y construyen el proyecto, pero no despliegan a producción.

### Configuración de Dominio Personalizado

Para conectar tu subdominio (ej. `app.tecuiyo.com`):

1. Ve a tu repositorio en GitHub -> **Settings** -> **Pages**.
2. En "Build and deployment", selecciona **GitHub Actions** como Source.
3. En "Custom domain", conserva el dominio de producción `tecuiyo.izignamx.com`. El archivo `public/CNAME` también se copia al build.
4. En tu proveedor de DNS, crea un registro `CNAME` apuntando a `CripterHack.github.io`.
5. Espera a que GitHub verifique el DNS y activa "Enforce HTTPS".

### Configuración de Vite para GitHub Pages

En `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/', // El dominio personalizado sirve la aplicación desde la raíz
  build: {
    outDir: 'dist',
  },
})
```

## 🐳 Docker

### Dockerfile

```dockerfile
# Build stage
FROM node:24-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

# Copiar build
COPY --from=build /app/dist /usr/share/nginx/html

# Configuración nginx para SPA
RUN echo 'server { \
    listen 80; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose

```yaml
version: '3.8'
services:
  tecuiyo:
    build: .
    ports:
      - "3000:80"
    restart: unless-stopped
```

### Comandos Docker

```bash
# Construir imagen
docker build -t tecuiyo .

# Ejecutar contenedor
docker run -p 3000:80 tecuiyo

# Con docker-compose
docker-compose up -d
```

## 🔧 Variables de Entorno

### Variables de Producción

```env
# Información de la aplicación
VITE_APP_NAME=Tecuiyo
VITE_APP_VERSION=1.0.0
VITE_APP_DESCRIPTION=Plataforma de derechos laborales

# URLs de la aplicación
VITE_APP_URL=https://tecuiyo.com
VITE_API_URL=https://api.tecuiyo.com

# Analytics (opcional)
VITE_GA_TRACKING_ID=G-XXXXXXXXXX

# Feature flags (opcional)
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_FEEDBACK=true
```

### Configuración por Plataforma

#### Vercel

```bash
vercel env add VITE_APP_URL
```

#### Netlify

```bash
netlify env:set VITE_APP_URL https://tecuiyo.netlify.app
```

#### GitHub Actions

Agrega secrets en Settings → Secrets and variables → Actions

## 🔍 Monitoreo y Analytics

### Herramientas Recomendadas

- **Uptime**: Uptimerobot, Pingdom
- **Analytics**: Google Analytics, Plausible
- **Errores**: Sentry, LogRocket
- **Performance**: Lighthouse CI

### Configuración de Monitoring

```typescript
// src/lib/analytics.ts
export const initAnalytics = () => {
  if (import.meta.env.VITE_GA_TRACKING_ID) {
    // Configurar Google Analytics
  }
}

// src/lib/monitoring.ts
export const initErrorReporting = () => {
  if (import.meta.env.PROD) {
    // Configurar Sentry
  }
}
```

## 🚀 Optimizaciones de Producción

### Performance

- ✅ Lazy loading de componentes
- ✅ Code splitting automático
- ✅ Compresión gzip/brotli
- ✅ Optimización de imágenes
- ✅ Service Worker (PWA)

### SEO

- ✅ Meta tags dinámicos
- ✅ Sitemap.xml
- ✅ robots.txt
- ✅ Schema markup

### Seguridad

- ✅ Headers de seguridad
- ✅ HTTPS obligatorio
- ✅ CSP (Content Security Policy)
- ✅ Sanitización de contenido

## 📊 Métricas de Producción

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Lighthouse Score Target

- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 90

## 🆘 Troubleshooting

### Problemas Comunes

#### Build Falla

```bash
# Verificar y seleccionar la versión del proyecto
node --version  # CI usa Node.js 24
nvm use

# Reproducir la instalación exacta sin modificar el lockfile
npm ci
```

Si `npm ci` reporta `ERESOLVE`, revisa la compatibilidad entre Vite, Vitest y `@vitejs/plugin-react-swc`. Regenera y verifica `package-lock.json` junto con `package.json` al actualizar dependencias. No uses `--force` ni `--legacy-peer-deps` para ocultar el conflicto.

#### Rutas No Funcionan

Asegúrate de tener configurado el fallback a `index.html` para SPAs.

#### Variables de Entorno No Se Cargan

Las variables deben empezar con `VITE_` para ser accesibles en el frontend.

## 📞 Soporte

¿Problemas con el despliegue?

- **Documentación**: Consulta la documentación de tu plataforma
- **Arquitectura**: [Documentación de Arquitectura](./ARCHITECTURE.md)
- **Issues**: [GitHub Issues](https://github.com/CripterHack/tecuiyo-derechos-mx/issues)
- **Email**: [edgar@izignamx.com](mailto:edgar@izignamx.com)

---

¡Feliz despliegue! 🎉
