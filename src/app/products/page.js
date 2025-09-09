import { notFound } from "next/navigation";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "./api/products";

export const metadata = {
  title: "Productos | POC SSR",
  description: "Listado de productos (SSR) con FakeStore API",
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  if (!products) return notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Productos</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
