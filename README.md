# 🏛️ Tecuiyo

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-blue.svg)

**Tecuiyo** es una plataforma educativa de código abierto sobre derechos laborales en México. Ofrece recursos gratuitos para consultar, comparar con fuentes oficiales y preparar una consulta. El contenido sigue en revisión editorial; las herramientas no sustituyen asesoría jurídica personalizada.

## 🌟 Características Principales

- **📚 Biblioteca educativa**: Selección de artículos, resúmenes en revisión y acceso al texto oficial de la LFT
- **🔍 Buscador Inteligente**: Encuentra respuestas a situaciones laborales específicas
- **🧮 Estimación parcial**: Aguinaldo, vacaciones proporcionales del ciclo en curso y prima vacacional, con datos y supuestos visibles; no determina un finiquito completo
- **📑 Documentos educativos**: Dos solicitudes reales en texto para constancia de trabajo y desglose de finiquito; seis recursos en preparación
- **📖 Guías Prácticas**: Tutoriales paso a paso para procesos laborales comunes
- **🎯 Casos de estudio**: Escenarios educativos con montos y resultados ilustrativos
- **📞 Directorio**: Recursos de autoridades para buscar orientación laboral; confirmar competencia y datos en sus fuentes oficiales
- **🌙 Modo Oscuro**: Interfaz adaptable para mejor experiencia de usuario
- **📱 Diseño adaptable**: Interfaz para distintas pantallas, abierta a mejoras de usabilidad
- **♿ Accesibilidad**: Controles y etiquetas para teclado y tecnologías de asistencia; revisión integral pendiente
- **❤️ Apoyo voluntario**: Página `/apoyar` con PayPal y GitHub Sponsors externos, manteniendo acceso gratuito
- **✉️ Contacto estático**: Correo visible, enlace `mailto:` y copia de dirección; no simula envío desde el sitio

## 🚀 Demo en Vivo

