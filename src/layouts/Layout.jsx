import { useState, useEffect } from "react";
import { Navbar } from "../components/ui/Navbar";
import { DetailModal } from "../components/ui/DetailModal";
import { CookieConsent } from "../components/ui/CookieConsent";
import { InfoFooter } from "../components/ui/InfoFooter";

export function Layout({ children }) {
    const [showImpressum, setShowImpressum] = useState(false);
    const [showDatenschutz, setShowDatenschutz] = useState(false);

    // Optimized Mouse tracking for "Flashlight" effect - updates CSS vars directly
    useEffect(() => {
        const updateMousePosition = (e) => {
            const x = e.clientX;
            const y = e.clientY;
            document.documentElement.style.setProperty('--mouse-x', `${x}px`);
            document.documentElement.style.setProperty('--mouse-y', `${y}px`);
        };

        // Initialize at center
        document.documentElement.style.setProperty('--mouse-x', '50vw');
        document.documentElement.style.setProperty('--mouse-y', '50vh');

        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

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
        <div className="space-y-6 text-sm md:text-base selection:bg-primary-500/30">
            <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">Datenschutz nach Artikel 13 DSGVO</h3>
                <p>
                    Ich freue mich über Ihr Interesse an meinem Internetauftritt. Das Vertrauen aller Besucher und Kunden, die Sicherheit Ihrer Daten und der Schutz Ihrer Privatsphäre sind für mich von zentraler Bedeutung.
                </p>
                <p>
                    Ihre personenbezogenen Daten werden von mir daher gemäß den gültigen gesetzlichen Datenschutzvorschriften und dieser Datenschutzerklärung behandelt. Personenbezogene Daten sind Informationen, die dazu genutzt werden können, um Ihre Identität zu erfahren. Typische personenbezogene Daten sind unter anderem Name, Vorname, Adresse, Telefonnummer, IP-Adresse, Cookies und E-Mail-Adresse.
                </p>
                <p>
                    Wenn Sie meine Webseite ansehen und benutzen oder mir anderweitig ausdrücklich Informationen übermitteln, verarbeite ich die Daten, die mir mit jeder Anfrage Ihres Browsers automatisch übermittelt werden (siehe dazu den Abschnitt "Protokoll-Daten"). Sofern Sie mir freiwillig personenbezogene Daten übermitteln, erfolgt die Verarbeitung ausschließlich zweckgebunden an die Anfrage bzw. den jeweiligen Auftrag. Ich weise Sie darauf hin, dass eine Datenübertragung im Internet nie vollständig gegen einen Zugriff durch Dritte geschützt werden kann.
                </p>
                <p>
                    Nachfolgend möchte ich Ihnen in den einzelnen Abschnitten näher erläutern, welche Daten ich wann und zu welchem Zweck verarbeite. Es wird erklärt, wie meine angebotenen Dienste arbeiten und wie hierbei der Schutz Ihrer personenbezogenen Daten gewährleistet wird.
                </p>
            </section>

            <section className="border-l-4 border-primary-500 pl-4 py-1 bg-white/5 rounded-r-lg">
                <p className="font-mono text-primary-400 font-bold">Stand: 14. Januar 2026</p>
            </section>

            <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">Name und Anschrift des Verantwortlichen</h3>
                <p>
                    Der Verantwortliche im Sinne der EU-Datenschutz-Grundverordnung sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
                </p>
                <address className="not-italic bg-neutral-900/50 p-4 rounded-lg border border-white/5">
                    <strong>Johannes Backhaus</strong><br />
                    Wotanstraße 5<br />
                    85579 Neubiberg<br />
                    Deutschland<br />
                    <a href="mailto:johannes@vjbackhaus.com" className="text-primary-400 hover:underline mt-2 inline-block">johannes@vjbackhaus.com</a>
                </address>
            </section>

            <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">Allgemeines zur Verarbeitung personenbezogener Daten</h3>
                <p><strong>Umfang der Verarbeitung:</strong> Ich verarbeite personenbezogene Daten meiner Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie meiner angebotenen Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt nur auf Basis der aktuell geltenden rechtlichen Grundlagen.</p>
                <p><strong>Zwecke der Verarbeitung:</strong> Die Zwecke der Verarbeitung personenbezogener Daten begründen sich in der Durchführung des Geschäftsbetriebs und aller damit verbundenen Nebengeschäfte.</p>
                <p><strong>Weitergabe personenbezogener Daten:</strong> Ich gebe Ihre personenbezogenen Daten nur dann an Dritte weiter, wenn dies contractuell notwendig ist, zur Wahrung berechtigter Interessen dient oder ich gesetzlich dazu verpflichtet bin.</p>
            </section>

            <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">Datenlöschung und Speicherdauer</h3>
                <p>Die personenbezogenen Daten der betroffenen Person werden gelöscht, sobald der Zweck der Speicherung entfällt oder vorgeschriebene Speicherfristen ablaufen.</p>
            </section>

            <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">Hosting</h3>
                <p>
                    Für das Hosting unserer Website und die Darstellung der Seiteninhalte nutze ich das System von GitHub Pages.
                    Sämtliche auf dieser Website erhobenen Daten werden auf den Servern des Anbieters verarbeitet.
                </p>
            </section>

            <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">Cookies</h3>
                <p>
                    Auf dieser Website werden grundsätzlich keine Marketing- und Tracking-Cookies ohne Ihre explizite Einwilligung verwendet.
                    Wir setzen lediglich technisch notwendige Cookies ein, um Ihre Präferenzen (z.B. Cookie-Einstellungen) zu speichern.
                    Weitere Cookies (z.B. für Statistik) werden nur mit Ihrer Zustimmung im Cookie-Banner aktiviert.
                </p>
            </section>

            <section className="space-y-3">
                <h3 className="text-xl font-bold text-white">Rechte betroffener Personen</h3>
                <ul className="list-disc pl-5 space-y-1 text-neutral-400">
                    <li><strong className="text-neutral-200">Widerspruchsrecht:</strong> Gegen Verarbeitung aufgrund berechtigter Interessen.</li>
                    <li><strong className="text-neutral-200">Widerrufsrecht:</strong> Bei Einwilligungen jederzeit möglich.</li>
                    <li><strong className="text-neutral-200">Auskunft, Berichtigung, Löschung:</strong> Nach gesetzlichen Vorgaben.</li>
                </ul>
            </section>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col font-sans antialiased selection:bg-emerald-500/30 bg-neutral-900 text-neutral-100">
            {/* BACKGROUND LAYER - Fixed, Z=0 */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Blobs */}
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-900/10 rounded-full blur-[120px]" />

                {/* Spotlight Overlay - Uses CSS variables */}
                <div
                    className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: `radial-gradient(circle 800px at var(--mouse-x, 50vw) var(--mouse-y, 50vh), rgba(255,255,255,0.06), transparent 40%)`
                    }}
                />
            </div>

            {/* CONTENT LAYER - Relative, Z=10 */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />

                <main className="flex-grow pt-24 relative z-10">
                    {children}
                </main>

                <footer className="py-8 text-center text-neutral-500 text-sm border-t border-white/5 bg-neutral-900/50 backdrop-blur-sm relative z-10">
                    <p>© {new Date().getFullYear()} Johannes Backhaus.</p>
                    <div className="mt-2 flex justify-center gap-4">
                        <button onClick={() => setShowImpressum(true)} className="hover:text-white transition-colors">Impressum</button>
                        <button onClick={() => setShowDatenschutz(true)} className="hover:text-white transition-colors">Datenschutz</button>
                        <button onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))} className="hover:text-white transition-colors">Cookie-Einstellungen</button>
                    </div>
                </footer>
            </div>

            {/* Legal Modals - Layer 50 (managed by Dialog/Modal portals usually, but just in case) */}
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

            <CookieConsent
                onOpenPrivacy={() => setShowDatenschutz(true)}
                onOpenImpressum={() => setShowImpressum(true)}
            />

            <InfoFooter />
        </div>
    );
}
