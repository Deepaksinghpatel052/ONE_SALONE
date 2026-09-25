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
├── docker-compose.yml       # Docker: mongo + backend + frontend services
├── .env.example             # Docker settings template: ADMIN_KEY, ports, ...
├── backend/
│   ├── Dockerfile           # Backend image (uvicorn)
│   ├── requirements-docker.txt # Runtime-only deps for the Docker image
│   ├── server.py            # FastAPI app — /api routes, booking model
│   ├── requirements.txt     # Python dependencies
│   └── .env.example         # Template for .env: MONGO_URL, DB_NAME, CORS_ORIGINS, ADMIN_KEY
├── frontend/
│   ├── public/index.html    # Page shell (title, meta)
│   ├── src/
│   │   ├── App.js           # Lenis setup + section composition + LangProvider
│   │   ├── index.css        # Fonts, design tokens, grain, marquee, inputs
│   │   ├── config/
│   │   │   └── site.js      # Salon name, address, phone, hours, map links, API URL
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
│   ├── .env.example         # Template for .env: REACT_APP_BACKEND_URL, ...
│   ├── Dockerfile           # Build with Node, serve with nginx
│   ├── nginx.conf.template  # nginx: static site + /api proxy
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

**Owner bookings link:** `https://<your-domain>/api/bookings?key=<ADMIN_KEY>`
(Change `ADMIN_KEY` in `backend/.env` to rotate.)

## Environment Variables

`.env` files are git-ignored. Copy each `.env.example` to `.env` and fill in real values:

```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

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

## Running Locally (without Docker)

```bash
# Backend (port 8001)
cd backend && pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload

# Frontend (port 3000)
cd frontend && yarn install && yarn start
```

## Running with Docker

Runs MongoDB, the FastAPI backend and the built frontend (served by nginx) together. Requires [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine + Compose v2) to be running.

### 1. Create your `.env`

```bash
cp .env.example .env
```

Open `.env` and set a strong `ADMIN_KEY` (required — Compose refuses to start without it). To generate one:

```bash
python -c "import secrets; print(secrets.token_urlsafe(24))"
```

### 2. Start

```bash
docker compose up -d --build
```

| What | URL (default ports) |
|---|---|
| Website | http://localhost:8080 |
| API (through nginx) | http://localhost:8080/api/ |
| API (direct to backend) | http://localhost:8001/api/ |
| Owner bookings | `http://localhost:8080/api/bookings?key=<ADMIN_KEY>` |
| MongoDB (Compass etc.) | `mongodb://localhost:27017` |

The backend takes a few seconds to start after the containers are up — a `502 Bad Gateway` on `/api` right after startup goes away on refresh.

### 3. Change ports

All ports are set in `.env`:

```env
WEB_PORT=8080       # Website          -> http://localhost:8080
BACKEND_PORT=8001   # Backend API      -> http://localhost:8001/api/
MONGO_PORT=27017    # MongoDB          -> localhost:27017
```

After editing, apply the change with:

```bash
docker compose up -d --build
```

- `BACKEND_PORT` and `MONGO_PORT` are bound to `127.0.0.1` only — reachable from this machine, not from the network.
- If you change `WEB_PORT`, update `CORS_ORIGINS` to match (e.g. `CORS_ORIGINS=http://localhost:9090`).
- If a port is already in use, `docker compose up` fails with "port is already allocated" — pick a different number.

### Everyday commands

| Task | Command |
|---|---|
| Start / apply `.env` changes | `docker compose up -d --build` |
| See status | `docker compose ps` |
| Follow logs | `docker compose logs -f` (or `docker compose logs -f backend`) |
| Stop (keeps bookings) | `docker compose down` |
| Stop and delete the database | `docker compose down -v` |

Bookings are stored in the `mongo-data` Docker volume, so they survive restarts and rebuilds.

### Docker files

| File | Purpose |
|---|---|
| `docker-compose.yml` | Defines `mongo`, `backend`, `frontend` services |
| `.env.example` | Compose settings: `ADMIN_KEY`, `DB_NAME`, `WEB_PORT`, `BACKEND_PORT`, `MONGO_PORT`, `CORS_ORIGINS`, `REACT_APP_BACKEND_URL` |
| `backend/Dockerfile` | Python 3.11 image running uvicorn on `$PORT` (from `BACKEND_PORT`) |
| `backend/requirements-docker.txt` | Runtime-only Python dependencies (the full `requirements.txt` includes Emergent-only packages not on PyPI) |
| `frontend/Dockerfile` | Node 20 build stage → nginx runtime stage |
| `frontend/nginx.conf.template` | Static hosting, SPA fallback, `/api` proxy to `backend:${BACKEND_PORT}` |

## Editing Content

- **Salon name, address, phone, hours, map links:** `frontend/src/config/site.js`
- **Services, prices, gallery, reviews, amenities:** `frontend/src/lib/salonData.js` (each entry has `nameKn`/`descKn` Kannada fields)
- **UI text (both languages):** `frontend/src/lib/i18n.jsx` → `STR.en` / `STR.kn`
- **Colors, fonts, buttons:** `frontend/src/index.css` (`:root` tokens)

## Notes

- Gallery photos: the `#ONE wall` image is the salon's real photo from its Google Maps listing. Remaining gallery/stylist images are curated stock — replace URLs in `salonData.js` with real salon photos when available.
- Booking requests are stored only (no SMS/WhatsApp alerts configured — can be added via Meta WhatsApp Cloud API or Twilio).
