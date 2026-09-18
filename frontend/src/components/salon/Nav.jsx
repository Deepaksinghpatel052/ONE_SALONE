import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import { SALON } from "@/lib/salonData";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Artists", href: "#stylists" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="salon-nav-bar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-black/75 border-b hairline shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" data-testid="salon-nav-logo" className="font-accent font-bold tracking-[0.2em] text-sm">
          <span className="text-gold">#ONE</span> SALON
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-xs uppercase tracking-[0.2em] text-[#A19B91] hover:text-gold transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-1.5 text-xs border hairline-gold px-3 py-1.5 text-[#E6D5B8]">
            <Star size={12} className="fill-[#C5A059] text-gold" /> {SALON.rating}
          </span>
          <a data-testid="salon-nav-phone-link" href={SALON.phoneHref} className="hidden lg:flex items-center gap-2 text-xs text-[#A19B91] hover:text-gold transition-colors">
            <Phone size={13} /> {SALON.phone}
          </a>
          <a data-testid="salon-nav-book-button" href="#booking" className="btn-gold font-accent text-xs uppercase tracking-[0.2em] px-5 py-2.5">
            Book Now
          </a>
        </div>
      </div>
    </motion.header>
  );
}
