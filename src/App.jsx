import { motion } from "framer-motion";
import { Layout } from "./layouts/Layout";
import { BentoGrid } from "./components/bento/BentoGrid";
import { BentoCard } from "./components/bento/BentoCard";
import { Briefcase, Star, Mail, MapPin, Linkedin, Github, User } from "lucide-react";
import { cn } from "./lib/utils";

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
            Veronika & <br /> Johannes Backhaus
          </h1>
          <p className="text-neutral-400 mt-4 text-xl">
            Software & Innovation
          </p>
        </motion.div>

        <BentoGrid className="max-w-4xl mx-auto">

          {/* Tile 1: About / Intro (Large) */}
          <BentoCard
            className="md:col-span-2 md:row-span-1 bg-gradient-to-br from-neutral-900 to-neutral-800"
            title="Über uns"
            description="Diese Website bietet eine kompakte Übersicht über uns und unsere Tätigkeiten. Wir verbinden professionelle Expertise mit persönlicher Leidenschaft."
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
                  <p className="text-neutral-400">Veronika und Johannes Backhaus</p>
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
            header={<div className="flex flex-1 items-center justify-center w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5 group-hover/bento:bg-primary-900/10 transition-colors"><Mail className="h-10 w-10 text-neutral-500 group-hover/bento:text-primary-400 transition-colors" /></div>}
            icon={<Mail className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 3: Beruf (Tall) */}
          <BentoCard
            href="#"
            className="md:col-span-1 md:row-span-2 bg-neutral-900"
            title="Beruf"
            description="Beruflicher Hintergrund und Schwerpunkte. Expertise in Softwareentwicklung und Projektmanagement."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden border border-white/5 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 hover:scale-105 transition-transform duration-500" />
              </div>
            }
            icon={<Briefcase className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 4: Nebentätigkeit (Wide) */}
          <BentoCard
            href="#"
            className="md:col-span-2 md:row-span-1 bg-gradient-to-r from-neutral-900 to-neutral-800"
            title="Nebentätigkeit"
            description="Projektbezogene und nebenberufliche Tätigkeiten. Wir verwirklichen eigene Ideen."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl group-hover:bg-accent-500/30 transition-colors" />
              </div>
            }
            icon={<Star className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 5: Location / Decorative */}
          <BentoCard
            className="md:col-span-1 bg-neutral-900"
            title="Standort"
            description="Based in Germany."
            header={<div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-800 border border-white/5 items-center justify-center"><MapPin className="text-neutral-600" /></div>}
            icon={<MapPin className="h-4 w-4 text-neutral-500" />}
          />

          {/* Tile 6: Socials / Links */}
          <div className="md:col-span-1 row-span-1 gap-4 grid grid-rows-2">
            <a href="#" className="rounded-xl bg-neutral-900 border border-white/10 p-4 flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors group">
              <Linkedin className="w-6 h-6 text-neutral-400 group-hover:text-blue-500 transition-colors" />
              <span className="text-sm font-medium text-neutral-400">LinkedIn</span>
            </a>
            <a href="#" className="rounded-xl bg-neutral-900 border border-white/10 p-4 flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors group">
              <Github className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
              <span className="text-sm font-medium text-neutral-400">GitHub</span>
            </a>
          </div>

        </BentoGrid>
      </div>
    </Layout>
  );
}

export default App;