Visita [Tecuiyo](https://tecuiyo.izignamx.com/) para ver la aplicación en funcionamiento.

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.3.1 | Biblioteca de interfaz de usuario |
| **TypeScript** | 5.0+ | Lenguaje de programación tipado |
| **Tailwind CSS** | 3.4+ | Framework de estilos utilitarios |
| **Vite** | 6.4.4+ | Herramienta de construcción rápida |
| **Vitest** | 5.0.4+ | Pruebas de componentes |
| **React Router** | 7.18.2+ | Enrutamiento para React |
| **Radix UI** | 1.0+ | Componentes accesibles |
| **Lucide React** | 0.462+ | Iconos SVG para React |
| **Tanstack Query** | 5.56+ | Gestión de estado del servidor |

## 📦 Instalación

### Prerrequisitos

- Node.js 24 (versión usada por CI, definida en `.nvmrc`)
- npm

El proyecto requiere Node.js `^22.13.0 || ^24.0.0 || >=26.0.0`; CI usa Node 24. Aunque Vitest 5 admite 22.12, las herramientas de lint actuales requieren al menos 22.13 en esa rama. Puedes usar `nvm install` y `nvm use` para seleccionar la versión del proyecto.

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/CripterHack/tecuiyo-derechos-mx.git
cd tecuiyo-derechos-mx
```

2. **Instala las dependencias**
```bash
npm ci
```

3. **Inicia el servidor de desarrollo**
```bash
npm run dev
```

4. **Abre tu navegador**
Visita `http://localhost:5173` para ver la aplicación.

## 📂 Estructura del Proyecto

```
tecuiyo-derechos-mx/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── ui/             # Componentes de interfaz base
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── Navigation.tsx  # Navegación principal
│   │   └── ThemeToggle.tsx # Selector de tema
│   ├── pages/              # Páginas de la aplicación
│   │   ├── Index.tsx       # Página principal
│   │   ├── Biblioteca.tsx  # Biblioteca de artículos LFT
│   │   ├── Buscador.tsx    # Buscador de situaciones
│   │   ├── Calculadora.tsx # Calculadoras legales
│   │   └── ...
│   ├── data/               # Datos estáticos y contenido
│   │   ├── articulos-lft.ts # Artículos de la LFT
│   │   └── guias.ts        # Guías y tutoriales
│   ├── hooks/              # React hooks personalizados
│   ├── lib/                # Utilidades y helpers
│   └── utils/              # Funciones de utilidad
├── public/                 # Archivos estáticos
├── docs/                   # Documentación del proyecto
│   ├── AGENTS.md           # Guía para Agentes de IA
│   ├── ARCHITECTURE.md     # Arquitectura del Sistema
│   ├── CONTRIBUTING.md     # Guía de Contribución
│   └── DEPLOYMENT.md       # Guía de Despliegue
├── tailwind.config.ts      # Configuración de Tailwind
├── vite.config.ts          # Configuración de Vite
└── package.json            # Dependencias del proyecto
```

Para más detalles sobre la arquitectura, consulta [ARCHITECTURE.md](./docs/ARCHITECTURE.md).

## 🎯 Casos de Uso

### Para Trabajadores
- Consultar derechos laborales específicos
- Estimar tres prestaciones proporcionales y revisar conceptos excluidos con una persona asesora
- Preparar solicitudes educativas de información, sin formatos de renuncia o demanda listos para firmar
- Entender procesos legales laborales

### Para Empleadores
- Verificar obligaciones legales
- Revisar estimaciones parciales de prestaciones
- Consultar procedimientos de contratación y despido
- Consultar ejemplos educativos y acudir a la autoridad para formatos oficiales

### Para Abogados Laboralistas
- Referencia rápida de artículos de la LFT
- Herramientas de cálculo para casos
- Ejemplos de solicitudes educativas
- Casos de estudio para análisis

## 🤝 Contribuir

¡Agradecemos las contribuciones de la comunidad! Hay varias formas de ayudar:

### Para Desarrolladores
- 🐛 Reportar bugs y problemas
- 💡 Proponer nuevas características
- 🔧 Enviar pull requests
- 📖 Mejorar la documentación
- ⚡ Optimizar el rendimiento

### Para Juristas
- ⚖️ Revisar contenido legal
- 📝 Actualizar información jurídica
- 📚 Proponer nuevos casos de estudio
- 🔍 Mejorar explicaciones legales
- 🧮 Validar cálculos y fórmulas

### Proceso de Contribución

1. **Fork** del repositorio
2. **Crear** una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. **Realizar** cambios y commits (`git commit -m 'Agregar nueva característica'`)
4. **Push** a la rama (`git push origin feature/nueva-caracteristica`)
5. **Crear** un Pull Request

Consulta nuestra [Guía de Contribución](./docs/CONTRIBUTING.md) para más detalles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

### ¿Qué significa la Licencia MIT?

- ✅ Puedes usar el código para cualquier propósito, incluso comercial
- ✅ Puedes modificar y distribuir el código
- ✅ Solo debes incluir el aviso de copyright y la licencia
- ⚠️ No hay garantías ni responsabilidades por parte de los autores

## 🙏 Agradecimientos

Tecuiyo ha sido posible gracias a:

- **🌟 Comunidad Open Source**: Por las increíbles herramientas y librerías
- **👥 Trabajadores Mexicanos**: Inspiración y propósito del proyecto
- **❤️ Contribuidores**: Futuras contribuciones de la comunidad

## 📞 Contacto

- **Website**: [tecuiyo.izignamx.com](https://tecuiyo.izignamx.com/)
- **Email**: dev@izignamx.com
- **GitHub**: [@cripterhack](https://github.com/CripterHack/tecuiyo-derechos-mx)

## 🛣️ Roadmap

- [ ] Unificar artículos y revisar fuentes, atribuciones y directorio ([#64](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/64))
- [ ] Validar aportaciones reales y una propuesta sostenible de mantenimiento ([#65](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/65))
- [ ] Resolver alertas restantes de dependencias ([#62](https://github.com/CripterHack/tecuiyo-derechos-mx/issues/62))
- [ ] Revisar accesibilidad, rendimiento y metadatos por ruta
- [ ] Validar jurídicamente los avisos de privacidad y términos con el responsable

El proyecto mantiene GitHub Pages como hosting estático. Un formulario alojado, pagos o suscripciones deben usar proveedores externos realmente configurados; una API propia, cuentas o almacenamiento de casos requerirían otra arquitectura. Consulta el [informe red team y el plan de sostenibilidad](./docs/RED_TEAM_2026-10.md) para el alcance, la evidencia y las limitaciones actuales.

---

**Construido con ❤️ para la comunidad laboral mexicana**

![Tecuiyo](https://img.shields.io/badge/Tecuiyo-Derechos%20Laborales-blue?style=for-the-badge)
