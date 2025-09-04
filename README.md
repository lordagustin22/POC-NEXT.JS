This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Estructura

src/
├─ pages/
│ ├─ index.tsx → Home con explicación del proyecto
│ ├─ products.tsx → Listado de productos (SSR con API)
│ └─ products/[id].tsx → Detalle de producto individual
├─ components/
│ ├─ Layout.tsx → Navbar, Footer, estilos globales
│ ├─ ProductCard.tsx → Componente para cada producto en grid
│ └─ Loader.tsx → Componente "simulado" de carga
├─ styles/
│ └─ globals.css → Tailwind o CSS base

## Wireframe

```txt
-------------------------------------------------
| Navbar: [Logo]   Home | Productos             |
-------------------------------------------------
|                Home Page                      |
|                                               |
|   [ SSR DEMO ]                                |
|   Renderizamos productos desde una API        |
|   con getServerSideProps.                     |
|   -> [ Ver catálogo ]                         |
-------------------------------------------------
| Footer: Demo SSR - {serverTime}               |
-------------------------------------------------
```

### Navbar

```txt
-------------------------------------------------
| Navbar                                        |
-------------------------------------------------
|              Catálogo SSR                     |
|                                               |
| [Card] [Card] [Card] [Card]                   |
| [Card] [Card] [Card] [Card]                   |
|                                               |
-------------------------------------------------
| Footer                                        |
-------------------------------------------------
```
