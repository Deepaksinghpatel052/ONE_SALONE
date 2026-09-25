// Salon identity & contact details live in src/config/site.js
export { SALON } from "@/config/site";

export const SERVICES = [
  { id: 1, name: "Signature Hair Cut & Styling", nameKn: "ಸಿಗ್ನೇಚರ್ ಹೇರ್ ಕಟ್ & ಸ್ಟೈಲಿಂಗ್", cat: "Hair", price: "₹399", duration: "45 min", durationKn: "45 ನಿಮಿಷ", stylist: "Asif", desc: "Consultation, precision scissor work, wash & finish styling.", descKn: "ಸಮಾಲೋಚನೆ, ನಿಖರ ಕತ್ತರಿಸುವಿಕೆ, ಹೇರ್ ವಾಷ್ & ಸ್ಟೈಲಿಂಗ್." },
  { id: 2, name: "Architectural Precision Cut", nameKn: "ಆರ್ಕಿಟೆಕ್ಚರಲ್ ಪ್ರಿಸಿಷನ್ ಕಟ್", cat: "Hair", price: "₹599", duration: "60 min", durationKn: "60 ನಿಮಿಷ", stylist: "Asif", desc: "Structured, face-mapped cutting with razor detailing.", descKn: "ಮುಖದ ಆಕಾರಕ್ಕೆ ತಕ್ಕ ರೇಜರ್ ಡೀಟೇಲಿಂಗ್ ಕಟ್." },
  { id: 3, name: "Master Balayage", nameKn: "ಮಾಸ್ಟರ್ ಬ್ಯಾಲೇಜ್", cat: "Colour", price: "₹1,999+", duration: "150 min", durationKn: "150 ನಿಮಿಷ", stylist: "Raju", desc: "Hand-painted dimension, tonal gloss & bond protection.", descKn: "ಕೈಯಿಂದ ಬಣ್ಣ, ಟೋನಲ್ ಗ್ಲಾಸ್ & ಹೇರ್ ಪ್ರೊಟೆಕ್ಷನ್." },
  { id: 4, name: "Global Hair Colour", nameKn: "ಗ್ಲೋಬಲ್ ಹೇರ್ ಕಲರ್", cat: "Colour", price: "₹1,499+", duration: "120 min", durationKn: "120 ನಿಮಿಷ", stylist: "Raju", desc: "Full-head couture colour matched to your skin story.", descKn: "ನಿಮ್ಮ ಸ್ಕಿನ್ ಟೋನ್‌ಗೆ ಹೊಂದುವ ಸಂಪೂರ್ಣ ಬಣ್ಣ." },
  { id: 5, name: "Regenerative Hair Spa", nameKn: "ರಿಜನರೇಟಿವ್ ಹೇರ್ ಸ್ಪಾ", cat: "Spa", price: "₹899", duration: "60 min", durationKn: "60 ನಿಮಿಷ", stylist: null, desc: "Deep-repair masque, steam therapy & scalp renewal.", descKn: "ಡೀಪ್ ರಿಪೇರ್ ಮಾಸ್ಕ್, ಸ್ಟೀಮ್ ಥೆರಪಿ & ಸ್ಕಾಲ್ಪ್ ಕೇರ್." },
  { id: 6, name: "Royal Head Massage", nameKn: "ರಾಯಲ್ ಹೆಡ್ ಮಸಾಜ್", cat: "Spa", price: "₹349", duration: "30 min", durationKn: "30 ನಿಮಿಷ", stylist: null, desc: "Warm-oil ritual melting tension from crown to shoulder.", descKn: "ಬಿಸಿ ಎಣ್ಣೆಯ ವಿಶ್ರಾಂತಿ ಮಸಾಜ್ — ತಲೆಯಿಂದ ಹೆಗಲಿನವರೆಗೆ." },
  { id: 7, name: "Luxury Hot-Towel Shave", nameKn: "ಲಕ್ಷುರಿ ಹಾಟ್-ಟವೆಲ್ ಶೇವ್", cat: "Grooming", price: "₹199", duration: "30 min", durationKn: "30 ನಿಮಿಷ", stylist: null, desc: "Classic straight-razor ceremony with hot towel finish.", descKn: "ಬಿಸಿ ಟವೆಲ್‌ನೊಂದಿಗೆ ಕ್ಲಾಸಿಕ್ ಸ್ಟ್ರೈಟ್-ರೇಜರ್ ಶೇವ್." },
  { id: 8, name: "Beard Sculpt & Detail", nameKn: "ಬಿಯರ್ಡ್ ಸ್ಕಲ್ಪ್ಟ್ & ಡೀಟೇಲ್", cat: "Grooming", price: "₹249", duration: "25 min", durationKn: "25 ನಿಮಿಷ", stylist: "Asif", desc: "Line-up, contour shaping & conditioning beard ritual.", descKn: "ಲೈನ್-ಅಪ್, ಶೇಪಿಂಗ್ & ಕಂಡೀಷನಿಂಗ್ ಬಿಯರ್ಡ್ ಕೇರ್." },
  { id: 9, name: "Classic Facial Ritual", nameKn: "ಕ್ಲಾಸಿಕ್ ಫೇಷಿಯಲ್", cat: "Spa", price: "₹799", duration: "50 min", durationKn: "50 ನಿಮಿಷ", stylist: null, desc: "Cleanse, exfoliate, massage & glow masque for radiant skin.", descKn: "ಕ್ಲೀನ್ಸ್, ಸ್ಕ್ರಬ್, ಮಸಾಜ್ & ಗ್ಲೋ ಮಾಸ್ಕ್." },
];

