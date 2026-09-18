import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { REVIEWS, RATING_BARS, SALON } from "@/lib/salonData";
import { STR, useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "./Reveal";

const Stars = ({ n }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} className={i < n ? "fill-[#C5A059] text-gold" : "text-[#3a3a3e]"} />
    ))}
  </div>
);

export default function Reviews() {
  const { lang } = useLang();
  const t = STR[lang].reviews;
  const kn = lang === "kn";
  return (
    <section id="reviews" data-testid="google-reviews-section" className="py-28 bg-[#0d0d0f] border-y hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1fr_1.4fr] gap-14">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <div className="mt-6 flex items-end gap-4">
            <span data-testid="google-rating-score" className="font-display text-8xl leading-none text-gold">{SALON.rating}</span>
            <div className="pb-2">
              <Stars n={5} />
              <p className="text-sm text-[#A19B91] mt-2">{SALON.reviewCount} {t.reviews}</p>
            </div>
          </div>
          <div className="mt-8 space-y-2.5 max-w-xs">
            {RATING_BARS.map((b) => (
              <div key={b.star} className="flex items-center gap-3 text-xs text-[#A19B91]">
                <span className="w-3">{b.star}</span>
                <div className="flex-1 h-1 bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-[#C5A059]"
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 flex items-center gap-2 text-xs text-[#6E685F]">
            <BadgeCheck size={14} className="text-gold" /> {t.source}
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <blockquote className="h-full bg-[#141417] border hairline p-7 hover:border-[rgba(197,160,89,0.4)] transition-colors duration-500">
                <Quote size={18} className="text-gold mb-4" />
                <p className="text-sm text-[#E6D5B8] leading-relaxed">"{kn ? r.textKn : r.text}"</p>
                <footer className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">{kn && r.nameKn ? r.nameKn : r.name}</p>
                    <p className="text-xs text-[#6E685F] mt-0.5">{kn ? r.metaKn : r.meta}</p>
                  </div>
                  <Stars n={r.stars} />
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
