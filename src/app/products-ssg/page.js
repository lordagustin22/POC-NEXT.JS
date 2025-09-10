import { fetchProductsStatic } from "../api/products";
import ProductCard from "../components/ProductCard";

// Variables evaluadas una vez en build
const buildRandom = Math.ceil(Math.random() * 100);
const buildTime = new Date().toISOString();

export default async function ProductsSSG() {
  const products = await fetchProductsStatic();
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Productos</h1>
      <p className="text-xs text-gray-500 mb-6">
        buildRandom: {buildRandom} | buildTime: {buildTime}
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
