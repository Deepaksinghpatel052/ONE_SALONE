# #ONE SALON — Luxury Web App PRD

## Original Problem Statement
Create a luxury web app for #ONE SALON, a beauty parlour in Basavanagudi, Bengaluru (4.8★, 1,612 Google reviews, +91 80 2950 2349, opens 8 AM). Real Google listing data, reviews, and stylists (Raju – colour, Asif – cuts) provided.

## User Personas
- Local guest discovering the salon and wanting to book quickly
- Regular client booking with a preferred stylist
- Owner viewing incoming appointment requests

## Core Requirements (static)
- Awwwards-level luxury single-page experience (obsidian + bronze gold, Cormorant Garamond / Syne / Inter)
- Kinetic hero with masked line-by-line reveal + parallax; slow editorial marquee; numbered manifesto chapters
- Lenis smooth scrolling, framer-motion scroll reveals & micro-interactions
- Services menu with category filters, INR prices, durations, stylist tags
- Stylist spotlights, editorial gallery, real Google reviews (4.8 / 1,612)
- Booking form collecting name, phone, service, stylist, date, time, notes → stored in MongoDB (no admin panel)
- Location section with real address, hours, phone, embedded map

## Architecture
- FastAPI backend (`/api/bookings` POST public, GET owner-key protected; `/api/services`)
- MongoDB `bookings` collection via motor
- React 19 + craco frontend, framer-motion 11, lenis, sonner toasts
- Components in `src/components/salon/`, data in `src/lib/salonData.js`

## Implemented (2026-09-18)
- Full single-page luxury site: Nav, Kinetic Hero, Marquee, Manifesto, Services (filterable), Stylists, Gallery, Reviews, Booking, Location (live map), Footer
- Booking flow end-to-end: form → API → MongoDB → confirmation modal with reference + toast
- Owner bookings endpoint protected by ADMIN_KEY (`onesalon-owner-2026`)

## Verified
- POST /api/bookings (valid + invalid key rejection on GET)
- Full booking flow in browser with confirmation modal
- All sections render; hero animation, marquee, map embed confirmed via screenshots

## Implemented (2026-09-18, iteration 2)
- Full Kannada (ಕನ್ನಡ) language toggle in nav (EN ↔ ಕನ್ನಡ), persisted in localStorage; covers nav, hero, marquee, manifesto, services (names/descriptions/categories/durations), stylists, gallery captions, reviews chrome, booking form + confirmation modal, location, footer. Noto Sans/Serif Kannada fonts added. Verified: toggled to KN, booked an appointment in Kannada, confirmation modal in Kannada, toggled back to EN.

## Backlog
- P1: Real salon photos — user to share Google Maps link for extraction (fallback: user uploads); swap into GALLERY/STYLISTS/hero in salonData.js
- P1: WhatsApp booking notification to owner
- P1: SMS/email confirmation to guest
- P2: Admin dashboard for bookings with status management
- P2: Online payment / advance deposit (Razorpay/Stripe)
