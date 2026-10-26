"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { submitContactForm } from "@/actions/contact";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setIsSubmitted(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrorMessage(result.error || "Failed to send message. Please try again.");
      setTimeout(() => setErrorMessage(null), 6000);
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/[0.08]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-medium text-[#86868b] block"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full bg-[#1c1c1e]/60 border border-white/[0.08] focus:border-white/[0.25] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#f5f5f7] placeholder:text-[#6e6e73] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-medium text-[#86868b] block"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full bg-[#1c1c1e]/60 border border-white/[0.08] focus:border-white/[0.25] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#f5f5f7] placeholder:text-[#6e6e73] transition-colors"
            placeholder="you@domain.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-medium text-[#86868b] block"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="w-full bg-[#1c1c1e]/60 border border-white/[0.08] focus:border-white/[0.25] focus:outline-none rounded-xl px-4 py-2.5 text-sm text-[#f5f5f7] placeholder:text-[#6e6e73] transition-colors resize-none"
          placeholder="How can I help you?"
        />
      </div>

      <div className="pt-2 flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#f5f5f7] text-black text-sm font-medium hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
          <span>
            {isSubmitting
              ? "Sending..."
              : isSubmitted
                ? "Sent"
                : "Send Message"}
          </span>
        </button>

        {isSubmitted && (
          <span className="text-emerald-400 text-xs font-medium">
            Message sent successfully.
          </span>
        )}

        {errorMessage && (
          <span className="text-rose-400 text-xs font-medium">
            {errorMessage}
          </span>
        )}
      </div>
    </form>
  );
}
