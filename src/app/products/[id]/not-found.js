export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">Producto no encontrado</h2>
      <a href="/products" className="text-sm text-emerald-700 hover:underline">
        Volver al listado
      </a>
    </div>
  );
}
