import { Reveal, Eyebrow } from "./Reveal";

const CHAPTERS = [
  {
    n: "01",
    title: "The Craft",
    body: "Every cut begins with a conversation. Our artists study bone structure, growth patterns and lifestyle before a single snip — because great hair is engineered, not improvised.",
  },
  {
    n: "02",
    title: "The Sanctuary",
    body: "Warm light, quiet music, unhurried hands. The salon floor is designed as a retreat from Bengaluru's rush — a place where thirty minutes of stillness is part of the service.",
  },
  {
    n: "03",
    title: "The Neighbourhood",
    body: "Rooted in Basavanagudi's old-Bengaluru soul, we serve third-generation regulars and first-time guests with the same devotion. 1,612 reviews. One standard.",
  },
];

export default function Manifesto() {
  return (
    <section data-testid="manifesto-section" className="max-w-7xl mx-auto px-6 lg:px-10 py-28 lg:py-36">
      <Reveal>
        <Eyebrow>The Manifesto</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 max-w-2xl leading-tight">
          Why Bengaluru keeps <span className="italic text-gold">coming back</span>
        </h2>
      </Reveal>
      <div className="mt-16 grid md:grid-cols-3 gap-px bg-white/5 border hairline">
        {CHAPTERS.map((c, i) => (
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
