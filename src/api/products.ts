import { Product } from "../types/product";

const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts(
  limit = 20,
  signal?: AbortSignal,
): Promise<Product[]> {
  const res = await fetch(`${API_URL}?limit=${limit}`, {
    cache: "no-store",
    signal,
  });
  if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data)) throw new Error("Formato inválido");
  return data as Product[];
}

export async function fetchProductById(
  id: string | number,
  signal?: AbortSignal,
): Promise<Product> {
  const res = await fetch(`${API_URL}/${id}`, { cache: "no-store", signal });
  if (!res.ok) throw new Error(`Producto ${id} no encontrado`);
  return (await res.json()) as Product;
}