export const SERVICE_CATEGORIES = [
  { id: "All", en: "All", kn: "ಎಲ್ಲಾ" },
  { id: "Hair", en: "Hair", kn: "ಕೂದಲು" },
  { id: "Colour", en: "Colour", kn: "ಬಣ್ಣ" },
  { id: "Spa", en: "Spa", kn: "ಸ್ಪಾ" },
  { id: "Grooming", en: "Grooming", kn: "ಗ್ರೂಮಿಂಗ್" },
];

export const STYLISTS = [
  {
    id: "raju",
    name: "Raju",
    role: "Master Colour Stylist",
    roleKn: "ಮಾಸ್ಟರ್ ಕಲರ್ ಸ್ಟೈಲಿಸ್ಟ್",
    specialty: "Signature Balayage & Colour Chemistry",
    specialtyKn: "ಸಿಗ್ನೇಚರ್ ಬ್ಯಾಲೇಜ್ & ಕಲರ್ ಕೆಮಿಸ್ಟ್ರಿ",
    note: "Reads skin tone like a palette — guests leave with colour that looks grown, not applied.",
    noteKn: "ಚರ್ಮದ ಬಣ್ಣವನ್ನು ಪ್ಯಾಲೆಟ್‌ನಂತೆ ಓದುತ್ತಾರೆ — ಬಣ್ಣ ನೈಸರ್ಗಿಕವಾಗಿ ಕಂಡುಬರುತ್ತದೆ.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "asif",
    name: "Asif",
    role: "Senior Hair Sculptor",
    roleKn: "ಸೀನಿಯರ್ ಹೇರ್ ಸ್ಕಲ್ಪ್ಟರ್",
    specialty: "Architectural Precision Cuts",
    specialtyKn: "ಆರ್ಕಿಟೆಕ್ಚರಲ್ ಪ್ರಿಸಿಷನ್ ಕಟ್‌ಗಳು",
    note: "Reviewers call his cuts the finest in Basavanagudi — sharp lines at honest prices.",
    noteKn: "ಬಸವನಗುಡಿಯ ಅತ್ಯುತ್ತಮ ಕಟ್‌ಗಳು — ಸೂಕ್ತ ಬೆಲೆಯಲ್ಲಿ ನಿಖರ ಲೈನ್‌ಗಳು.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
  },
];

