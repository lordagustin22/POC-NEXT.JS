export async function fetchProducts() {
	try {
		const res = await fetch('https://fakestoreapi.com/products', {
			cache: 'no-store',
		});
		if (!res.ok)
			throw new Error(`Error obteniendo productos. HTTP ${res.status}`);
		return res.json();
	} catch (e) {
		console.error('fetchProducts fallo:', e, e.cause);
		throw e;
	}
}

export async function fetchProduct(id) {
	try {
		const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
			cache: 'no-store',
		});
		if (res.status === 404) return null;
		if (!res.ok)
			throw new Error(`Error obteniendo producto. HTTP ${res.status}`);
		return res.json();
	} catch (e) {
		console.error('fetchProduct fallo:', id, e, e.cause);
		throw e;
	}
}
