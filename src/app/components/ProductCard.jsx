"use client";

import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <Link
            href={`/products/${product.id}`} // ACTUALIZADO (antes /product/${id})
            className="rounded-md border p-4 shadow-sm bg-white hover:shadow-md transition block"
        >
            <div className="aspect-square flex items-center justify-center mb-3">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 object-contain transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                />
            </div>
            <h2 className="line-clamp-2 text-sm font-medium mb-2">{product.title}</h2>
            <p className="text-lg font-semibold text-emerald-600 mb-2">
                ${product.price}
            </p>
            <p className="line-clamp-3 text-xs text-gray-500">
                {product.description}
            </p>
        </Link>
    );
}
