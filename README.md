# 🏛️ Tecuiyo

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4+-blue.svg)

**Tecuiyo** es una plataforma digital de código abierto que democratiza el acceso a la información sobre derechos laborales en México. Nuestro objetivo es empoderar a trabajadores, empleadores y profesionales del derecho con herramientas precisas y actualizadas basadas en la Ley Federal del Trabajo (LFT).

## 🌟 Características Principales

- **📚 Biblioteca Jurídica Completa**: Acceso a artículos completos de la LFT con explicaciones claras
- **🔍 Buscador Inteligente**: Encuentra respuestas a situaciones laborales específicas
- **🧮 Calculadora Legal**: Herramientas de cálculo para finiquitos, vacaciones, aguinaldos y más
- **📑 Formularios Automatizados**: Genera documentos legales de forma rápida y precisa
- **📖 Guías Prácticas**: Tutoriales paso a paso para procesos laborales comunes
- **🎯 Casos de Estudio**: Ejemplos reales y análisis de situaciones laborales
- **📞 Directorio Especializado**: Contactos de profesionales en derecho laboral
- **🌙 Modo Oscuro**: Interfaz adaptable para mejor experiencia de usuario
- **📱 Diseño Responsivo**: Funciona perfectamente en desktop, tablet y móvil
- **♿ Accesible**: Cumple con estándares de accesibilidad web

## 🚀 Demo en Vivo

Visita [Tecuiyo](https://tecuiyo.izignamx.com/) para ver la aplicación en funcionamiento.

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 18.3.1 | Biblioteca de interfaz de usuario |
| **TypeScript** | 5.0+ | Lenguaje de programación tipado |
| **Tailwind CSS** | 3.4+ | Framework de estilos utilitarios |
| **Vite** | 5.0+ | Herramienta de construcción rápida |
| **React Router** | 6.26+ | Enrutamiento para React |
| **Radix UI** | 1.0+ | Componentes accesibles |
| **Lucide React** | 0.462+ | Iconos SVG para React |
| **Tanstack Query** | 5.56+ | Gestión de estado del servidor |

## 📦 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn

### Pasos

1. **Clona el repositorio**
```bash
git clone https://github.com/CripterHack/tecuiyo-derechos-mx.git
cd tecuiyo-derechos-mx
```

2. **Instala las dependencias**
```bash
npm install
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
- Calcular prestaciones y finiquitos
- Generar cartas de renuncia y otros documentos
- Entender procesos legales laborales

### Para Empleadores
- Verificar obligaciones legales
- Calcular nóminas y prestaciones
- Consultar procedimientos de contratación y despido
- Acceder a formularios oficiales

### Para Abogados Laboralistas
- Referencia rápida de artículos de la LFT
- Herramientas de cálculo para casos
- Plantillas de documentos legales
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

- [ ] API REST para integraciones
- [ ] Aplicación móvil nativa
- [ ] Sistema de notificaciones legales
- [ ] Integración con sistemas de nómina
- [ ] Versiones en otros idiomas
- [ ] Módulo de capacitación interactiva

---

**Construido con ❤️ para la comunidad laboral mexicana**

![Tecuiyo](https://img.shields.io/badge/Tecuiyo-Derechos%20Laborales-blue?style=for-the-badge)