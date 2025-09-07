"use client";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h2 className="text-2xl font-semibold mb-4">Ocurrió un error</h2>
      <p className="text-sm text-gray-600 mb-6">{error?.message}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 text-sm"
      >
        Reintentar
      </button>
    </div>
  );
}
