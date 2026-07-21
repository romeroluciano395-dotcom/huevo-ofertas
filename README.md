# OfertasML — Sitio de afiliados de Mercado Libre

Sitio estático hecho en [Astro](https://astro.build). Un solo proyecto con páginas
por categoría. Rápido y optimizado para SEO.

## Cómo usarlo

```bash
npm install      # instalar (solo la primera vez)
npm run dev      # servidor local → http://localhost:4321
npm run build    # generar el sitio para subir (queda en /dist)
```

## Cómo cargar productos

Todo se edita en **`src/data/productos.js`**. Copiá un bloque `{ ... }` y cambiá:

- `categoria`: uno de los slugs de `src/data/categorias.js` (tecnologia, hogar, etc.)
- `link`: **⚠️ tu link de afiliado de Mercado Libre** (reemplazá el `#TU_LINK_DE_AFILIADO`)
- `imagen`: URL de la foto del producto
- `destacado`: `true` = aparece en la home; `false` = solo en su categoría
- `precioAnterior`: ponelo para mostrar descuento; `null` si no hay

## Agregar / cambiar categorías

Editá `src/data/categorias.js`. Cada categoría genera su propia página automáticamente.

## Antes de publicar

- Cambiá `site` en `astro.config.mjs` por tu dominio real.
- Reemplazá TODOS los `#TU_LINK_DE_AFILIADO` por tus links reales.
