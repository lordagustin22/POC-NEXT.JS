import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
    title?: string;
    children: ReactNode;
}

export default function Layout({ title, children }: Props) {
    const fullTitle = title ? `${title} | Demo SSR` : 'Demo SSR';
    return (
        <>
            <Head>
                <title>{fullTitle}</title>
                <meta name="description" content="Demostración SSR con Next.js" />
                <meta property="og:title" content={fullTitle} />
            </Head>
            <Header />
            <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem 1rem' }}>
                {children}
            </main>
            <Footer />
        </>
    );
}
