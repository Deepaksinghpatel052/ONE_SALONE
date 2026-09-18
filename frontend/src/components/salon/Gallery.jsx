import { motion } from "framer-motion";
import { GALLERY } from "@/lib/salonData";
import { Reveal, Eyebrow } from "./Reveal";

export default function Gallery() {
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <Reveal>
        <Eyebrow>The Gallery</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
          Moments from <span className="italic text-gold">the floor</span>
        </h2>
      </Reveal>
      <div data-testid="editorial-gallery-grid" className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
        {GALLERY.map((g, i) => (
          <motion.figure
            key={g.src}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="group relative mb-5 break-inside-avoid overflow-hidden border hairline"
          >
            <img
              src={g.src}
              alt={g.caption}
              loading="lazy"
              className={`w-full object-cover ${g.tall ? "aspect-[3/4]" : "aspect-[4/3]"} group-hover:scale-105 transition-transform duration-700 ease-out`}
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="font-display italic text-lg text-[#E6D5B8]">{g.caption}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
