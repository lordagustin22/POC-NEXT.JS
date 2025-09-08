// Declaring that this file is using client-side rendering
"use client";
import Link from "next/link";

// This is the Home component, which serves as the home directory
export default function Home() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] flex items-center justify-center px-4 py-10 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-xl w-full space-y-8">
        <header className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Demo SSR
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Esta POC es una muestra del{" "}
            <span className="font-medium text-slate-900">SSR de Next.js</span>{" "}
            consumiendo una API de productos.
          </p>
        </header>

        <div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm ring-1 ring-blue-600/20 hover:bg-blue-500 hover:shadow transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
          >
            Ir al catálogo
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
