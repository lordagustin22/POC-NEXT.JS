"use client";

export default function ProductDetail({ product }) {
    return (
        <div>
            <a
                href="/products"
                className="text-sm text-emerald-700 hover:underline inline-block mb-6"
            >
                ← Volver
            </a>
            <div className="grid gap-10 md:grid-cols-2">
                <div className="border rounded-lg bg-white p-6 flex items-center justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-80 object-contain"
                    />
                </div>
                <div>
                    <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
                    <p className="text-emerald-600 font-semibold text-xl mb-4">
                        ${product.price}
                    </p>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        {product.description}
                    </p>
                    <div className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                        Categoría
                    </div>
                    <div className="inline-block bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded">
                        {product.category}
                    </div>
                </div>
            </div>
        </div>
    );
}
