# 🤖 Guía de Desarrollo para Agentes de IA

Este documento establece las reglas, el contexto y los estándares para **Agentes de Inteligencia Artificial** (como Claude, GPT, etc.) que contribuyen al código de **Tecuiyo**.

## 🧠 Contexto del Proyecto

* **Nombre:** Tecuiyo
* **Misión:** Democratizar información de derechos laborales en México.
* **Tono:** Profesional, empático, claro y accesible.
* **Idioma:** **Español de México** (exclusivamente para UI y Documentación). Código en Inglés (nombres de variables, funciones).

## ⚡ Reglas de Oro para Agentes

1. **No inventar estilos:** Usa **siempre** las clases de utilidad de Tailwind existentes y los componentes de `components/ui`. No crees CSS arbitrario ni nuevos componentes UI base sin permiso explícito.
2. **TypeScript Estricto:** `no implicitly any`. Define interfaces claras para todas las props y estructuras de datos.
3. **Mantenibilidad:** Prefiere la legibilidad sobre la "astucia". Código simple y bien nombrado.
4. **Atomicidad:** Si vas a modificar un archivo grande, divídelo si es posible o sugiere una refactorización previa.

## 🛠️ Flujo de Trabajo Sugerido

### 1. Análisis

Antes de escribir código, lee `docs/ARCHITECTURE.md` para entender dónde encaja tu cambio.

* ¿Es una nueva página? -> `src/pages/` + ruta en `App.tsx`.
* ¿Es una lógica reutilizable? -> `src/hooks/`.
* ¿es un componente UI? -> `src/components/`.

### 2. Implementación

* **Imports:** Usa alias (`@/components/...`) en lugar de rutas relativas largas (`../../../`).
* **Nombres:**
  * Componentes: PascalCase (`MiComponente.tsx`)
  * Funciones/Variables: camelCase (`calcularImpuesto`)
  * Constantes: UPPER_SNAKE_CASE (`MAX_REINTENTOS`)

### 3. Documentación Automática
Al crear funciones complejas, añade comentarios JSDoc breves explicando parámetros y retorno.

```typescript
/**
 * Calcula el finiquito basado en la LFT.
 * @param salarioDiario Salario base del trabajador.
 * @param diasTrabajados Días laborados no pagados.
 * @returns Objeto con el desglose del finiquito.
 */
export const calcularFiniquito = (...) => { ... }
```

## 🚨 Anti-Patrones a Evitar

* ❌ **Hardcoding de textos:** Si es un texto largo o legal, muévelo a un archivo de datos.
* ❌ **Estilos en línea:** No uses `style={{ ... }}`. Usa Tailwind.
* ❌ **`any`:** Evita `any` a toda costa. Usa `unknown` si es estrictamente necesario y haz type narrowing.

## 🧪 Testing (Para Agentes)

Si creas una utilidad lógica (ej. una fórmula de cálculo), **debes** sugerir o crear un caso de prueba unitario simple para verificarla, aunque no lo ejecutes tú mismo.
