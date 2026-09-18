import { MapPin, Phone, Clock, Navigation, Store, Bath, CalendarCheck, CreditCard, Smartphone, Nfc, Baby } from "lucide-react";
import { SALON, AMENITIES } from "@/lib/salonData";
import { STR, useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "./Reveal";

const AMENITY_ICONS = [Store, Bath, CalendarCheck, CreditCard, Smartphone, Nfc, Baby];

export default function Location() {
  const { lang } = useLang();
  const t = STR[lang].visit;
  return (
    <section id="visit" data-testid="location-contact-section" className="bg-[#0d0d0f] border-t hairline py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            {t.titleA} <span className="italic text-gold">{t.titleB}</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal className="space-y-8">
            <div className="flex gap-5">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-accent text-xs uppercase tracking-[0.25em] text-[#E6D5B8]">{t.address}</h3>
                <p className="text-sm text-[#A19B91] leading-relaxed mt-2 max-w-sm">{SALON.address}</p>
              </div>
            </div>
            <div className="flex gap-5">
              <Clock className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-accent text-xs uppercase tracking-[0.25em] text-[#E6D5B8]">{t.hours}</h3>
                <p className="text-sm text-[#A19B91] mt-2">{lang === "kn" ? SALON.hoursKn : SALON.hours}</p>
              </div>
            </div>
            <div className="flex gap-5">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-accent text-xs uppercase tracking-[0.25em] text-[#E6D5B8]">{t.phone}</h3>
                <p className="text-sm text-[#A19B91] mt-2">{SALON.phone}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a data-testid="location-phone-button" href={SALON.phoneHref} className="btn-gold font-accent text-xs uppercase tracking-[0.25em] px-8 py-4 flex items-center gap-2">
                <Phone size={14} /> {t.call}
              </a>
              <a data-testid="location-directions-button" href={SALON.mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost font-accent text-xs uppercase tracking-[0.25em] px-8 py-4 flex items-center gap-2">
                <Navigation size={14} /> {t.directions}
              </a>
            </div>
            <div data-testid="amenities-strip" className="pt-6 border-t hairline">
              <h3 className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold">{lang === "kn" ? "ತಿಳಿದುಕೊಳ್ಳಿ" : "Good to Know"}</h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {AMENITIES.map((a, i) => {
                  const Icon = AMENITY_ICONS[i];
                  return (
                    <span key={a.en} data-testid={`amenity-${i}`} className="flex items-center gap-2 text-xs text-[#A19B91] border hairline px-3.5 py-2 hover:border-[rgba(197,160,89,0.4)] hover:text-[#E6D5B8] transition-colors duration-300">
                      <Icon size={13} className="text-gold" /> {lang === "kn" ? a.kn : a.en}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border hairline-gold overflow-hidden h-[340px] lg:h-full min-h-[340px] gold-glow">
              <iframe
                title="#ONE SALON on Google Maps"
                src="https://maps.google.com/maps?q=ONE%20SALON%20Nagasandra%20Circle%20Basavanagudi%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full grayscale invert-[0.9] contrast-[0.9]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
