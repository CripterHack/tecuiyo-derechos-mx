# 🏗️ Arquitectura del Sistema Tecuiyo

Este documento describe la arquitectura técnica, decisiones de diseño y estructura del proyecto **Tecuiyo**. Sirve como referencia para entender cómo está construida la aplicación y cómo deben integrarse nuevas funcionalidades.

## 🔭 Visión General de Alto Nivel

Tecuiyo es una **Single Page Application (SPA)** construida con el stack moderno de React. Su objetivo es proveer herramientas y contenido estático/dinámico sobre derechos laborales de manera rápida y accesible.

### Stack Tecnológico

| Capa | Tecnología | Justificación |
| :--- | :--- | :--- |
| **Core** | React 18 + Vite | Estándar de industria, alto rendimiento en desarrollo (HMR) y producción. |
| **Lenguaje** | TypeScript | Seguridad de tipos y mejor experiencia de desarrollo (DX). |
| **Estilos** | Tailwind CSS + Shadcn UI | Desarrollo rápido de UI consistente y accesible. |
| **Routing** | React Router 6 | Gestión estándar de navegación co el cliente. |
| **Estado** | TanStack Query + React Context | Gestión eficiente de datos asíncronos y estado global ligero. |
| **Deploy** | Estático (Vercel/Netlify/etc.) | Costo bajo, alta disponibilidad, fácil escalado. |

---

## 📂 Estructura del Proyecto

El proyecto sigue una estructura semántica agrupada por tipo técnico, pero con miras a una arquitectura orientada a características (*Feature-based*) en el futuro.

```bash
src/
├── components/         # Bloques constructivos de la UI
│   ├── ui/             # Componentes base de Shadcn (Botones, Inputs, etc.)
│   └── [Features]/     # Componentes compuestos (Ej: Navigation, Footer)
├── pages/              # Vistas principales (Componentes "Fat Page")
│   ├── Index.tsx       # Landing page
│   ├── Calculadora.tsx # Lógica de calculadoras
│   └── ...             # Otras vistas enrutadas
├── hooks/              # Lógica reutilizable (React Hooks)
├── lib/                # Utilidades de librerías (utils.ts para Tailwind merge)
├── data/               # Datos estáticos (JSON/TS) simulando CMS o BD
└── utils/              # Funciones puras de ayuda
```

### Patrones Clave

#### 1. "Fat Pages" vs Componentes

Actualmente, gran parte de la lógica de negocio reside directamente en los componentes de `src/pages/`.

* **Estado Actual:** Las páginas manejan estado, efectos y presentación.
* **Mejora Sugerida:** Mover lógica compleja a `hooks/` personalizados y separar componentes de presentación grandes en sub-carpetas dentro de `components/`.

#### 2. Componentes de UI (Shadcn)

Utilizamos **Shadcn UI** como base. Estos componentes residen en `components/ui` y **NO** deben ser modificados drásticamente para mantener la capacidad de actualización. La personalización se hace vía `className` (Tailwind) o extendiendo el componente wrapper.

#### 3. Gestión de Datos

La aplicación consume principalmente datos estáticos definidos en `src/data/`.

* Para datos asíncronos futuros, se utiliza **TanStack Query** configurado en `App.tsx`.
* El estado global de UI (como Toasts o Tooltips) se maneja a través de Context Providers en la raíz.

---

## 📐 Decisiones de Diseño

### Navegación y Enrutamiento
El enrutamiento es declarativo en `App.tsx`.
* Las rutas son planas para facilitar la lectura.
* Se usa un layout implícito (Header + Content + Footer) en `App.tsx`.

### Estilos y Tema
* **Tailwind CSS** es la única fuente de verdad para estilos.
* Evitamos archivos `.css` separados (excepto `index.css` para directivas globales).
* **Modo Oscuro:** Soportado nativamente vía clases de Tailwind y `next-themes` (o gestión manual de clases).

---

## 🔄 Flujos de Datos

1. **Usuario interactúa** (Click en "Calcular").
2. **Componente de Página** (`Calculadora.tsx`) captura el evento.
3. **Lógica Local** ejecuta el cálculo (actualmente dentro del componente).
4. **Estado UI** se actualiza y muestra resultados.
5. **Persistencia:** No hay persistencia compleja (backend) actualmente; todo es efímero o LocalStorage.

---

## 🛡️ Seguridad y Calidad

* **Sanitización:** Se usa `DOMPurify` (si aplica) para contenido inyectado.
* **Linting:** ESLint configurado para reglas estrictas de React y Hooks.
* **Testing:** (Pendiente de implementación robusta) Se recomienda Vitest para lógica de utilidades.
