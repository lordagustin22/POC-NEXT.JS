export default function LoadingState() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-5 w-5 rounded-full border-2 border-emerald-600 border-t-transparent animate-spin" />
        <p className="text-sm text-emerald-700">Cargando…</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-lg bg-white p-6">
          <div className="h-80 w-full bg-slate-200 animate-pulse rounded" />
        </div>
        <div className="space-y-4">
          <div className="h-7 w-3/4 bg-slate-200 animate-pulse rounded" />
          <div className="h-6 w-24 bg-slate-200 animate-pulse rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full bg-slate-200 animate-pulse rounded" />
            <div className="h-4 w-11/12 bg-slate-200 animate-pulse rounded" />
            <div className="h-4 w-10/12 bg-slate-200 animate-pulse rounded" />
          </div>
          <div className="h-5 w-28 bg-slate-200 animate-pulse rounded-full" />
        </div>
      </div>
    </main>
  );
}
