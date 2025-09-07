// Declaring that this file is using client-side rendering
"use client";

// This is the Home component, which serves as the home directory
export default function Home() {
  return (
    <div>
      <h1>Demo SSR</h1>
      <p>Esta POC muestra SSR consumiendo FakeStore API.</p>
      <a href="/products" style={{ color: "#2563eb" }}>
        Ir al catálogo →
      </a>
      {/* Displaying the "Home" heading on the page (localhost:3000) */}
    </div>
  );
}
