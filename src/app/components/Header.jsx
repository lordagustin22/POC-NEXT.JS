"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b bg-header-black backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
                <span className="text-xl font-bold tracking-tight text-emerald-700">
                    POC SSR
                </span>
                <nav className="flex gap-6 text-md text-white">
                    <Link href="/" className="hover:text-emerald-600">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-emerald-600">
                        Productos (SSR)
                    </Link>
                    <Link href="/products-ssg" className="hover:text-emerald-600">
                        Productos (SSG)
                    </Link>
                    <Link href="#" className="hover:text-emerald-600">
                        Acerca
                    </Link>
                    <Link href="#" className="hover:text-emerald-600">
                        Contacto
                    </Link>
                </nav>
            </div>
        </header>
    );
}
