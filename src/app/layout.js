import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "POC SSR Productos",
  description:
    "Demostración de Server Side Rendering con Next.js y FakeStore API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full bg-gray-50">
      <body className="min-h-full flex flex-col text-gray-800 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
