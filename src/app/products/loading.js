export default function LoadingProducts() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 animate-pulse">
      <div className="h-8 w-72 bg-gray-200 rounded mb-6" />
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="rounded-md border p-4 bg-white">
            <div className="h-32 bg-gray-200 mb-3 rounded" />
            <div className="h-4 bg-gray-200 mb-2 rounded" />
            <div className="h-4 bg-gray-200 w-2/3 mb-4 rounded" />
            <div className="h-8 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
