import { ArrowUp, Star } from "lucide-react";
import { SALON } from "@/lib/salonData";
import { STR, useLang } from "@/lib/i18n";

const LINKS = [
  { key: "services", href: "#services" },
  { key: "artists", href: "#stylists" },
  { key: "gallery", href: "#gallery" },
  { key: "reviews", href: "#reviews" },
  { key: "visit", href: "#visit" },
];

export default function Footer() {
  const { lang } = useLang();
  const t = STR[lang];
  return (
    <footer data-testid="salon-footer" className="relative overflow-hidden border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-sm">
            <p className="font-accent font-bold tracking-[0.2em]"><span className="text-gold">#ONE</span> SALON</p>
            <p className="text-sm text-[#A19B91] leading-relaxed mt-4">{lang === "kn" ? SALON.taglineKn : SALON.tagline}. {SALON.address}</p>
            <p className="mt-4 flex items-center gap-2 text-xs text-[#6E685F]">
              <Star size={12} className="fill-[#C5A059] text-gold" /> {SALON.rating} · {SALON.reviewCount} {t.hero.pillReviews}
            </p>
          </div>
          <div className="text-sm space-y-3">
            <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold mb-4">{t.footer.explore}</p>
            {LINKS.map((l) => (
              <a key={l.key} href={l.href} className="block text-[#A19B91] hover:text-gold transition-colors">{t.nav[l.key]}</a>
            ))}
          </div>
          <div className="text-sm space-y-3">
            <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold mb-4">{t.footer.hours}</p>
            <p className="text-[#A19B91]">{lang === "kn" ? SALON.hoursKn : SALON.hours}</p>
            <a href={SALON.phoneHref} className="block text-[#A19B91] hover:text-gold transition-colors">{SALON.phone}</a>
          </div>
        </div>
        <h2 className="stroke-title font-accent font-extrabold text-[16vw] leading-none text-center mt-16 select-none" aria-hidden>
          #ONE
        </h2>
        <div className="mt-10 pt-8 border-t hairline flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-[#6E685F]">© {new Date().getFullYear()} #ONE SALON · Basavanagudi, Bengaluru</p>
          <button
            data-testid="footer-back-to-top-button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A19B91] hover:text-gold transition-colors"
          >
            {t.footer.backTop} <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
