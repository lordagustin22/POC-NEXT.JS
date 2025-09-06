import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
interface Props {
	serverTime: string;
}
export default function Home({ serverTime }: Props) {
	return (
		<Layout>
			<h1>Demo SSR</h1>
			<p style={{ fontSize: '.75rem', color: '#666' }}>
				Renderizado en: {serverTime}
			</p>
			<p>Esta POC muestra SSR consumiendo FakeStore API.</p>
			<a href="/products" style={{ color: '#2563eb' }}>
				Ir al catálogo →
			</a>
		</Layout>
	);
}

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
	props: { serverTime: new Date().toLocaleString() },
});
