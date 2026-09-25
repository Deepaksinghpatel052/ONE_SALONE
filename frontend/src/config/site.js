// Site-wide configuration: salon identity, contact details and deployment URLs.
// Edit business details here; deployment-specific values come from frontend/.env
// (see frontend/.env.example).

export const API_URL = `${process.env.REACT_APP_BACKEND_URL || ""}/api`;

export const SALON = {
  name: "#ONE SALON",
  tagline: "Haute Coiffure & Beauty Sanctuary",
  taglineKn: "ಹೌಟ್ ಕಾಫಿಯರ್ & ಬ್ಯೂಟಿ ಸ್ಯಾಂಕ್ಚುರಿ",
  area: "Basavanagudi, Bengaluru",
  areaKn: "ಬಸವನಗುಡಿ, ಬೆಂಗಳೂರು",
  address: "1, 3rd Cross, Model House St, Nagasandra Circle, Basavanagudi, Bengaluru, Karnataka 560004",
  phone: "+91 80 2950 2349",
  phoneHref: "tel:+918029502349",
  rating: "4.8",
  reviewCount: "1,612",
  hours: "Mon — Sun · 8:00 AM — 9:00 PM",
  hoursKn: "ಸೋಮ — ಭಾನು · ಬೆಳಿಗ್ಗೆ 8:00 — ರಾತ್ರಿ 9:00",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=ONE+SALON+Nagasandra+Circle+Basavanagudi+Bengaluru",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=ONE%20SALON%20Nagasandra%20Circle%20Basavanagudi%20Bengaluru&t=&z=16&ie=UTF8&iwloc=&output=embed",
};
