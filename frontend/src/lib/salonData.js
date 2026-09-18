export const SALON = {
  name: "#ONE SALON",
  tagline: "Haute Coiffure & Beauty Sanctuary",
  area: "Basavanagudi, Bengaluru",
  address: "1, 3rd Cross, Model House St, Nagasandra Circle, Basavanagudi, Bengaluru, Karnataka 560004",
  phone: "+91 80 2950 2349",
  phoneHref: "tel:+918029502349",
  rating: "4.8",
  reviewCount: "1,612",
  hours: "Mon — Sun · 8:00 AM — 9:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=ONE+SALON+Nagasandra+Circle+Basavanagudi+Bengaluru",
};

export const SERVICES = [
  { id: 1, name: "Signature Hair Cut & Styling", cat: "Hair", price: "₹399", duration: "45 min", stylist: "Asif", desc: "Consultation, precision scissor work, wash & finish styling." },
  { id: 2, name: "Architectural Precision Cut", cat: "Hair", price: "₹599", duration: "60 min", stylist: "Asif", desc: "Structured, face-mapped cutting with razor detailing." },
  { id: 3, name: "Master Balayage", cat: "Colour", price: "₹1,999+", duration: "150 min", stylist: "Raju", desc: "Hand-painted dimension, tonal gloss & bond protection." },
  { id: 4, name: "Global Hair Colour", cat: "Colour", price: "₹1,499+", duration: "120 min", stylist: "Raju", desc: "Full-head couture colour matched to your skin story." },
  { id: 5, name: "Regenerative Hair Spa", cat: "Spa", price: "₹899", duration: "60 min", stylist: null, desc: "Deep-repair masque, steam therapy & scalp renewal." },
  { id: 6, name: "Royal Head Massage", cat: "Spa", price: "₹349", duration: "30 min", stylist: null, desc: "Warm-oil ritual melting tension from crown to shoulder." },
  { id: 7, name: "Luxury Hot-Towel Shave", cat: "Grooming", price: "₹199", duration: "30 min", stylist: null, desc: "Classic straight-razor ceremony with hot towel finish." },
  { id: 8, name: "Beard Sculpt & Detail", cat: "Grooming", price: "₹249", duration: "25 min", stylist: "Asif", desc: "Line-up, contour shaping & conditioning beard ritual." },
  { id: 9, name: "Classic Facial Ritual", cat: "Spa", price: "₹799", duration: "50 min", stylist: null, desc: "Cleanse, exfoliate, massage & glow masque for radiant skin." },
];

export const SERVICE_CATEGORIES = ["All", "Hair", "Colour", "Spa", "Grooming"];

export const STYLISTS = [
  {
    id: "raju",
    name: "Raju",
    role: "Master Colour Stylist",
    specialty: "Signature Balayage & Colour Chemistry",
    note: "Reads skin tone like a palette — guests leave with colour that looks grown, not applied.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "asif",
    name: "Asif",
    role: "Senior Hair Sculptor",
    specialty: "Architectural Precision Cuts",
    note: "Reviewers call his cuts the finest in Basavanagudi — sharp lines at honest prices.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop", caption: "The Precision Cut", tall: true },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop", caption: "Colour in Motion" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop", caption: "The Sanctuary Floor", tall: true },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop", caption: "The Wash Ritual" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop", caption: "Finishing Artistry", tall: true },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop", caption: "Tools of the Craft" },
];

export const REVIEWS = [
  {
    name: "Varsha Yadav",
    meta: "8 reviews on Google",
    stars: 5,
    text: "I had my hair coloured at One Salon & Spa by Raju, and I had a wonderful experience. The atmosphere was relaxing, clean, and welcoming. Raju suggested a hair colour that perfectly suited me, and I absolutely loved the final result.",
  },
  {
    name: "Verified Guest",
    meta: "Google Review",
    stars: 5,
    text: "Good experience, prices are reasonable, amazing service lastly kind staff.",
  },
  {
    name: "Verified Guest",
    meta: "Google Review",
    stars: 5,
    text: "Excellent hair cut with minimal price, specially by Asif.",
  },
  {
    name: "Verified Guest",
    meta: "Google Review",
    stars: 5,
    text: "I would suggest people to come & experience yourself a best quality services.",
  },
];

export const RATING_BARS = [
  { star: 5, pct: 89 },
  { star: 4, pct: 7 },
  { star: 3, pct: 2 },
  { star: 2, pct: 1 },
  { star: 1, pct: 1 },
];

export const TIME_SLOTS = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
  "06:00 PM", "07:00 PM", "08:00 PM",
];
