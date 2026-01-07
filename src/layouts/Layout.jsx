import { Navbar } from "../components/ui/Navbar";

export function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col relative overflow-x-hidden">
            {/* Background Ambience */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-900/20 rounded-full blur-[120px]" />
            </div>

            <Navbar />
            <main className="flex-grow pt-24">
                {children}
            </main>

            <footer className="py-8 text-center text-neutral-500 text-sm border-t border-white/5">
                <p>© {new Date().getFullYear()} Veronika & Johannes Backhaus.</p>
                <div className="mt-2 flex justify-center gap-4">
                    <a href="#" className="hover:text-white transition-colors">Impressum</a>
                    <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
                </div>
            </footer>
        </div>
    );
}
