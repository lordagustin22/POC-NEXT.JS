export async function getServerSideProducts() {
	const res = await fetch('https://fakestoreapi.com/products?limit=10', {
		cache: 'no-store',
	});
	const data = await res.json();
	if (!res.ok)
		throw new Error(`Error obteniendo productos. HTTP ${res.status}`);
	return data;
}

export async function getServerSideProduct(id) {
	const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
		cache: 'no-store',
	});
	if (!res.ok) throw new Error(`Error obteniendo producto. HTTP ${res.status}`);
	const data = await res.json();
	return data;
}

export async function fetchProductsStatic() {
	// Cache por defecto => SSG (se guarda en build)
	const res = await fetch('https://fakestoreapi.com/products?limit=10', {
		// cache: 'force-cache' // explícito si quieres
	});
	if (!res.ok)
		throw new Error(`Error obteniendo productos. HTTP ${res.status}`);
	return res.json();
}
