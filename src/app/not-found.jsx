export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        404 - Página no Encontrada
      </h2>
      <p>Esta página no existe, bestia</p>
      <a href="/" className="text-sm text-emerald-700 hover:underline">
        Volver a Home
      </a>
    </div>
  );
}
