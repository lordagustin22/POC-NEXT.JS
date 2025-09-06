import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api/products';
import { Product } from '../types/product';

type Props = { products: Product[]; serverTime: string; error?: string };

export default function ProductsPage({ products, serverTime, error }: Props) {
    return (
        <Layout title="Catálogo">
            <h1 style={{ fontSize: '1.8rem', marginBottom: '.25rem' }}>
                Catálogo (SSR)
            </h1>
            <p
                style={{
                    fontSize: '.75rem',
                    color: '#555',
                    marginBottom: '1.5rem',
                }}
            >
                Renderizado en: {serverTime}
            </p>
            {error && (
                <div
                    style={{
                        border: '1px solid #f87171',
                        background: '#fee2e2',
                        padding: '1rem',
                        borderRadius: 6,
                        color: '#b91c1c',
                        marginBottom: '1rem',
                    }}
                >
                    Error: {error}
                </div>
            )}
            {!error && (
                <ul
                    style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0,
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))',
                    }}
                >
                    {products.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </ul>
            )}
            {!error && products.length === 0 && <p>No hay productos.</p>}
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    let products: Product[] = [];
    let error: string | undefined;
    try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);
        products = await fetchProducts(20, controller.signal);
        clearTimeout(timeout);
    } catch (e: any) {
        error = e.message ?? 'Fallo inesperado';
    }
    return {
        props: {
            products,
            serverTime: new Date().toLocaleString(),
            ...(error ? { error } : {}),
        },
    };
};
