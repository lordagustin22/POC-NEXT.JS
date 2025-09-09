"use client";

export default function Footer() {
    return (
        <footer className="mt-12 border-t bg-white">
            <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-gray-500 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
                <span>&copy; {new Date().getFullYear()} POC SSR Next.js</span>
                <span>FakeStore API Demo</span>
            </div>
        </footer>
    );
}
