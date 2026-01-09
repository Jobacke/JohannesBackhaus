import { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export const DetailModal = ({ title, content, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!content) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                ref={modalRef}
                className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12"
                onClick={(e) => e.stopPropagation()}
            >
                {title && (
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-100 mb-6 border-b border-white/10 pb-4">
                        {title}
                    </h2>
                )}
                <div className="prose prose-invert prose-lg max-w-none text-neutral-300 leading-relaxed">
                    {content}
                </div>
            </motion.div>
        </div>,
        document.body
    );
};
