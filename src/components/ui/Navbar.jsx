import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../../lib/utils";

const links = [
    { name: "Über mich", href: "#about" },
    { name: "Management", href: "#management" },
    { name: "Passion", href: "#passion" },
    { name: "Standort", href: "#location" },
    { name: "Kontakt", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-white/10 py-4" : "py-6 bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="group flex items-center gap-2">
                    <div className="relative w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg group-hover:bg-white/10 transition-colors">
                        <span className="font-display font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-emerald-400 to-teal-600">J</span>
                        <span className="font-display font-bold text-2xl text-white absolute left-5 top-1">B</span>
                    </div>
                </a>

                {/* Desktop Nav - "Reiter" Style matching JB Monogram */}
                <nav className="hidden md:flex gap-4">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors group"
                        >
                            <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                                {link.name}
                            </span>
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <nav className="flex flex-col p-6 gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-neutral-300 hover:text-white"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
