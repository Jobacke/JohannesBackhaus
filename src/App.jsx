import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./layouts/Layout";
import { BentoGrid } from "./components/bento/BentoGrid";
import { BentoCard } from "./components/bento/BentoCard";
import { ToggleImage } from "./components/ui/ToggleImage";
import { FlipCard } from "./components/ui/FlipCard";
import { ImageModal } from "./components/ui/ImageModal";
import { DetailModal } from "./components/ui/DetailModal";
import { VideoModal } from "./components/ui/VideoModal";
import { Briefcase, Star, Mail, MapPin, Linkedin, Github, User, ZoomIn, ArrowUpRight, Phone, Copy, Check, ExternalLink, Instagram, Compass, Clock, Calendar, Sparkles, Play, Plane, Film } from "lucide-react";
import { cn } from "./lib/utils";

// Import images
import mapImg from "./assets/images/map-dark.png";
import ambulanceImg from "./assets/images/juh_ambulance.jpg";
import motorcycleImg from "./assets/images/juh_motorcycle.jpg";
import orchestraImg from "./assets/images/br_orchestra.jpg";
import certRsImg from "./assets/images/certificate_rs.jpg";
import certWbImg from "./assets/images/certificate_wb.jpg";
import certAclsImg from "./assets/images/certificate_acls.jpg";
import profileImg from "./assets/images/profile.jpg";

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
  const [showRetirementModal, setShowRetirementModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const certificates = [
    { src: certRsImg, alt: "Rettungssanitäter Urkunde", label: "Rettungssanitäter" },
    { src: certWbImg, alt: "Weiterbildung Rettungsdienst", label: "Weiterbildung" },
    { src: certAclsImg, alt: "ACLS Zertifikat", label: "ACLS Provider" },
  ];

  const fullBio = (
    <>
      <p>
        Vom stellvertretenden Solopauker zum Vorsitzenden des Gesamtpersonalrates – meine berufliche Laufbahn ist geprägt von stetiger Weiterentwicklung und dem Streben, Prozesse aktiv mitzugestalten.
      </p>
      <p className="mt-4">
        Geboren in Erfurt und an den dortigen sowie Weimarer Musikhochschulen fundiert ausgebildet, verbrachte ich zunächst 15 erfolgreiche Jahre als passionierter Berufsmusiker. In dieser Zeit durfte ich das Innenleben von Orchestern hautnah erleben und als stellvertretender Solopauker den Rhythmus und Puls der Musik maßgeblich mitgestalten.
      </p>
      <p className="mt-4">
        Angetrieben von dem Wunsch, das große Ganze hinter den Kulissen zu lenken, initiierte ich einen Perspektivenwechsel hinein ins Orchestermanagement. Es folgten prägende Jahre in Führungspositionen: Nach wertvollen Erfahrungen in Dessau führte mich mein Weg an zwei der weltweit führenden Kulturinstitutionen – die Bayerische Staatsoper und schließlich das Symphonieorchester des Bayerischen Rundfunks. Diese Herausforderungen haben meinen Blick für strukturelle Abläufe und wertschätzende Personalführung maßgeblich geschärft.
      </p>
      <p className="mt-4">
        Genau diese Erfahrungen und meine tiefe Verwurzelung in der Belegschaft führten mich zu meiner Verantwortung als Vorsitzender des Gesamtpersonalrates: Hier habe ich mich beim Bayerischen Rundfunk auf höchster Ebene engagiert für die vielseitigen Interessen, fairen Arbeitsbedingungen und die Zukunft unserer Mitarbeitenden eingesetzt.
      </p>
      <p className="mt-4 p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 text-neutral-200">
        <strong className="text-primary-400 block mb-1">Neuer Lebensabschnitt & Rettungsdienst:</strong>
        Aktuell baue ich mein Langzeitkonto (Überstunden) ab und bereite mich auf meinen vorgezogenen Ruhestand ab dem <strong>01.03.2027</strong> vor. Gleichzeitig habe ich mein Engagement bei der Johanniter-Unfall-Hilfe seit dem <strong>01.10.2026 auf 50%</strong> erweitert – mit voller Hingabe für die Notfallmedizin, Motorradstaffel, Musik und neue persönliche Freiheiten.
      </p>
    </>
  );

  const retirementContent = (
    <div className="space-y-4">
      <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/20 text-neutral-200">
        <div className="flex items-center gap-2 text-primary-400 font-bold text-base mb-1">
          <Calendar className="w-5 h-5" />
          Meilenstein 01.03.2027 – Vorgezogener Ruhestand
        </div>
        <p className="text-sm text-neutral-300">
          Nach Jahrzehnten vollen Einsatzes auf den Konzertbühnen, in der Orchesterleitung und an der Spitze der Mitarbeitervertretung bricht ein wohlüberlegter neuer Lebensabschnitt an.
        </p>
      </div>

      <div className="space-y-2">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-400" />
          Aktuelle Phase: Abbau des Langzeitkontos
        </h4>
        <p>
          Aktuell befinde ich mich in der Freiphase zum Abbau meines Langzeitkontos. Die über viele Jahre durch engagierte Sonderprojekte, Konzertreisen und Leitungsfunktionen aufgebauten Überstunden nutze ich nun gezielt, um den Übergang in den Ruhestand bewusst zu gestalten.
        </p>
        <p>
          Dieser Zeitgewinn ermöglicht es mir bereits heute, das Berufsleben mit Dankbarkeit abzuschließen und neue Prioritäten im Alltag zu setzen.
        </p>
      </div>

      <div className="space-y-2 pt-2 border-t border-white/10">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-primary-400" />
          Ausblick & Leidenschaften für die Zukunft
        </h4>
        <p>
          Ruhestand bedeutet für mich nicht Stillstand, sondern die Freiheit, Zeit dort einzusetzen, wo Herz und Tatkraft gebraucht werden:
        </p>
        <ul className="space-y-2 text-sm text-neutral-300 pl-4 list-disc marker:text-primary-400">
          <li>
            <strong>Rettungsdienst & Motorradstaffel:</strong> Mit dem Ausbau auf eine <strong>50%-Tätigkeit bei der Johanniter-Unfall-Hilfe (JUH) seit dem 01.10.2026</strong> widme ich mich der Notfallmedizin und der Motorradstaffel in der Region München mit noch größerer zeitlicher Flexibilität.
          </li>
          <li>
            <strong>Musik & Kultur:</strong> Die lebenslange Verbundenheit mit der Musikwelt bleibt als bereichernder Begleiter bestehen.
          </li>
          <li>
            <strong>Persönliche Freiheit:</strong> Zeit für Reisen, Motorradtouren, Familie, Freunde und neue Projekte ohne den Takt von Dienstplänen.
          </li>
        </ul>
      </div>

      {/* Travel Impression Videos Section */}
      <div className="space-y-3 pt-3 border-t border-white/10">
        <h4 className="text-lg font-bold text-white flex items-center gap-2">
          <Plane className="w-5 h-5 text-primary-400" />
          Reise-Impressionen der Freiphase 2026
        </h4>
        <p className="text-sm text-neutral-300">
          Die gewonnene zeitliche Flexibilität nutze ich intensiv für Reisen in die Natur und den Süden:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Schweden Video 1 */}
          <div
            onClick={() => setActiveVideo({
              title: "Schweden Reise – Impressionen Teil 1",
              date: "30.08. – 06.09.2026",
              description: "Endlose Wälder, glasklare Seen und pure Weite im Spätsommer.",
              src: "/assets/videos/Schweden1.mp4"
            })}
            className="group/travel p-4 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 border border-white/10 hover:border-primary-500/50 cursor-pointer transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                  🇸🇪 Schweden 1
                </span>
                <span className="text-xs text-neutral-400">30.08. – 06.09.2026</span>
              </div>
              <h5 className="font-semibold text-white group-hover/travel:text-primary-400 transition-colors">
                Natur & Weite im Norden (Teil 1)
              </h5>
              <p className="text-xs text-neutral-400 mt-1">
                Eindrücke einer erholsamen Spätsommerwoche in Skandinavien.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-primary-400 font-medium">
              <Play className="w-4 h-4 fill-primary-400" />
              <span>Video ansehen</span>
            </div>
          </div>

          {/* Schweden Video 2 */}
          <div
            onClick={() => setActiveVideo({
              title: "Schweden Reise – Impressionen Teil 2",
              date: "30.08. – 06.09.2026",
              description: "Erkundungen, Ruhe und unberührte Natur im schwedischen Spätsommer.",
              src: "/assets/videos/Schweden2.mp4"
            })}
            className="group/travel p-4 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 border border-white/10 hover:border-primary-500/50 cursor-pointer transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
                  🇸🇪 Schweden 2
                </span>
                <span className="text-xs text-neutral-400">30.08. – 06.09.2026</span>
              </div>
              <h5 className="font-semibold text-white group-hover/travel:text-primary-400 transition-colors">
                Natur & Weite im Norden (Teil 2)
              </h5>
              <p className="text-xs text-neutral-400 mt-1">
                Weitere stimmungsvolle Momente aus Schweden.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-primary-400 font-medium">
              <Play className="w-4 h-4 fill-primary-400" />
              <span>Video ansehen</span>
            </div>
          </div>

          {/* Gardasee Video 1 */}
          <div
            onClick={() => setActiveVideo({
              title: "Gardasee Reise – Impressionen Teil 1",
              date: "08.09. – 15.09.2026",
              description: "Italienisches Flair, malerische Ufer und Panoramablicke am Lago di Garda.",
              src: "/assets/videos/Gardasee1.mp4"
            })}
            className="group/travel p-4 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 border border-white/10 hover:border-primary-500/50 cursor-pointer transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                  🇮🇹 Gardasee 1
                </span>
                <span className="text-xs text-neutral-400">08.09. – 15.09.2026</span>
              </div>
              <h5 className="font-semibold text-white group-hover/travel:text-primary-400 transition-colors">
                Sonne, Ufer & Lago di Garda (Teil 1)
              </h5>
              <p className="text-xs text-neutral-400 mt-1">
                Wundervolle Tage zwischen Seeufer und italienischer Lebensart.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-primary-400 font-medium">
              <Play className="w-4 h-4 fill-primary-400" />
              <span>Video ansehen</span>
            </div>
          </div>

          {/* Gardasee Video 2 */}
          <div
            onClick={() => setActiveVideo({
              title: "Gardasee Reise – Impressionen Teil 2",
              date: "08.09. – 15.09.2026",
              description: "Berge, Kurven und faszinierende Ausblicke rund um den Gardasee.",
              src: "/assets/videos/Gardasee2.mp4"
            })}
            className="group/travel p-4 rounded-xl bg-neutral-800/60 hover:bg-neutral-800 border border-white/10 hover:border-primary-500/50 cursor-pointer transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                  🇮🇹 Gardasee 2
                </span>
                <span className="text-xs text-neutral-400">08.09. – 15.09.2026</span>
              </div>
              <h5 className="font-semibold text-white group-hover/travel:text-primary-400 transition-colors">
                Panoramen & Bergstraßen (Teil 2)
              </h5>
              <p className="text-xs text-neutral-400 mt-1">
                Aussichten und Erlebnisse aus den Höhen rund um den See.
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-primary-400 font-medium">
              <Play className="w-4 h-4 fill-primary-400" />
              <span>Video ansehen</span>
            </div>
          </div>
        </div>
      </div>

      <p className="pt-2 text-sm text-neutral-400 italic">
        „Jeder Abschied von einer beruflichen Station ist das Tor zu neuen Wegen und wertvollen Freiheiten.“
      </p>
    </div>
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
        Neben meiner Haupttätigkeit habe ich mich Anfang 2022 entschieden, eine Ausbildung als Rettungssanitäter zu absolvieren. Ich wollte unbedingt Mitglied der Motorradstaffel der Johanniter Unfallhilfe werden und dazu wird als medizinische Qualifikation die erfolgreich abgeschlossene Ausbildung zum Rettungssanitäter vorausgesetzt. Diese Ausbildung habe ich im April 2022 abgeschlossen und nach mehreren Fahrtrainings auch mein Ziel Mitglied der Motorradstaffel zu werden erreicht.
      </p>
      <p className="mt-4">
        Nachdem ich einige Zeit ehrenamtlich im Rettungsdienst der JUH in München und im Landkreis gearbeitet habe und zunächst mit einer 20%-Nebentätigkeit aktiv war, bin ich jetzt seit dem <strong>01.10.2026 mit 50% im Rettungsdienst der JUH</strong> in der Region München tätig. Mit der Motorradstaffel sichern wir Veranstaltungen sanitätsdienstlich ab und sorgen an vielen Wochenenden auf den Autobahnen und Fernverkehrsstraßen für freie Staugassen und sind als First Responder im Einsatz.
      </p>
      <p className="mt-4">
        So bin ich im letzten Jahr rund 4600 km im Dienst für andere Menschen mit den Motorrädern der Staffel auf Achse gewesen. Ein ganz besonderes Fahrsicherheitstraining bei der Eskortenstaffel der Bundeswehr hat mich dafür zusätzlich profiliert. Eine Fortbildung in ACLS der American Heart Association rundet mein Fachwissen im Bereich Rettungsdienst ab.
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
          className="mb-12 flex flex-col items-center justify-center gap-8 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <div
              onClick={() => setShowRetirementModal(true)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs md:text-sm font-medium mb-6 hover:bg-primary-500/20 cursor-pointer transition-all duration-300 group"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span>Aktuell im Überstundenabbau • Vorgezogener Ruhestand ab 01.03.2027</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tight text-gradient-nature drop-shadow-2xl">
              Johannes Backhaus
            </h1>
            <p className="text-neutral-400 mt-4 text-xl">
              Musiker | Orchestermanagement | Personalrat | Rettungsdienst
            </p>
          </div>

          <div className="relative group mt-8">
            <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={profileImg}
              alt="Johannes Backhaus"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl object-cover border border-white/10 shadow-2xl rotate-0 group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </motion.div>

        <BentoGrid>
          {/* Tile 1: About / Intro (Large) */}
          <BentoCard
            id="about"
            className="md:col-span-2 md:row-span-1 glass-card cursor-pointer group/about"
            title="Über mich"
            onClick={() => setShowBioModal(true)}
            description={
              <div className="flex flex-col gap-2">
                <p className="line-clamp-3 md:line-clamp-none text-neutral-400 group-hover/about:text-neutral-300 transition-colors">
                  Vom stellv. Solopauker zum Vorsitzenden des Gesamtpersonalrates – meine Laufbahn ist geprägt von stetiger Weiterentwicklung und dem Streben, Prozesse aktiv mitzugestalten...
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
            id="management"
            className="md:col-span-1 md:row-span-1 glass-card cursor-pointer group/profession"
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

          {/* Tile: Retirement / New Life Chapter */}
          <BentoCard
            id="retirement"
            className="md:col-span-2 md:row-span-1 glass-card cursor-pointer group/retire ring-1 ring-primary-500/20 hover:ring-primary-500/40"
            title="Neuer Lebensabschnitt: Freiphase & Ruhestand"
            onClick={() => setShowRetirementModal(true)}
            icon={<Compass className="h-4 w-4 text-neutral-500" />}
            description={
              <div className="flex flex-col gap-2">
                <p className="text-neutral-400 group-hover/retire:text-neutral-300 transition-colors">
                  Aktuell baue ich mein Langzeitkonto (Überstunden) ab und bereite mich auf den vorgezogenen Ruhestand ab dem <strong>01.03.2027</strong> vor – mit Raum für Notfallmedizin, Musik und neue Herzensprojekte.
                </p>
                <div className="flex items-center gap-1 text-primary-400 text-sm font-medium mt-1 opacity-80 group-hover/retire:opacity-100 transition-opacity">
                  Mehr lesen <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            }
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary-950/50 via-neutral-900/80 to-teal-950/40 border border-primary-500/20 p-5 flex flex-col justify-between relative overflow-hidden group">
                <div className="flex items-center justify-between text-xs font-semibold relative z-10">
                  <span className="flex items-center gap-1 text-primary-400">
                    <Clock className="w-3.5 h-3.5" />
                    Aktuell: Langzeitkonto-Abbau
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30">
                    01.03.2027 Ruhestand
                  </span>
                </div>
                <div className="relative z-10 flex items-center gap-4 mt-2">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center text-primary-400 shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-neutral-200 font-semibold text-sm md:text-base">
                      Vom intensiven Berufsleben zu neuen Freiräumen
                    </div>
                    <div className="text-xs text-neutral-400">
                      Mehr Flexibilität für JUH-Rettungsdienst, Reisen und Musik
                    </div>
                  </div>
                </div>
                <div className="w-full bg-neutral-800/80 h-1.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full w-3/4 rounded-full" />
                </div>
              </div>
            }
          />

          {/* Tile 3: Contact (Tall) - Redesign "Connected & Accessible" */}
          <BentoCard
            id="contact"
            className="md:col-span-1 md:row-span-2 glass-card bg-neutral-950/80 group/contact"
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
            id="passion"
            className="md:col-span-2 md:row-span-1 glass-card cursor-pointer group/sidebiz"
            title="Passion & Praxis"
            onClick={() => setShowSideBusinessModal(true)}
            description={
              <div className="flex flex-col gap-2">
                <p className="text-neutral-400 group-hover/sidebiz:text-neutral-300 transition-colors">
                  Im Einsatz für Andere – seit 01.10.2026 mit 50% im Rettungsdienst der JUH & Motorradstaffel.
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
            id="location"
            className="md:col-span-3 glass-card"
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

      {/* Retirement Modal */}
      {showRetirementModal && (
        <DetailModal
          title="Neuer Lebensabschnitt: Freiphase & Ruhestand"
          content={retirementContent}
          onClose={() => setShowRetirementModal(false)}
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

      {/* Travel Video Modal */}
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </Layout>
  );
}

export default App;
