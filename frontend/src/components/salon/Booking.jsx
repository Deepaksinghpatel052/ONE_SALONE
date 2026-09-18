import { useMemo, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Check, Phone, Loader2 } from "lucide-react";
import { SERVICES, STYLISTS, TIME_SLOTS, SALON } from "@/lib/salonData";
import { Reveal, Eyebrow } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const today = () => new Date().toISOString().split("T")[0];

const EMPTY = { name: "", phone: "", service: SERVICES[0].name, stylist: "Any Artist", date: today(), time: "10:00 AM", notes: "" };

export default function Booking() {
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const summary = useMemo(() => SERVICES.find((s) => s.name === form.service), [form.service]);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      const { data } = await axios.post(`${API}/bookings`, form);
      setReceipt(data);
      toast.success("Appointment request received");
      setForm(EMPTY);
    } catch (err) {
      toast.error(err.response?.data?.detail?.[0]?.msg || err.response?.data?.detail || "Could not place the request. Please call us.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="booking" className="max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <Reveal>
        <Eyebrow>Reserve</Eyebrow>
        <h2 className="font-display text-4xl sm:text-5xl mt-4 leading-tight">
          Your chair <span className="italic text-gold">awaits</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <Reveal>
          <form data-testid="appointment-booking-form" onSubmit={submit} className="bg-[#141417] border hairline p-8 lg:p-10 space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#A19B91]">Full Name</span>
                <input data-testid="booking-input-name" required minLength={2} value={form.name} onChange={set("name")} placeholder="Aarav Sharma" className="lux-input mt-2" />
              </label>
              <label className="block">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#A19B91]">Phone</span>
                <input data-testid="booking-input-phone" required value={form.phone} onChange={set("phone")} placeholder="98XXX XXXXX" className="lux-input mt-2" />
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#A19B91]">Service</span>
                <select data-testid="booking-select-service" value={form.service} onChange={set("service")} className="lux-input mt-2">
                  {SERVICES.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}
                </select>
              </label>
              <label className="block">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#A19B91]">Preferred Artist</span>
                <select data-testid="booking-select-stylist" value={form.stylist} onChange={set("stylist")} className="lux-input mt-2">
                  <option>Any Artist</option>
                  {STYLISTS.map((s) => <option key={s.id}>{s.name}</option>)}
                </select>
              </label>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#A19B91]">Date</span>
                <input data-testid="booking-input-date" type="date" required min={today()} value={form.date} onChange={set("date")} className="lux-input mt-2 [color-scheme:dark]" />
              </label>
              <label className="block">
                <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#A19B91]">Time</span>
                <select data-testid="booking-select-time" value={form.time} onChange={set("time")} className="lux-input mt-2">
                  {TIME_SLOTS.map((t) => <option key={t}>{t}</option>)}
                </select>
              </label>
            </div>
            <label className="block">
              <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-[#A19B91]">Special Notes</span>
              <textarea data-testid="booking-input-notes" rows={3} value={form.notes} onChange={set("notes")} placeholder="Reference photo, occasion, allergies…" className="lux-input mt-2 resize-none" />
            </label>
            <button data-testid="booking-submit-button" disabled={busy} className="btn-gold w-full font-accent text-xs uppercase tracking-[0.3em] py-4 flex items-center justify-center gap-2 disabled:opacity-60">
              {busy ? <Loader2 size={16} className="animate-spin" /> : null}
              {busy ? "Reserving…" : "Request Appointment"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.15}>
          <aside className="bg-[#0d0d0f] border hairline-gold p-8 lg:p-10 h-fit lg:sticky lg:top-24 gold-glow">
            <p className="font-accent text-[10px] uppercase tracking-[0.3em] text-gold">Your Selection</p>
            <h3 className="font-display text-3xl mt-4 leading-snug">{summary?.name}</h3>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between border-b hairline pb-3"><dt className="text-[#6E685F]">Artist</dt><dd className="text-[#E6D5B8]">{form.stylist}</dd></div>
              <div className="flex justify-between border-b hairline pb-3"><dt className="text-[#6E685F]">Date</dt><dd className="text-[#E6D5B8]">{form.date}</dd></div>
              <div className="flex justify-between border-b hairline pb-3"><dt className="text-[#6E685F]">Time</dt><dd className="text-[#E6D5B8]">{form.time}</dd></div>
              <div className="flex justify-between border-b hairline pb-3"><dt className="text-[#6E685F]">Duration</dt><dd className="text-[#E6D5B8]">{summary?.duration}</dd></div>
              <div className="flex justify-between"><dt className="text-[#6E685F]">Price</dt><dd className="font-display text-xl text-gold">{summary?.price}</dd></div>
            </dl>
            <p className="mt-6 text-xs text-[#6E685F] leading-relaxed">Requests are confirmed by phone within 30 minutes during salon hours.</p>
            <a href={SALON.phoneHref} className="btn-ghost mt-6 w-full flex items-center justify-center gap-2 font-accent text-xs uppercase tracking-[0.25em] py-3.5">
              <Phone size={14} /> Call Instead
            </a>
          </aside>
        </Reveal>
      </div>

      <AnimatePresence>
        {receipt && (
          <motion.div
            data-testid="booking-confirmation-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-6"
            onClick={() => setReceipt(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141417] border hairline-gold max-w-md w-full p-10 text-center gold-glow"
            >
              <span className="mx-auto w-14 h-14 flex items-center justify-center rounded-full border border-[#C5A059] text-gold">
                <Check size={24} />
              </span>
              <h3 className="font-display text-3xl mt-6">Request Received</h3>
              <p className="text-sm text-[#A19B91] mt-3 leading-relaxed">
                {receipt.name}, your {receipt.service} with {receipt.stylist} on {receipt.date} at {receipt.time} is being held. We'll call {receipt.phone} to confirm.
              </p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#6E685F]">
                Reference <span className="text-gold">{receipt.id.slice(0, 8).toUpperCase()}</span>
              </p>
              <button data-testid="booking-confirmation-close" onClick={() => setReceipt(null)} className="btn-gold mt-8 w-full font-accent text-xs uppercase tracking-[0.3em] py-3.5">
                Done
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
