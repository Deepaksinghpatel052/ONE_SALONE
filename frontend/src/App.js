import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Nav from "@/components/salon/Nav";
import Hero from "@/components/salon/Hero";
import Marquee from "@/components/salon/Marquee";
import Manifesto from "@/components/salon/Manifesto";
import Services from "@/components/salon/Services";
import Stylists from "@/components/salon/Stylists";
import Gallery from "@/components/salon/Gallery";
import Reviews from "@/components/salon/Reviews";
import Booking from "@/components/salon/Booking";
import Location from "@/components/salon/Location";
import Footer from "@/components/salon/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    const onAnchor = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) {
        const el = document.querySelector(a.getAttribute("href"));
        if (el) {
          e.preventDefault();
          lenis.scrollTo(el, { offset: -64 });
        }
      }
    };
    document.addEventListener("click", onAnchor);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onAnchor);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="grain bg-[#0A0A0B] text-[#F9F8F6] min-h-screen">
      <Toaster theme="dark" position="bottom-right" />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Services />
        <Stylists />
        <Gallery />
        <Reviews />
        <Booking />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
