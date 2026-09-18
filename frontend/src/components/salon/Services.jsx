import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ArrowUpRight } from "lucide-react";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/salonData";
import { Reveal, Eyebrow } from "./Reveal";

export default function Services() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? SERVICES : SERVICES.filter((s) => s.cat === cat);

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <Reveal className="flex flex-wrap items-end justify-between gap-8">
        <div>
          <Eyebrow>The Menu</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            Services, <span className="italic text-gold">curated</span>
          </h2>
        </div>
        <div data-testid="service-category-filter" className="flex flex-wrap gap-2">
          {SERVICE_CATEGORIES.map((c) => (
            <button
              key={c}
              data-testid={`service-filter-${c.toLowerCase()}`}
              onClick={() => setCat(c)}
              className={`font-accent text-xs uppercase tracking-[0.2em] px-5 py-2.5 border transition-all duration-300 ${
                cat === c ? "bg-[#C5A059] text-[#0A0A0B] border-[#C5A059]" : "hairline-gold text-[#A19B91] hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout data-testid="services-showcase-grid" className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {list.map((s) => (
            <motion.a
              layout
              key={s.id}
              href="#booking"
              data-testid={`service-card-${s.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="service-item-card group relative bg-[#141417] border hairline p-8 hover:border-[rgba(197,160,89,0.5)] hover:bg-[#1A1A1E] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold border hairline-gold px-3 py-1">{s.cat}</span>
                <ArrowUpRight size={18} className="text-[#6E685F] group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <h3 className="font-display text-2xl mt-8 leading-snug group-hover:text-gold transition-colors duration-500">{s.name}</h3>
              <p className="mt-3 text-sm text-[#A19B91] leading-relaxed">{s.desc}</p>
              <div className="mt-8 flex items-center justify-between border-t hairline pt-5">
                <span className="font-display text-xl text-[#E6D5B8]">{s.price}</span>
                <span className="flex items-center gap-2 text-xs text-[#6E685F]">
                  <Clock size={12} /> {s.duration}
                  {s.stylist && <span className="text-gold">· {s.stylist}</span>}
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
