# #ONE SALON — Luxury Web App

A cinematic, bilingual (English / ಕನ್ನಡ) single-page web experience for **#ONE SALON**, Basavanagudi, Bengaluru — with online appointment booking.

- **Rating showcased:** 4.8 ★ · 1,612 Google reviews
- **Address:** 1, 3rd Cross, Model House St, Nagasandra Circle, Basavanagudi, Bengaluru, Karnataka 560004
- **Phone:** +91 80 2950 2349 · **Hours:** Mon–Sun, 8:00 AM – 9:00 PM

---

## Features

| Area | Details |
|---|---|
| Kinetic hero | Masked line-by-line headline reveal, parallax + zoom on scroll |
| Editorial marquee | Slow-drifting gold ribbon of signature services |
| Manifesto | Numbered chapters (01 / 02 / 03) |
| Services | 9 services, category filters, INR pricing, durations, stylist tags |
| Artists | Spotlight cards for Raju (colour) & Asif (cuts) |
| Gallery | Editorial masonry grid — includes the salon's real #ONE wall photo pulled from Google Maps |
| Reviews | Real Google review quotes + rating breakdown bars |
| Booking | Appointment request form → MongoDB → confirmation modal with reference ID + toast |
| Visit | Address, hours, amenities (GPay, cards, kid-friendly…), embedded Google Map |
| i18n | One-tap English ↔ Kannada toggle, persisted in localStorage |
| Motion | Lenis smooth scrolling, framer-motion reveals & micro-interactions |

## Tech Stack

- **Frontend:** React 19 (CRACO), Tailwind CSS, framer-motion, lenis, lucide-react, sonner, axios
- **Backend:** FastAPI, motor (async MongoDB), pydantic v2
- **Database:** MongoDB (`bookings` collection)

## Project Structure

```
/app
├── backend/
│   ├── server.py            # FastAPI app — /api routes, booking model
│   ├── requirements.txt     # Python dependencies
│   └── .env                 # MONGO_URL, DB_NAME, CORS_ORIGINS, ADMIN_KEY
├── frontend/
│   ├── public/index.html    # Page shell (title, meta)
│   ├── src/
│   │   ├── App.js           # Lenis setup + section composition + LangProvider
│   │   ├── index.css        # Fonts, design tokens, grain, marquee, inputs
│   │   ├── lib/
│   │   │   ├── salonData.js # ALL content: services, stylists, gallery, reviews, amenities
│   │   │   └── i18n.jsx     # Language context + EN/KN string dictionary
│   │   └── components/salon/
│   │       ├── Nav.jsx      # Floating nav + language toggle
│   │       ├── Hero.jsx     # Kinetic parallax hero
│   │       ├── Marquee.jsx  # Editorial marquee strip
│   │       ├── Manifesto.jsx
│   │       ├── Services.jsx # Filterable service grid
│   │       ├── Stylists.jsx
│   │       ├── Gallery.jsx
│   │       ├── Reviews.jsx
│   │       ├── Booking.jsx  # Form + summary + confirmation modal
│   │       ├── Location.jsx # Address, hours, amenities, map
│   │       └── Footer.jsx
│   └── package.json
├── memory/
│   ├── PRD.md               # Product requirements & backlog
│   └── test_credentials.md  # Owner key reference
└── design_guidelines.json   # Design system blueprint
```

## API

Base URL: `{REACT_APP_BACKEND_URL}/api`

| Method | Route | Auth | Description |
|---|---|---|---|
| GET | `/` | — | Health check |
| GET | `/services` | — | Service + stylist lists |
| POST | `/bookings` | — | Create booking. Body: `name, phone, service, stylist, date, time, notes` |
| GET | `/bookings?key=…` | Owner key | List all bookings (newest first) |

**Owner bookings link:** `https://<your-domain>/api/bookings?key=onesalon-owner-2026`
(Change `ADMIN_KEY` in `backend/.env` to rotate.)

## Environment Variables

`backend/.env`
```
MONGO_URL=...        # MongoDB connection
DB_NAME=...          # database name
CORS_ORIGINS=*       # allowed origins
ADMIN_KEY=...        # protects GET /api/bookings
```

`frontend/.env`
```
REACT_APP_BACKEND_URL=https://<your-domain>
```

## Running Locally

```bash
# Backend (port 8001)
cd backend && pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Frontend (port 3000)
cd frontend && yarn install && yarn start
```

## Editing Content

- **Services, prices, gallery, reviews, amenities:** `frontend/src/lib/salonData.js` (each entry has `nameKn`/`descKn` Kannada fields)
- **UI text (both languages):** `frontend/src/lib/i18n.jsx` → `STR.en` / `STR.kn`
- **Colors, fonts, buttons:** `frontend/src/index.css` (`:root` tokens)

## Notes

- Gallery photos: the `#ONE wall` image is the salon's real photo from its Google Maps listing. Remaining gallery/stylist images are curated stock — replace URLs in `salonData.js` with real salon photos when available.
- Booking requests are stored only (no SMS/WhatsApp alerts configured — can be added via Meta WhatsApp Cloud API or Twilio).
