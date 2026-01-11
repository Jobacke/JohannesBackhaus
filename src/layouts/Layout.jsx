import { useState } from "react";
import { Navbar } from "../components/ui/Navbar";
import { DetailModal } from "../components/ui/DetailModal";

export function Layout({ children }) {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showDatenschutz, setShowDatenschutz] = useState(false);

    const impressumContent = (
        <div className="space-y-4">
            <h3 className="text-xl font-bold text-neutral-200">Angaben gemäß § 5 TMG</h3>
            <p>
                Johannes Backhaus<br />
                Wotanstraße 5<br />
                85579 Neubiberg<br />
                Deutschland
            </p>
            <h3 className="text-xl font-bold text-neutral-200 mt-4">Kontakt</h3>
            <p>
                Telefon: +49 174 93277 82<br />
                E-Mail: johannes@vjbackhaus.com
            </p>
            <p className="mt-4 text-sm text-neutral-400">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: Johannes Backhaus (Anschrift wie oben)
            </p>
        </div>
    );

    const datenschutzContent = (
        <div className="space-y-4">
            <p>
                Der Schutz Ihrer Daten ist uns wichtig. Da diese Website primär als Portfolio dient, erfassen wir keine personenbezogenen Daten über Kontaktformulare oder Tracking-Cookies.
            </p>
            <h3 className="text-xl font-bold text-neutral-200">Hosting</h3>
            <p>
                Diese Website wird bei GitHub Pages gehostet. GitHub kann Server-Logfiles erfassen (IP-Adresse, Browser, Zeitstempel), um die Sicherheit und Stabilität des Dienstes zu gewährleisten.
            </p>
            <h3 className="text-xl font-bold text-neutral-200">Kontakt</h3>
            <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
        </div>
    );

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
                    <button onClick={() => setShowImpressum(true)} className="hover:text-white transition-colors">Impressum</button>
                    <button onClick={() => setShowDatenschutz(true)} className="hover:text-white transition-colors">Datenschutz</button>
                </div>
            </footer>

            {/* Legal Modals */}
            {showImpressum && (
                <DetailModal
                    title="Impressum"
                    content={impressumContent}
                    onClose={() => setShowImpressum(false)}
                />
            )}
            {showDatenschutz && (
                <DetailModal
                    title="Datenschutz"
                    content={datenschutzContent}
                    onClose={() => setShowDatenschutz(false)}
                />
            )}
        </div>
    );
}
