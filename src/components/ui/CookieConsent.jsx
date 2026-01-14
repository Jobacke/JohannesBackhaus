import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronDown, ChevronUp, X, Check } from "lucide-react";
import { cn } from "../../lib/utils";

export function CookieConsent({ onOpenPrivacy, onOpenImpressum }) {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true,
        functional: false,
        statistics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            // Small delay to not overwhelm user immediately on load
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        } else {
            // If consent exists, we can load it into state (optional, for re-editing)
            try {
                setPreferences(JSON.parse(consent));
            } catch (e) {
                console.error("Failed to parse cookie preferences", e);
            }
        }
    }, []);

    // Exposed method to open settings from footer
    useEffect(() => {
        const handleOpenSettings = () => {
            setShowSettings(true);
            setIsVisible(true);
        };
        window.addEventListener("open-cookie-settings", handleOpenSettings);
        return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
    }, []);

    const savePreferences = (newPrefs) => {
        localStorage.setItem("cookie-consent", JSON.stringify(newPrefs));
        setPreferences(newPrefs);
        setIsVisible(false);
        setShowSettings(false);
        // Reload or trigger callbacks here if actual cookies need to be set/unset
    };

    const handleAcceptAll = () => {
        savePreferences({ essential: true, functional: true, statistics: true, marketing: true });
    };

    const handleRejectAll = () => {
        savePreferences({ essential: true, functional: false, statistics: false, marketing: false });
    };

    const handleSaveSelection = () => {
        savePreferences(preferences);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
                >
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                            {!showSettings ? (
                                // Simple Banner
                                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                    <div className="flex-1 space-y-2">
                                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-primary-500" />
                                            Privatsphäre-Einstellungen
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                                            Wir nutzen Cookies und ähnliche Technologien, um die Webseite technisch bereitzustellen und – mit Ihrer Einwilligung – für Statistiken.
                                            Details finden Sie in unserer <button onClick={onOpenPrivacy} className="text-primary-400 hover:text-primary-300 underline underline-offset-2">Datenschutzerklärung</button>.
                                            Impressum: <button onClick={onOpenImpressum} className="text-primary-400 hover:text-primary-300 underline underline-offset-2">Impressum</button>.
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                                        <button
                                            onClick={() => setShowSettings(true)}
                                            className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium transition-colors border border-white/5 whitespace-nowrap"
                                        >
                                            Einstellungen
                                        </button>
                                        <button
                                            onClick={handleRejectAll}
                                            className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium transition-colors border border-white/5 whitespace-nowrap"
                                        >
                                            Ablehnen
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-bold transition-all shadow-[0_0_20px_-5px_rgba(var(--primary-500-rgb),0.5)] whitespace-nowrap"
                                        >
                                            Alles akzeptieren
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                // Settings View
                                <div className="flex flex-col h-full max-h-[80vh] md:max-h-auto">
                                    <div className="p-6 border-b border-white/5 flex items-center justify-between bg-neutral-800/50">
                                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                            <Shield className="w-5 h-5 text-primary-500" />
                                            Cookie-Einstellungen anpassen
                                        </h3>
                                        <button onClick={() => setShowSettings(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                                            <X className="w-5 h-5 text-neutral-400" />
                                        </button>
                                    </div>

                                    <div className="p-6 space-y-4 overflow-y-auto custom-scrollbar">
                                        {/* Essential */}
                                        <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="mt-1">
                                                <Check className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="font-bold text-white">Essenziell (Immer aktiv)</span>
                                                    <div className="w-10 h-5 bg-primary-500/50 rounded-full relative cursor-not-allowed opacity-50">
                                                        <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm" />
                                                    </div>
                                                </div>
                                                <p className="text-sm text-neutral-400">
                                                    Benötigt für die grundlegende Funktionalität der Webseite (z.B. speichern dieser Einstellungen).
                                                </p>
                                            </div>
                                        </div>

                                        {/* Functional */}
                                        <LabelToggle
                                            title="Funktional"
                                            description="Erweiterte Funktionen wie Videos oder Chat-Bots, die für die grundlegende Nutzung nicht zwingend erforderlich sind."
                                            checked={preferences.functional}
                                            onChange={(val) => setPreferences(prev => ({ ...prev, functional: val }))}
                                        />

                                        {/* Statistics */}
                                        <LabelToggle
                                            title="Statistik"
                                            description="Erfassung anonymisierter Daten, um zu verstehen, wie Besucher mit der Seite interagieren."
                                            checked={preferences.statistics}
                                            onChange={(val) => setPreferences(prev => ({ ...prev, statistics: val }))}
                                        />

                                        {/* Marketing */}
                                        <LabelToggle
                                            title="Marketing"
                                            description="Wird verwendet, um relevante Werbung anzuzeigen (z.B. Facebook Pixel, Google Ads)."
                                            checked={preferences.marketing}
                                            onChange={(val) => setPreferences(prev => ({ ...prev, marketing: val }))}
                                        />
                                    </div>

                                    <div className="p-6 border-t border-white/5 bg-neutral-800/50 flex justify-end gap-3">
                                        <button
                                            onClick={handleRejectAll}
                                            className="px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-sm font-medium transition-colors border border-white/5"
                                        >
                                            Alle ablehnen
                                        </button>
                                        <button
                                            onClick={handleSaveSelection}
                                            className="px-5 py-2.5 rounded-xl bg-white text-neutral-900 hover:bg-neutral-200 text-sm font-bold transition-colors"
                                        >
                                            Auswahl speichern
                                        </button>
                                        <button
                                            onClick={handleAcceptAll}
                                            className="px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-bold transition-colors shadow-lg shadow-primary-500/20"
                                        >
                                            Alles akzeptieren
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

function LabelToggle({ title, description, checked, onChange }) {
    return (
        <div className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800/30 border border-white/5 hover:border-white/10 transition-colors cursor-pointer" onClick={() => onChange(!checked)}>
            <div className={`mt-1 flex items-center justify-center w-5 h-5 rounded border ${checked ? 'bg-primary-500 border-primary-500' : 'border-neutral-600'} transition-all`}>
                {checked && <Check className="w-3.5 h-3.5 text-white" />}
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">{title}</span>
                    <div className={`w-10 h-6 rounded-full relative transition-colors ${checked ? 'bg-primary-600' : 'bg-neutral-700'}`}>
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${checked ? 'left-5' : 'left-1'}`} />
                    </div>
                </div>
                <p className="text-sm text-neutral-400">
                    {description}
                </p>
            </div>
        </div>
    );
}
