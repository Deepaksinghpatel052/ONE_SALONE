import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({ lang: "en", setLang: () => {} });

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      return localStorage.getItem("onesalon-lang") || "en";
    } catch {
      return "en";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem("onesalon-lang", lang);
    } catch {}
  }, [lang]);
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);

export const STR = {
  en: {
    nav: { services: "Services", artists: "Artists", gallery: "Gallery", reviews: "Reviews", visit: "Visit", book: "Book Now" },
    hero: {
      pillReviews: "Google Reviews",
      line1: "The Art of",
      line2: "Haute Coiffure",
      sub: "Basavanagudi's most-reviewed beauty sanctuary. Precision cuts, couture colour and slow spa rituals — crafted one guest at a time since day one.",
      book: "Reserve Your Chair",
      explore: "Explore Services",
      scroll: "Scroll",
    },
    marquee: ["Signature Cuts", "Master Colour", "Head Spa Rituals", "Hot-Towel Shaves", "Bridal Artistry", "Beard Sculpture"],
    manifesto: {
      eyebrow: "The Manifesto",
      titleA: "Why Bengaluru keeps",
      titleB: "coming back",
      chapters: [
        { n: "01", title: "The Craft", body: "Every cut begins with a conversation. Our artists study bone structure, growth patterns and lifestyle before a single snip — because great hair is engineered, not improvised." },
        { n: "02", title: "The Sanctuary", body: "Warm light, quiet music, unhurried hands. The salon floor is designed as a retreat from Bengaluru's rush — a place where thirty minutes of stillness is part of the service." },
        { n: "03", title: "The Neighbourhood", body: "Rooted in Basavanagudi's old-Bengaluru soul, we serve third-generation regulars and first-time guests with the same devotion. 1,612 reviews. One standard." },
      ],
    },
    services: { eyebrow: "The Menu", titleA: "Services,", titleB: "curated" },
    stylists: { eyebrow: "The Artists", titleA: "Hands the city", titleB: "trusts", bookWith: "Book with" },
    gallery: { eyebrow: "The Gallery", titleA: "Moments from", titleB: "the floor" },
    reviews: { eyebrow: "Verified on Google", reviews: "reviews", source: "Ratings sourced from Google Maps" },
    booking: {
      eyebrow: "Reserve",
      titleA: "Your chair",
      titleB: "awaits",
      name: "Full Name",
      phone: "Phone",
      service: "Service",
      artist: "Preferred Artist",
      date: "Date",
      time: "Time",
      notes: "Special Notes",
      namePh: "Aarav Sharma",
      phonePh: "98XXX XXXXX",
      notesPh: "Reference photo, occasion, allergies…",
      submit: "Request Appointment",
      busy: "Reserving…",
      summary: "Your Selection",
      artistL: "Artist",
      dateL: "Date",
      timeL: "Time",
      durationL: "Duration",
      priceL: "Price",
      confirmNote: "Requests are confirmed by phone within 30 minutes during salon hours.",
      call: "Call Instead",
      toastOk: "Appointment request received",
      toastErr: "Could not place the request. Please call us.",
      modalTitle: "Request Received",
      modalBody: (r) => `${r.name}, your ${r.service} with ${r.stylist} on ${r.date} at ${r.time} is being held. We'll call ${r.phone} to confirm.`,
      reference: "Reference",
      done: "Done",
      anyArtist: "Any Artist",
    },
    visit: {
      eyebrow: "Visit Us",
      titleA: "In the heart of",
      titleB: "Basavanagudi",
      address: "Address",
      hours: "Hours",
      phone: "Phone",
      call: "Call the Salon",
      directions: "Get Directions",
    },
    footer: { explore: "Explore", hours: "Hours", backTop: "Back to top" },
  },
  kn: {
    nav: { services: "ಸೇವೆಗಳು", artists: "ಕಲಾವಿದರು", gallery: "ಗ್ಯಾಲರಿ", reviews: "ವಿಮರ್ಶೆಗಳು", visit: "ಭೇಟಿ", book: "ಬುಕ್ ಮಾಡಿ" },
    hero: {
      pillReviews: "ಗೂಗಲ್ ವಿಮರ್ಶೆಗಳು",
      line1: "ಕೇಶ ಸೌಂದರ್ಯದ",
      line2: "ಶ್ರೇಷ್ಠ ಕಲೆ",
      sub: "ಬಸವನಗುಡಿಯ ಅತ್ಯಂತ ಪ್ರಸಿದ್ಧ ಬ್ಯೂಟಿ ಸ್ಯಾಂಕ್ಚುರಿ. ನಿಖರ ಕಟ್‌ಗಳು, ಉನ್ನತ ಬಣ್ಣ ಮತ್ತು ವಿಶ್ರಾಂತಿ ಸ್ಪಾ — ಪ್ರತಿ ಅತಿಥಿಗೂ ವಿಶೇಷ ಆರೈಕೆ.",
      book: "ನಿಮ್ಮ ಸೀಟು ಕಾಯ್ದಿರಿಸಿ",
      explore: "ಸೇವೆಗಳನ್ನು ನೋಡಿ",
      scroll: "ಕೆಳಗೆ",
    },
    marquee: ["ಸಿಗ್ನೇಚರ್ ಕಟ್‌ಗಳು", "ಮಾಸ್ಟರ್ ಕಲರ್", "ಹೆಡ್ ಸ್ಪಾ ಆಚರಣೆ", "ಹಾಟ್-ಟವೆಲ್ ಶೇವ್", "ಬ್ರೈಡಲ್ ಆರ್ಟಿಸ್ಟ್ರಿ", "ಬಿಯರ್ಡ್ ಸ್ಕಲ್ಪ್ಚರ್"],
    manifesto: {
      eyebrow: "ನಮ್ಮ ತತ್ವ",
      titleA: "ಬೆಂಗಳೂರು ಏಕೆ",
      titleB: "ಮರಳಿ ಬರುತ್ತದೆ",
      chapters: [
        { n: "01", title: "ಕೈಚಳಕ", body: "ಪ್ರತಿ ಕಟ್ ಸಂಭಾಷಣೆಯಿಂದ ಶುರುವಾಗುತ್ತದೆ. ಒಂದು ಕತ್ತರಿ ಮುಟ್ಟುವ ಮೊದಲು ನಮ್ಮ ಕಲಾವಿದರು ಮೂಳೆ ರಚನೆ, ಕೂದಲಿನ ಬೆಳವಣಿಗೆ ಮತ್ತು ಜೀವನಶೈಲಿಯನ್ನು ಅಧ್ಯಯನ ಮಾಡುತ್ತಾರೆ." },
        { n: "02", title: "ಆಶ್ರಯ", body: "ಬೆಳಕು, ಶಾಂತ ಸಂಗೀತ, ಧೀಮೆಯಾದ ಕೈಗಳು. ಬೆಂಗಳೂರಿನ ಓಟದಿಂದ ದೂರದ ವಿಶ್ರಾಂತಿ ಸ್ಥಳ — ಮೂವತ್ತು ನಿಮಿಷಗಳ ನಿಶ್ಶಬ್ದವೂ ಸೇವೆಯ ಭಾಗ." },
        { n: "03", title: "ನಮ್ಮ ಬೀದಿ", body: "ಹಳೇ ಬೆಂಗಳೂರಿನ ಆತ್ಮದಲ್ಲಿ ಬೇರೂರಿದ್ದೇವೆ. ಮೂರು ತಲೆಮಾರಿನ ಗ್ರಾಹಕರು ಮತ್ತು ಹೊಸ ಅತಿಥಿಗಳು — ಎಲ್ಲರಿಗೂ ಒಂದೇ ನಿಷ್ಠೆ. 1,612 ವಿಮರ್ಶೆಗಳು. ಒಂದೇ ಗುಣಮಟ್ಟ." },
      ],
    },
    services: { eyebrow: "ಸೇವಾ ಪಟ್ಟಿ", titleA: "ಆಯ್ದ", titleB: "ಸೇವೆಗಳು" },
    stylists: { eyebrow: "ನಮ್ಮ ಕಲಾವಿದರು", titleA: "ನಗರದ ನಂಬಿಕೆಯ", titleB: "ಕೈಗಳು", bookWith: "ಇವರೊಂದಿಗೆ ಬುಕ್ ಮಾಡಿ" },
    gallery: { eyebrow: "ಗ್ಯಾಲರಿ", titleA: "ಸಲೂನಿನ", titleB: "ಕ್ಷಣಗಳು" },
    reviews: { eyebrow: "ಗೂಗಲ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿತ", reviews: "ವಿಮರ್ಶೆಗಳು", source: "ರೇಟಿಂಗ್‌ಗಳು ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಿಂದ" },
    booking: {
      eyebrow: "ಕಾಯ್ದಿರಿಸಿ",
      titleA: "ನಿಮ್ಮ ಸೀಟು",
      titleB: "ಸಿದ್ಧವಿದೆ",
      name: "ಪೂರ್ಣ ಹೆಸರು",
      phone: "ಫೋನ್",
      service: "ಸೇವೆ",
      artist: "ಆಯ್ದ ಕಲಾವಿದ",
      date: "ದಿನಾಂಕ",
      time: "ಸಮಯ",
      notes: "ವಿಶೇಷ ಟಿಪ್ಪಣಿ",
      namePh: "ನಿಮ್ಮ ಹೆಸರು",
      phonePh: "98XXX XXXXX",
      notesPh: "ರೆಫರೆನ್ಸ್ ಫೋಟೋ, ಸಂದರ್ಭ, ಅಲರ್ಜಿ…",
      submit: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಕೇಳಿ",
      busy: "ಕಾಯ್ದಿರಿಸಲಾಗುತ್ತಿದೆ…",
      summary: "ನಿಮ್ಮ ಆಯ್ಕೆ",
      artistL: "ಕಲಾವಿದ",
      dateL: "ದಿನಾಂಕ",
      timeL: "ಸಮಯ",
      durationL: "ಅವಧಿ",
      priceL: "ಬೆಲೆ",
      confirmNote: "ಸಲೂನ್ ಸಮಯದಲ್ಲಿ 30 ನಿಮಿಷಗಳೊಳಗೆ ಫೋನ್ ಮೂಲಕ ಖಚಿತಪಡಿಸಲಾಗುತ್ತದೆ.",
      call: "ಬದಲಿಗೆ ಕರೆ ಮಾಡಿ",
      toastOk: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ವಿನಂತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
      toastErr: "ವಿನಂತಿ ಸಲ್ಲಿಸಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಕರೆ ಮಾಡಿ.",
      modalTitle: "ವಿನಂತಿ ಸ್ವೀಕರಿಸಲಾಗಿದೆ",
      modalBody: (r) => `${r.name}, ${r.date} ರಂದು ${r.time} ಕ್ಕೆ ${r.stylist} ಜೊತೆ ನಿಮ್ಮ ${r.service} ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. ಖಚಿತಪಡಿಸಲು ನಾವು ${r.phone} ಗೆ ಕರೆ ಮಾಡುತ್ತೇವೆ.`,
      reference: "ಉಲ್ಲೇಖ",
      done: "ಮುಗಿಯಿತು",
      anyArtist: "ಯಾರಾದರೂ ಕಲಾವಿದರು",
    },
    visit: {
      eyebrow: "ನಮ್ಮನ್ನು ಭೇಟಿ ಮಾಡಿ",
      titleA: "ಹೃದಯದಲ್ಲಿ —",
      titleB: "ಬಸವನಗುಡಿ",
      address: "ವಿಳಾಸ",
      hours: "ಸಮಯ",
      phone: "ಫೋನ್",
      call: "ಸಲೂನ್‌ಗೆ ಕರೆ ಮಾಡಿ",
      directions: "ದಾರಿ ಪಡೆಯಿರಿ",
    },
    footer: { explore: "ಅನ್ವೇಷಿಸಿ", hours: "ಸಮಯ", backTop: "ಮೇಲಕ್ಕೆ" },
  },
};
