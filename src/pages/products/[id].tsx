import { GetServerSideProps } from 'next';
import Layout from '../../components/Layout';
import { fetchProductById } from '../../api/products';
import { Product } from '../../types/product';

interface Props {
    product?: Product;
    error?: string;
    serverTime: string;
}

export default function ProductDetail({ product, error, serverTime }: Props) {
    if (error) {
        return (
            <Layout title="No encontrado">
                <p style={{ color: '#b91c1c' }}>{error}</p>
            </Layout>
        );
    }
    if (!product) return null;
    return (
        <Layout title={product.title}>
            <p style={{ fontSize: '.7rem', color: '#666' }}>
                Renderizado en: {serverTime}
            </p>
            <div
                style={{
                    display: 'flex',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    marginTop: '1rem',
                }}
            >
                <div
                    style={{
                        flex: '0 0 300px',
                        textAlign: 'center',
                    }}
                >
                    <img
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        style={{
                            objectFit: 'contain',
                            maxHeight: 300,
                        }}
                    />
                </div>
                <div style={{ flex: '1 1 300px' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                        {product.title}
                    </h1>
                    <p style={{ marginBottom: '1rem' }}>{product.description}</p>
                    <p
                        style={{
                            fontSize: '1.25rem',
                            fontWeight: 'bold',
                        }}
                    >
                        ${product.price}
                    </p>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
    const id = ctx.params?.id as string;
    let product: Product | undefined;
    let error: string | undefined;
    try {
        product = await fetchProductById(id);
    } catch (e: any) {
        error = e.message ?? 'No se pudo cargar el producto';
    }
    return {
        props: {
            product,
            error,
            serverTime: new Date().toLocaleString(),
        },
    };
};
