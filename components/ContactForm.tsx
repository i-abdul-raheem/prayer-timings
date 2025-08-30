"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
  // Honeypot (anti-bot): must remain empty
  company?: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(
    null
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);

    // simple client-side validation
    if (!form.name.trim())
      return setStatus({ ok: false, msg: "Please enter your name." });
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      return setStatus({ ok: false, msg: "Please enter a valid email." });
    if (!form.subject.trim())
      return setStatus({ ok: false, msg: "Please add a subject." });
    if (form.message.trim().length < 10)
      return setStatus({
        ok: false,
        msg: "Message should be at least 10 characters.",
      });

    // honeypot check
    if (form.company) {
      // silently succeed to confuse bots
      setStatus({ ok: true, msg: "Thanks! We’ll be in touch." });
      return;
    }

    setSubmitting(true);
    setStatus({ ok: true, msg: "Thanks! Your message has been sent." });
    setSubmitting(false);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-7xl mx-auto bg-white rounded-2xl p-6 md:p-8"
      noValidate
    >
      {/* 2-column responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name<span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1 w-full rounded-xl border-2 border-gray-200 px-3 py-2 focus:border-primary-500 focus:outline-none"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email<span className="text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1 w-full rounded-xl border-2 border-gray-200 px-3 py-2 focus:border-primary-500 focus:outline-none"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject<span className="text-red-600">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="mt-1 w-full rounded-xl border-2 border-gray-200 px-3 py-2 focus:border-primary-500 focus:outline-none"
            placeholder="How can we help?"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message<span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className="mt-1 w-full rounded-xl border-2 border-gray-200 px-3 py-2 focus:border-primary-500 focus:outline-none"
            placeholder="Write your message..."
            required
          />
        </div>
      </div>

      {/* Honeypot – hidden from humans, bots may fill it */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Status */}
      {status && (
        <div
          className={`mt-4 rounded-lg px-4 py-3 text-sm ${
            status.ok
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
          role="status"
        >
          {status.msg}
        </div>
      )}

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="reset"
          className="btn-secondary"
          onClick={() => {
            setForm({
              name: "",
              email: "",
              subject: "",
              message: "",
              company: "",
            });
            setStatus(null);
          }}
          disabled={submitting}
        >
          Clear
        </button>
        <button
          type="submit"
          className="btn-primary disabled:opacity-70"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
