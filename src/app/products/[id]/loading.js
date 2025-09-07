export default function LoadingProduct() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 animate-pulse">
      <div className="h-4 w-24 bg-gray-200 rounded mb-6" />
      <div className="grid gap-10 md:grid-cols-2">
        <div className="h-96 bg-white border rounded-lg" />
        <div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
          <div className="h-6 bg-gray-200 rounded w-32 mb-6" />
          <div className="space-y-2 mb-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-3 bg-gray-200 rounded" />
            ))}
          </div>
          <div className="h-4 bg-gray-200 w-24 mb-3 rounded" />
          <div className="h-6 bg-gray-200 w-40 rounded" />
        </div>
      </div>
    </div>
  );
}
