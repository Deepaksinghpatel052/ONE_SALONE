import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SALON } from "@/lib/salonData";
import { Reveal, Eyebrow } from "./Reveal";

export default function Location() {
  return (
    <section id="visit" data-testid="location-contact-section" className="bg-[#0d0d0f] border-t hairline py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Visit Us</Eyebrow>
          <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
            In the heart of <span className="italic text-gold">Basavanagudi</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          <Reveal className="space-y-8">
            <div className="flex gap-5">
              <MapPin className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-accent text-xs uppercase tracking-[0.25em] text-[#E6D5B8]">Address</h3>
                <p className="text-sm text-[#A19B91] leading-relaxed mt-2 max-w-sm">{SALON.address}</p>
              </div>
            </div>
            <div className="flex gap-5">
              <Clock className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-accent text-xs uppercase tracking-[0.25em] text-[#E6D5B8]">Hours</h3>
                <p className="text-sm text-[#A19B91] mt-2">{SALON.hours}</p>
              </div>
            </div>
            <div className="flex gap-5">
              <Phone className="text-gold shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-accent text-xs uppercase tracking-[0.25em] text-[#E6D5B8]">Phone</h3>
                <p className="text-sm text-[#A19B91] mt-2">{SALON.phone}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a data-testid="location-phone-button" href={SALON.phoneHref} className="btn-gold font-accent text-xs uppercase tracking-[0.25em] px-8 py-4 flex items-center gap-2">
                <Phone size={14} /> Call the Salon
              </a>
              <a data-testid="location-directions-button" href={SALON.mapsUrl} target="_blank" rel="noreferrer" className="btn-ghost font-accent text-xs uppercase tracking-[0.25em] px-8 py-4 flex items-center gap-2">
                <Navigation size={14} /> Get Directions
              </a>
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
