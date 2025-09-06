import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/product';

type Props = { product: Product };

export default function ProductCard({ product }: Props) {
    return (
        <li className="rounded border p-4 flex flex-col gap-2">
            <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
            <div className="flex justify-center">
                <Image
                    src={product.image}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>
            <p className="text-sm line-clamp-3">{product.description}</p>
            <p className="font-bold">${product.price}</p>
            <Link
                className="text-blue-600 hover:underline text-sm mt-auto"
                href={`/products/${product.id}`}
            >
                Ver detalle →
            </Link>
        </li>
    );
}
