import { GetServerSideProps } from "next";
import { products } from "../lib/products";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
};

type Props = { products: Product[]; serverTime: string };

export default function ProductsPage({ products, serverTime }: Props) {
    return (
        <div>
            <h1>Catálogo SSR (Fake Store API)</h1>
            <p><strong>Renderizado en:</strong> {serverTime}</p>
            <ul>
                {products.map((p) => (
                    <li key={p.id} style={{ marginBottom: "1em" }}>
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                        <p><strong>Precio:</strong> ${p.price}</p>
                        <img src={p.image} alt={p.title} width={200} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await fetch("https://fakestoreapi.com/products?limit=20");
    const products: Product[] = await res.json();
    const serverTime = new Date().toLocaleString();

    return { props: { products, serverTime } };
};
