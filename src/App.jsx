import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./layouts/Layout";
import { BentoGrid } from "./components/bento/BentoGrid";
import { BentoCard } from "./components/bento/BentoCard";
import { ToggleImage } from "./components/ui/ToggleImage";
import { FlipCard } from "./components/ui/FlipCard";
import { ImageModal } from "./components/ui/ImageModal";
import { DetailModal } from "./components/ui/DetailModal";
import { Briefcase, Star, Mail, MapPin, Linkedin, Github, User, ZoomIn, ArrowUpRight, Phone, Copy, Check, ExternalLink, Instagram } from "lucide-react";
import { cn } from "./lib/utils";

// Import images
import mapImg from "./assets/images/map-dark.png";
import ambulanceImg from "./assets/images/juh_ambulance.jpg";
import motorcycleImg from "./assets/images/juh_motorcycle.jpg";
import orchestraImg from "./assets/images/br_orchestra.jpg";
import certRsImg from "./assets/images/certificate_rs.jpg";
import certWbImg from "./assets/images/certificate_wb.jpg";
import certAclsImg from "./assets/images/certificate_acls.jpg";

// Helper Component for Copy Button
function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-white/5 hover:border-white/10 text-neutral-400 hover:text-white transition-colors"
      title="Kopieren"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showBioModal, setShowBioModal] = useState(false);
  const [showProfessionModal, setShowProfessionModal] = useState(false);
  const [showSideBusinessModal, setShowSideBusinessModal] = useState(false);

  const certificates = [
    { src: certRsImg, alt: "Rettungssanitäter Urkunde", label: "Rettungssanitäter" },
    { src: certWbImg, alt: "Weiterbildung Rettungsdienst", label: "Weiterbildung" },
    { src: certAclsImg, alt: "ACLS Zertifikat", label: "ACLS Provider" },
  ];

  const fullBio = (
    <>
      <p>
        Vom stellvertretenden Solopauker zum Vorsitzenden des Gesamtpersonalrates.
        Geboren in Erfurt und musikalisch ausgebildet in Erfurt und Weimar, blicke ich auf eine vielseitige Laufbahn zurück.
      </p>
      <p className="mt-4">
        Nach 15 Jahren als passionierter Berufsmusiker wechselte ich die Perspektive:
        Es folgten spannende Jahre in Führungspositionen im Orchestermanagement – zunächst in Dessau,
        dann an der renommierten Bayerischen Staatsoper und schließlich beim Symphonieorchester des Bayerischen Rundfunks (BRSO).
      </p>
      <p className="mt-4">
        Seit 2024 widme ich mich nun mit voller Überzeugung einer neuen Verantwortung:
        Als Vorsitzender des Gesamtpersonalrates vertrete ich engagiert die Interessen der Mitarbeitenden beim Bayerischen Rundfunk.
      </p>
    </>
  );

  const professionContent = (
    <>
      <p>
        Als Leiter des Orchesterbüros beim Symphonieorchester des Bayerischen Rundfunks steuere ich die komplexen Abläufe hinter den Kulissen eines der weltweit führenden Orchester.
      </p>
      <p className="mt-4">
        Es ist eine tägliche Inspiration, mit den besten Dirigentinnen, Dirigenten und Solisten unserer Zeit zusammenzuarbeiten und gemeinsam anspruchsvolle Projekte zu realisieren.
      </p>
      <p className="mt-4">
        Ob bei Konzerten in München oder auf Tourneen durch Europa, Asien und Amerika: Diese Aufgabenvielfalt macht meine Tätigkeit für mich zu einem der spannendsten Berufe der Welt!
      </p>
      <p className="mt-4">
        Da ich immer wieder neue Herausforderungen suche, habe ich mich entschlossen, mich für die berechtigten Interessen der Beschäftigten des Bayerischen Rundfunks einzusetzen und in vertrauensvoller Zusammenarbeit mit der Geschäftsleitung und den Führungskräften dieses starke Medienunternehmen mitzugestalten.
      </p>
      <p className="mt-4">
        Nach meiner festen Überzeugung ist ein starker, unabhängiger öffentlich-rechtlicher Rundfunk unabdingbar für eine Demokratie. Seit Juli 2024 kann ich dieses Engagement als Vorsitzender des Gesamtpersonalrates des Bayerischen Rundfunks verwirklichen.
      </p>
    </>
  );

  const sideBusinessContent = (
    <>
      <p>
        Neben meiner Haupttätigkeit engagiere ich mich im Rettungsdienst und realisiere eigene Projekte.
        Diese Vielseitigkeit erlaubt es mir, über den Tellerrand zu blicken und Kompetenzen aus verschiedenen Welten zu verknüpfen.
      </p>
      <p className="mt-4">
        [Platzhalter für weitere Details zu eigenen Projekten oder spezifischen Qualifikationen im Rettungsdienst.]
      </p>
    </>
  );

  return (
    <Layout>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Johannes Backhaus
          </h1>
          <p className="text-neutral-400 mt-4 text-xl">
            Musiker | Orchestermanagement | Personalrat | Rettungsdienst
          </p>
        </motion.div>

        <BentoGrid>
          {/* Tile 1: About / Intro (Large) */}
          <BentoCard
            className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-neutral-900 to-neutral-800 cursor-pointer group/about"
            title="Über mich"
            onClick={() => setShowBioModal(true)}
            description={
              <div className="flex flex-col gap-2">
                <p className="line-clamp-3 md:line-clamp-none text-neutral-400 group-hover/about:text-neutral-300 transition-colors">
                  Vom stellv. Solopauker zum Vorsitzenden des Gesamtpersonalrates. Geboren in Erfurt und musikalisch ausgebildet in Erfurt und Weimar, blicke ich auf eine vielseitige Laufbahn zurück...
                </p>
                <div className="flex items-center gap-1 text-primary-400 text-sm font-medium mt-1 opacity-80 group-hover/about:opacity-100 transition-opacity">
                  Mehr lesen <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            }
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary-900/40 to-neutral-900 border border-white/5 transition-colors group-hover/about:bg-primary-900/20" />}
            icon={<User className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 2: Profession */}
          <BentoCard
            className="md:col-span-1 md:row-span-1 bg-neutral-900 cursor-pointer group/profession"
            title="Management & Verantwortung"
            onClick={() => setShowProfessionModal(true)}
            description={
              <div className="flex flex-col gap-2">
                <p className="text-neutral-400 group-hover/profession:text-neutral-300 transition-colors">
                  Hinter den Kulissen der Weltklasse
                </p>
                <div className="flex items-center gap-1 text-primary-400 text-sm font-medium mt-1 opacity-80 group-hover/profession:opacity-100 transition-opacity">
                  Mehr lesen <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            }
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/5 relative group">
                <div className="absolute inset-0 bg-neutral-900 z-0" />
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  style={{ backgroundImage: `url(${orchestraImg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent z-10" />
              </div>
            }
            icon={<Briefcase className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 3: Contact (Tall) - Redesign "Connected & Accessible" */}
          <BentoCard
            className="md:col-span-1 md:row-span-2 bg-neutral-950 group/contact"
            title="Kontakt"
            description={
              <div className="flex flex-col gap-6 mt-4">
                {/* Address Section */}
                <div className="flex items-start gap-3 text-neutral-400 group-hover/contact:text-neutral-300 transition-colors">
                  <MapPin className="w-5 h-5 text-neutral-500 mt-1 shrink-0" />
                  <div>
                    <p>Johannes Backhaus</p>
                    <p>Wotanstrasse 5</p>
                    <p>85579 Neubiberg</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  {/* Phone Action */}
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+491749327782"
                      className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg transition-all border border-white/5 hover:border-white/10 group/btn"
                    >
                      <Phone className="w-4 h-4 text-primary-400 group-hover/btn:scale-110 transition-transform" />
                      <span>Anrufen</span>
                    </a>
                    <CopyButton text="+491749327782" />
                  </div>

                  {/* Mail Action */}
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:johannes@vjbackhaus.com"
                      className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white py-2 px-4 rounded-lg transition-all border border-white/5 hover:border-white/10 group/btn"
                    >
                      <Mail className="w-4 h-4 text-primary-400 group-hover/btn:scale-110 transition-transform" />
                      <span>E-Mail</span>
                    </a>
                    <CopyButton text="johannes@vjbackhaus.com" />
                  </div>
                </div>

                {/* Socials & vCard */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div className="flex gap-2">
                    <a
                      href="https://www.linkedin.com/in/johannes-backhaus-42936b44"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-800 rounded-lg hover:bg-[#0077b5] hover:text-white transition-colors text-neutral-400 border border-white/5"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/johannes_backi/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-neutral-800 rounded-lg hover:bg-[#E1306C] hover:text-white transition-colors text-neutral-400 border border-white/5"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            }
            header={
              <div className="flex flex-1 items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 border border-white/5 group-hover/contact:border-primary-500/20 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-100 mix-blend-overlay"></div>
                <div className="relative z-10 p-4 rounded-full bg-white/5 border border-white/10 group-hover/contact:scale-110 group-hover/contact:bg-white/10 transition-all duration-500">
                  <Mail className="h-8 w-8 text-neutral-400 group-hover/contact:text-primary-400 transition-colors" />
                </div>
              </div>
            }
            icon={<User className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 4: Side Business with Flip Gallery */}
          <BentoCard
            className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-neutral-900 to-neutral-800 cursor-pointer group/sidebiz"
            title="Passion & Praxis"
            onClick={() => setShowSideBusinessModal(true)}
            description={
              <div className="flex flex-col gap-2">
                <p className="text-neutral-400 group-hover/sidebiz:text-neutral-300 transition-colors">
                  Im Einsatz für andere
                </p>
                <div className="flex items-center gap-1 text-primary-400 text-sm font-medium mt-1 opacity-80 group-hover/sidebiz:opacity-100 transition-opacity">
                  Mehr lesen <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            }
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-visible border border-white/5 relative group z-10">
                <FlipCard
                  frontContent={
                    <div className="flex w-full h-full rounded-xl overflow-hidden relative">
                      <div
                        className="flex-1 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-all duration-500"
                        style={{ backgroundImage: `url(${motorcycleImg})` }}
                      />
                      <div
                        className="flex-1 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-all duration-500"
                        style={{ backgroundImage: `url(${ambulanceImg})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent z-10 pointer-events-none" />
                    </div>
                  }
                  backContent={
                    <div className="w-full h-full bg-neutral-800 p-4 flex flex-col items-center justify-center">
                      <div className="grid grid-cols-3 gap-2 w-full h-full items-center">
                        {certificates.map((cert, index) => (
                          <div
                            key={index}
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent flip back
                              setSelectedImage(cert.src);
                            }}
                            className="relative cursor-pointer group/cert aspect-[3/4] overflow-hidden rounded-md border border-white/10 hover:border-primary-500/50 transition-colors bg-neutral-900"
                          >
                            <img
                              src={cert.src}
                              alt={cert.alt}
                              className="w-full h-full object-cover opacity-80 group-hover/cert:opacity-100 group-hover/cert:scale-105 transition-all duration-300"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity">
                              <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                />
              </div>
            }
            icon={<Star className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 5: Location (Map Style) */}
          <BentoCard
            className="md:col-span-2 bg-neutral-900"
            title="Standort"
            description="Neubiberg / München"
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-neutral-900 z-0" />
                {/* Map Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${mapImg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent z-10" />

                {/* Pulsing Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-500 border-2 border-white"></span>
                  </span>
                </div>
              </div>
            }
            icon={<MapPin className="h-4 w-4 text-neutral-500" />}
          />
        </BentoGrid>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}

      {/* Bio Modal */}
      {showBioModal && (
        <DetailModal
          title="Über mich"
          content={fullBio}
          onClose={() => setShowBioModal(false)}
        />
      )}

      {/* Profession Modal */}
      {showProfessionModal && (
        <DetailModal
          title="Management & Verantwortung"
          content={professionContent}
          onClose={() => setShowProfessionModal(false)}
        />
      )}

      {/* Side Business Modal */}
      {showSideBusinessModal && (
        <DetailModal
          title="Passion & Praxis"
          content={sideBusinessContent}
          onClose={() => setShowSideBusinessModal(false)}
        />
      )}
    </Layout>
  );
}

export default App;