export const GALLERY = [
  { src: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnWv971N54E-gd4vlcegTyLEI07caYDDTrKL7k0fzxdWkTs84YLEmI1_VkmuRukK_BaeN_as9uw_cNVJJ7az9nVKDYYhWNB5VTL5h6420z24MyNpRYHpzuWcKUIjAuj747sCYdceA=w1200-h900-k-no", caption: "The #ONE Wall", captionKn: "ದಿ #ONE ಗೋಡೆ" },
  { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1200&auto=format&fit=crop", caption: "The Precision Cut", captionKn: "ನಿಖರ ಕಟ್", tall: true },
  { src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop", caption: "Colour in Motion", captionKn: "ಬಣ್ಣದ ಚಲನೆ" },
  { src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop", caption: "The Sanctuary Floor", captionKn: "ಸಲೂನ್ ಹಂತ", tall: true },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=1200&auto=format&fit=crop", caption: "The Wash Ritual", captionKn: "ಹೇರ್ ವಾಷ್ ಆಚರಣೆ" },
  { src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop", caption: "Finishing Artistry", captionKn: "ಫಿನಿಶಿಂಗ್ ಕಲೆ", tall: true },
  { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop", caption: "Tools of the Craft", captionKn: "ಕಲೆಯ ಪರಿಕರಗಳು" },
];

export const REVIEWS = [
  {
    name: "Varsha Yadav",
    meta: "8 reviews on Google",
    metaKn: "ಗೂಗಲ್‌ನಲ್ಲಿ 8 ವಿಮರ್ಶೆಗಳು",
    stars: 5,
    text: "I had my hair coloured at One Salon & Spa by Raju, and I had a wonderful experience. The atmosphere was relaxing, clean, and welcoming. Raju suggested a hair colour that perfectly suited me, and I absolutely loved the final result.",
    textKn: "ಒನ್ ಸಲೂನ್ & ಸ್ಪಾದಲ್ಲಿ ರಾಜು ಅವರಿಂದ ಹೇರ್ ಕಲರ್ ಮಾಡಿಸಿದೆ — ಅದ್ಭುತ ಅನುಭವ. ವಾತಾವರಣ ಶಾಂತ, ಸ್ವಚ್ಛ ಮತ್ತು ಸ್ವಾಗತಾರ್ಹ. ರಾಜು ನನಗೆ ಸರಿಹೊಂದುವ ಬಣ್ಣ ಸಲಹೆ ಮಾಡಿದರು, ಫಲಿತಾಂಶ ನನಗೆ ತುಂಬಾ ಇಷ್ಟವಾಯಿತು.",
  },
  {
    name: "Verified Guest",
    nameKn: "ಪರಿಶೀಲಿತ ಅತಿಥಿ",
    meta: "Google Review",
    metaKn: "ಗೂಗಲ್ ವಿಮರ್ಶೆ",
    stars: 5,
    text: "Good experience, prices are reasonable, amazing service lastly kind staff.",
    textKn: "ಒಳ್ಳೆಯ ಅನುಭವ, ಬೆಲೆ ಸೂಕ್ತ, ಅದ್ಭುತ ಸೇವೆ ಮತ್ತು ದಯಾಳು ಸಿಬ್ಬಂದಿ.",
  },
  {
    name: "Verified Guest",
    nameKn: "ಪರಿಶೀಲಿತ ಅತಿಥಿ",
    meta: "Google Review",
    metaKn: "ಗೂಗಲ್ ವಿಮರ್ಶೆ",
    stars: 5,
    text: "Excellent hair cut with minimal price, specially by Asif.",
    textKn: "ಕಡಿಮೆ ಬೆಲೆಯಲ್ಲಿ ಅದ್ಭುತ ಹೇರ್ ಕಟ್ — ವಿಶೇಷವಾಗಿ ಆಸಿಫ್ ಅವರಿಂದ.",
  },
  {
    name: "Verified Guest",
    nameKn: "ಪರಿಶೀಲಿತ ಅತಿಥಿ",
    meta: "Google Review",
    metaKn: "ಗೂಗಲ್ ವಿಮರ್ಶೆ",
    stars: 5,
    text: "I would suggest people to come & experience yourself a best quality services.",
    textKn: "ಎಲ್ಲರೂ ಬಂದು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಸೇವೆಯನ್ನು ತಾವೇ ಅನುಭವಿಸಿ ಎಂದು ಸಲಹೆ ಮಾಡುತ್ತೇನೆ.",
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

export const AMENITIES = [
  { en: "On-site Services", kn: "ಸ್ಥಳದಲ್ಲೇ ಸೇವೆಗಳು" },
  { en: "Restroom", kn: "ಶೌಚಾಲಯ ಸೌಲಭ್ಯ" },
  { en: "Appointments Recommended", kn: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಶಿಫಾರಸು" },
  { en: "Credit & Debit Cards", kn: "ಕ್ರೆಡಿಟ್ & ಡೆಬಿಟ್ ಕಾರ್ಡ್" },
  { en: "Google Pay", kn: "ಗೂಗಲ್ ಪೇ" },
  { en: "NFC Mobile Payments", kn: "NFC ಮೊಬೈಲ್ ಪಾವತಿ" },
  { en: "Good for Kids", kn: "ಮಕ್ಕಳಿಗೆ ಸೂಕ್ತ" },
];
