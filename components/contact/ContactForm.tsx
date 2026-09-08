"use client";

import { useState } from "react";
import { Terminal, Send, CheckCircle2, Loader2 } from "lucide-react";
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
      setErrorMessage(result.error || "Transmission failed. Please try again.");
      setTimeout(() => setErrorMessage(null), 6000);
    }

    setIsSubmitting(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 shadow-xl backdrop-blur-sm"
    >
      <div className="flex items-center gap-2 mb-6 border-b border-zinc-800/50 pb-4">
        <Terminal className="w-4 h-4 text-zinc-500" />
        <span className="font-mono text-xs text-zinc-500 tracking-widest uppercase">
          New_Message_Thread
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="font-mono text-xs text-zinc-400 pl-1"
          >
            Name_
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="font-mono text-xs text-zinc-400 pl-1"
          >
            Email_
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans"
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="message"
          className="font-mono text-xs text-zinc-400 pl-1"
        >
          Message_
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={5}
          className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all font-sans resize-none"
          placeholder="Discussing architecture, opportunities, or just saying hi..."
        />
      </div>

      <div className="pt-2 flex items-center justify-between">
        <button
          type="submit"
          disabled={isSubmitting || isSubmitted}
          className="group/btn relative flex items-center gap-3 px-8 py-3.5 bg-zinc-100 text-zinc-950 font-semibold rounded-lg overflow-hidden transition-all hover:bg-white disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out" />
          <span className="relative z-10 group-hover/btn:text-zinc-950 transition-colors flex items-center gap-2">
            {isSubmitting
              ? "Transmitting..."
              : isSubmitted
                ? "Payload Sent"
                : "Send"}
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : isSubmitted ? (
              <CheckCircle2 className="w-4 h-4" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </span>
        </button>

        {isSubmitted && (
          <span className="text-emerald-400 text-sm font-mono animate-pulse">
            Transmission successful.
          </span>
        )}

        {errorMessage && (
          <span className="text-rose-400 text-sm font-mono">
            {errorMessage}
          </span>
        )}
      </div>
    </form>
  );
}
