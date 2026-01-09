import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "./layouts/Layout";
import { BentoGrid } from "./components/bento/BentoGrid";
import { BentoCard } from "./components/bento/BentoCard";
import { ToggleImage } from "./components/ui/ToggleImage";
import { FlipCard } from "./components/ui/FlipCard";
import { Briefcase, Star, Mail, MapPin, Linkedin, Github, User } from "lucide-react";
import { cn } from "./lib/utils";

// Import images
import mapImg from "./assets/images/map-dark.png";
import ambulanceImg from "./assets/images/juh_ambulance.jpg";
import motorcycleImg from "./assets/images/juh_motorcycle.jpg";
import orchestraImg from "./assets/images/br_orchestra.jpg";
import certImg from "./assets/images/certificate_rs.jpg";

function App() {
  return (
    <Layout>
      <div className="px-6 md:px-12 py-12 relative">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Johannes Backhaus
          </h1>
          <p className="text-neutral-400 mt-4 text-xl">
            Musiker | Orchestermanagement | Personalrat | Rettungsdienst
          </p>
        </motion.div>

        <BentoGrid className="max-w-4xl mx-auto">

          {/* Tile 1: About / Intro (Large) */}
          <BentoCard
            className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-neutral-900 to-neutral-800"
            title="Über mich"
            description="Vom stellv. Solopauker zum Vorsitzenden des Gesamtpersonalrates. Geboren in Erfurt und musikalisch ausgebildet in Erfurt und Weimar, blicke ich auf eine vielseitige Laufbahn zurück: 15 Jahre als Berufsmusiker, gefolgt von Führungspositionen im Orchestermanagement in Dessau, an der Bayerischen Staatsoper und beim BRSO. Seit 2024 widme ich mich als Vorsitzender des Gesamtpersonalrates voll der Interessenvertretung beim Bayerischen Rundfunk."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary-900/40 to-neutral-900 border border-white/5" />}
            icon={<User className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 2: Contact (Detailed) */}
          <BentoCard
            className="md:col-span-1 md:row-span-2 bg-neutral-950"
            title="Kontakt"
            description={
              <div className="flex flex-col gap-4 mt-2">
                <div>
                  <p className="font-bold text-neutral-200">Postanschrift</p>
                  <p className="text-neutral-400">Johannes Backhaus</p>
                  <p className="text-neutral-400">Wotanstrasse 5</p>
                  <p className="text-neutral-400">85579 Neubiberg, Deutschland</p>
                </div>

                <div className="flex flex-col gap-1">
                  <a href="tel:+491749327782" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="font-bold text-neutral-200">Mobil:</span> +49 174 93277 82
                  </a>
                  <a href="mailto:johannes@vjbackhaus.com" className="hover:text-primary-400 transition-colors flex items-center gap-2">
                    <span className="font-bold text-neutral-200">Mail:</span> johannes@vjbackhaus.com
                  </a>
                </div>
              </div>
            }
            header={<div className="flex flex-1 items-center justify-center w-full h-full min-h-[4rem] rounded-xl bg-neutral-900 border border-white/5 group-hover/bento:bg-primary-900/10 transition-colors"><Mail className="h-6 w-6 text-neutral-500 group-hover/bento:text-primary-400 transition-colors" /></div>}
            icon={<Mail className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 3: Beruf (Tall) */}
          <BentoCard
            href="#"
            className="md:col-span-1 md:row-span-2 bg-neutral-900"
            title="Beruf"
            description="Meine aktuelle Tätigkeit beim Bayerischen Rundfunk"
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

          {/* Tile 4: Nebentätigkeit (Wide) */}
          <BentoCard
            href="#"
            className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-neutral-900 to-neutral-800"
            title="Nebentätigkeit"
            description="Projektbezogene und nebenberufliche Tätigkeiten. Ich verwirkliche eigene Ideen."
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
                    <div className="w-full h-full bg-neutral-800 p-4 flex flex-col items-center justify-center text-center">
                      <img src={certImg} alt="Rettungssanitäter Urkunde" className="max-h-full max-w-full object-contain rounded shadow-lg" />
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

    </Layout>
  );
}

export default App;
