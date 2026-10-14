import { useRef, useEffect, useState } from "react";
import { X, Play, Film, AlertCircle } from "lucide-react";
import { createPortal } from "react-dom";

export const VideoModal = ({ video, onClose }) => {
    const modalRef = useRef(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!video) return null;

    const isEmbed = video.src?.includes("youtube.com") || video.src?.includes("youtu.be") || video.src?.includes("vimeo.com");

    return createPortal(
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Schließen"
            >
                <X className="w-6 h-6" />
            </button>

            <div
                ref={modalRef}
                className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-xs text-primary-400 font-medium mb-1">
                            <Film className="w-4 h-4" />
                            <span>{video.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white">
                            {video.title}
                        </h3>
                    </div>
                </div>

                {/* Video Player or Fallback */}
                <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                    {hasError ? (
                        <div className="p-8 text-center max-w-md space-y-3">
                            <AlertCircle className="w-12 h-12 text-primary-400 mx-auto" />
                            <h4 className="text-lg font-bold text-white">Videodatei noch nicht hinterlegt</h4>
                            <p className="text-sm text-neutral-400">
                                Lege deine Datei einfach als <code className="text-primary-300 bg-neutral-800 px-2 py-0.5 rounded text-xs">{video.src}</code> ab.
                            </p>
                        </div>
                    ) : isEmbed ? (
                        <iframe
                            src={video.src}
                            title={video.title}
                            className="w-full h-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video
                            src={video.src}
                            controls
                            autoPlay
                            playsInline
                            onError={() => setHasError(true)}
                            className="w-full h-full object-contain"
                        >
                            Ihr Browser unterstützt dieses Videoformat nicht.
                        </video>
                    )}
                </div>

                {/* Description */}
                {video.description && (
                    <div className="p-4 md:p-6 bg-neutral-900/80 text-sm text-neutral-300">
                        <p>{video.description}</p>
                    </div>
                )}
            </div>
        </div>,
        document.body
    );
};
