export default function Header() {
	return (
		<header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
			<div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
				<span className="text-xl font-bold tracking-tight text-emerald-700">
					POC SSR
				</span>
				<nav className="flex gap-6 text-sm">
					<a href="/" className="hover:text-emerald-600">
						Home
					</a>
					<a href="products" className="hover:text-emerald-600">
						Productos
					</a>
					<a href="#" className="hover:text-emerald-600">
						Acerca
					</a>
					<a href="#" className="hover:text-emerald-600">
						Contacto
					</a>
				</nav>
			</div>
		</header>
	);
}
