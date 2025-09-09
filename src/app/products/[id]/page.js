import { fetchProduct } from "../api/products";
import { notFound } from "next/navigation";
import ProductDetail from "../../components/ProductDetail";

export async function generateMetadata({ params }) {
  const { id } = await params; // await params first
  const product = await fetchProduct(id);

  if (!product) return { title: "Producto no encontrado | POC SSR" };
  return { title: `${product.title} | POC SSR` };
}

export default async function ProductGet({ params }) {
  const { id } = await params; // await params first
  const product = await fetchProduct(id);

  if (!product) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <ProductDetail product={product} />
    </div>
  );
}
