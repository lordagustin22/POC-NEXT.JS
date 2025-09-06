import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full border-b bg-white/60 backdrop-blur sticky top-0 z-10">
            <nav className="max-w-6xl mx-auto flex items-center gap-6 px-4 h-14">
                <Link href="/" className="font-bold">
                    Demo SSR
                </Link>
                <Link href="/products" className="text-sm hover:underline">
                    Productos
                </Link>
            </nav>
        </header>
    );
}
