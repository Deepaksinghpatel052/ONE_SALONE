import { Diamond } from "lucide-react";
import { STR, useLang } from "@/lib/i18n";

export default function Marquee() {
  const { lang } = useLang();
  const ITEMS = STR[lang].marquee;
  const row = [...ITEMS, ...ITEMS];
  return (
    <div data-testid="editorial-marquee-strip" className="relative border-y hairline-gold py-5 overflow-hidden bg-[#0d0d0f]">
      <div className="marquee-track items-center gap-10">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10 pr-10">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-display italic text-2xl text-[#E6D5B8]">{item}</span>
                <Diamond size={10} className="text-gold fill-[#C5A059]/40" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
