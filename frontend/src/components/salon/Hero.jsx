import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Star, ArrowDown } from "lucide-react";
import { SALON } from "@/lib/salonData";

const LINES = ["The Art of", "Haute Coiffure"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] overflow-hidden flex items-end">
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop"
          alt="#ONE SALON interior"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/60 to-[#0A0A0B]/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(197,160,89,0.15),transparent_55%)]" />

      <motion.div style={{ opacity: fade }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-8"
        >
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E6D5B8] border hairline-gold px-4 py-2 backdrop-blur-sm bg-black/30">
            <MapPin size={12} className="text-gold" /> {SALON.area}
          </span>
          <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E6D5B8] border hairline-gold px-4 py-2 backdrop-blur-sm bg-black/30">
            <Star size={12} className="fill-[#C5A059] text-gold" /> {SALON.rating} · {SALON.reviewCount} Google Reviews
          </span>
        </motion.div>

        <h1 data-testid="hero-headline" className="font-display font-medium leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl">
          {LINES.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1">
              <motion.span
                className={`block ${i === 1 ? "italic text-gold" : ""}`}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.7 + i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-6 max-w-xl text-[#A19B91] leading-relaxed text-base"
        >
          Basavanagudi's most-reviewed beauty sanctuary. Precision cuts, couture colour and
          slow spa rituals — crafted one guest at a time since day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a data-testid="hero-book-now-cta" href="#booking" className="btn-gold font-accent text-xs uppercase tracking-[0.25em] px-8 py-4">
            Reserve Your Chair
          </a>
          <a data-testid="hero-explore-services-cta" href="#services" className="btn-ghost font-accent text-xs uppercase tracking-[0.25em] px-8 py-4">
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 z-10 hidden md:flex flex-col items-center gap-2 text-[#6E685F]"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] [writing-mode:vertical-lr]">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}
