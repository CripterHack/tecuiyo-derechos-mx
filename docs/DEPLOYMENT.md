# 🚀 Guía de Despliegue

Esta guía explica cómo desplegar Tecuiyo en diferentes plataformas.

## 📋 Tabla de Contenidos

- [Prerrequisitos](#prerrequisitos)
- [Build de Producción](#build-de-producción)
- [Lovable Platform](#lovable-platform)
- [Vercel](#vercel)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [Docker](#docker)
- [Variables de Entorno](#variables-de-entorno)

## ✅ Prerrequisitos

- Node.js 18 o superior
- npm o yarn
- Git

## 🏗️ Build de Producción

### Crear Build Local
```bash
# Instalar dependencias
npm install

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
```

## 🌐 Lovable Platform

Tecuiyo está optimizado para desplegarse en Lovable:

1. **Acceso directo**: Visita tu proyecto en Lovable
2. **Publicación**: Haz clic en "Share" → "Publish"
3. **Dominio personalizado**: Configura en Settings → Domains

### Ventajas de Lovable
- ✅ Despliegue automático desde GitHub
- ✅ SSL automático
- ✅ CDN global
- ✅ Preview builds para PRs
- ✅ Rollback con un clic

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

### Usando GitHub Actions
Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Configuración de Vite para GitHub Pages
En `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/tecuiyo/', // Reemplaza con el nombre de tu repo
  build: {
    outDir: 'dist',
  },
})
```

## 🐳 Docker

### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine as build

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
# Limpiar cache
rm -rf node_modules package-lock.json
npm install

# Verificar versión de Node
node --version  # Debe ser 18+
```

#### Rutas No Funcionan
Asegúrate de tener configurado el fallback a `index.html` para SPAs.

#### Variables de Entorno No Se Cargan
Las variables deben empezar con `VITE_` para ser accesibles en el frontend.

## 📞 Soporte

¿Problemas con el despliegue?

- **Documentación**: Consulta la documentación de tu plataforma
- **Issues**: [GitHub Issues](https://github.com/tecuiyo/tecuiyo/issues)
- **Email**: soporte@tecuiyo.com

---

¡Feliz despliegue! 🎉