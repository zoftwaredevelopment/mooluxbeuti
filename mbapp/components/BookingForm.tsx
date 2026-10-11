"use client";

import { useMemo, useState } from "react";
import { services, site, booking } from "@/lib/site";

/**
 * Enquiry form. IMPORTANT: there is no backend booking system and we do not
 * invent one. This form validates the request, then hands the visitor off to
 * a REAL, verified channel (WhatsApp / SMS / email) with a prefilled message.
 * We never claim an appointment is confirmed.
 */
export function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    contact: "WhatsApp",
    phone: "",
    email: "",
    service: services[0]?.name ?? "",
    clientType: "New client",
    date: "",
    notes: "",
  });
  const [touched, setTouched] = useState(false);

  const waNumber = "14373324652"; // verified phone, digits only for wa.me
  const smsHref = `sms:+14373324652`;

  const update = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const nameValid = form.name.trim().length >= 2;
  const contactValid =
    form.contact !== "WhatsApp" || form.phone.trim().length >= 7;

  const composedMessage = useMemo(() => {
    const lines = [
      `Hi ${site.name}! I'd like to request an appointment.`,
      "",
      `Name: ${form.name || "—"}`,
      `Service: ${form.service}`,
      `Client: ${form.clientType}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.email ? `Email: ${form.email}` : null,
      form.date ? `Preferred date/availability: ${form.date}` : null,
      form.notes ? `Notes: ${form.notes}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  }, [form]);

  const whatsappHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    composedMessage
  )}`;
  const mailtoHref = `mailto:?subject=${encodeURIComponent(
    `Appointment request — ${form.service}`
  )}&body=${encodeURIComponent(composedMessage)}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!nameValid || !contactValid) return;
    // Open the visitor's chosen verified channel with the prefilled message.
    if (form.contact === "WhatsApp") {
      window.open(whatsappHref, "_blank", "noopener,noreferrer");
    } else if (form.contact === "Text message") {
      window.location.href = smsHref;
    } else {
      window.location.href = mailtoHref;
    }
  };

  const inputCls =
    "w-full rounded-lg border border-divider bg-abyss-2/60 px-4 py-3 text-sm text-bone placeholder:text-silver/50 transition-colors focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium tracking-wide text-silver">
            {booking.fields.name} *
          </span>
          <input
            className={inputCls}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            required
          />
          {touched && !nameValid && (
            <span className="mt-1.5 block text-xs text-teal-soft">
              Please enter your name.
            </span>
          )}
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium tracking-wide text-silver">
            {booking.fields.clientType}
          </span>
          <select
            className={inputCls}
            value={form.clientType}
            onChange={(e) => update("clientType", e.target.value)}
          >
            <option>New client</option>
            <option>Returning client</option>
          </select>
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-medium tracking-wide text-silver">
          {booking.fields.service}
        </span>
        <select
          className={inputCls}
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
        >
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Not sure — please advise</option>
        </select>
      </label>

      <fieldset className="block">
        <legend className="mb-2 block text-xs font-medium tracking-wide text-silver">
          {booking.fields.contact}
        </legend>
        <div className="flex flex-wrap gap-2">
          {["WhatsApp", "Text message", "Email"].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => update("contact", m)}
              aria-pressed={form.contact === m}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                form.contact === m
                  ? "border-teal bg-teal/15 text-teal-soft"
                  : "border-divider text-silver hover:border-teal/60"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-medium tracking-wide text-silver">
            {booking.fields.phone}
          </span>
          <input
            className={inputCls}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="(555) 555-5555"
            inputMode="tel"
            autoComplete="tel"
          />
          {touched && form.contact === "WhatsApp" && !contactValid && (
            <span className="mt-1.5 block text-xs text-teal-soft">
              A phone number is needed to continue on WhatsApp.
            </span>
          )}
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-medium tracking-wide text-silver">
            {booking.fields.email}
          </span>
          <input
            className={inputCls}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            inputMode="email"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-medium tracking-wide text-silver">
          {booking.fields.date}
        </span>
        <input
          className={inputCls}
          value={form.date}
          onChange={(e) => update("date", e.target.value)}
          placeholder="e.g. weekday evenings, or a date"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-medium tracking-wide text-silver">
          {booking.fields.notes}
        </span>
        <textarea
          className={`${inputCls} min-h-[96px] resize-y`}
          value={form.notes}
          onChange={(e) => update("notes", e.target.value)}
          placeholder="Where are you in your loc journey? Any photos you can mention help."
        />
      </label>

      <button
        type="submit"
        className="group mt-1 inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-teal px-8 text-[0.95rem] font-medium text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-soft hover:shadow-[0_10px_40px_-8px_rgba(0,166,200,0.65)]"
      >
        Send my request
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </button>

      <p className="flex items-start gap-2 text-xs leading-relaxed text-silver/80">
        <svg
          className="mt-0.5 h-4 w-4 shrink-0 text-teal"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
        This form prepares your request and opens your chosen app to send it. It
        doesn’t reserve a time by itself — {site.name} will reply to confirm
        your appointment.
      </p>
    </form>
  );
}
