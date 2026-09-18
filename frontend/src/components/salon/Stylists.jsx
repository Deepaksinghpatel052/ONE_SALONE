import { ArrowRight } from "lucide-react";
import { STYLISTS } from "@/lib/salonData";
import { STR, useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "./Reveal";

export default function Stylists() {
  const { lang } = useLang();
  const t = STR[lang].stylists;
  const kn = lang === "kn";
  return (
    <section id="stylists" data-testid="stylists-spotlight-section" className="py-28 bg-[#0d0d0f] border-y hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            {t.titleA} <span className="italic text-gold">{t.titleB}</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {STYLISTS.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.15}>
              <div data-testid={`stylist-card-${s.id}`} className="group relative overflow-hidden border hairline bg-[#141417]">
                <div className="relative h-[420px] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
                  <span className="absolute top-6 left-6 font-accent text-[10px] uppercase tracking-[0.3em] bg-black/60 backdrop-blur px-4 py-2 text-[#E6D5B8] border hairline-gold">
                    {kn ? s.roleKn : s.role}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl">{s.name}</h3>
                  <p className="font-accent text-xs uppercase tracking-[0.25em] text-gold mt-2">{kn ? s.specialtyKn : s.specialty}</p>
                  <p className="text-sm text-[#A19B91] leading-relaxed mt-4">{kn ? s.noteKn : s.note}</p>
                  <a href="#booking" data-testid={`stylist-book-${s.id}`} className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E6D5B8] hover:text-gold transition-colors">
                    {t.bookWith} {s.name} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
