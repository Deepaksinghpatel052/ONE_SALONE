import { Reveal, Eyebrow } from "./Reveal";
import { STR, useLang } from "@/lib/i18n";

export default function Manifesto() {
  const { lang } = useLang();
  const t = STR[lang].manifesto;
  return (
    <section data-testid="manifesto-section" className="max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <Reveal>
        <Eyebrow>{t.eyebrow}</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 max-w-2xl leading-tight">
          {t.titleA} <span className="italic text-gold">{t.titleB}</span>
        </h2>
      </Reveal>
      <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/5 border hairline">
        {t.chapters.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.12} className="bg-[#0A0A0B]">
            <div className="p-10 h-full group hover:bg-[#141417] transition-colors duration-500">
              <span className="font-accent text-sm text-gold tracking-[0.3em]">{c.n}</span>
              <h3 className="font-display text-3xl mt-6 group-hover:text-gold transition-colors duration-500">{c.title}</h3>
              <p className="mt-4 text-sm text-[#A19B91] leading-relaxed">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
