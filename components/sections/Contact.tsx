import dynamic from "next/dynamic";
import Reveal from "@/components/ui/Reveal";
import DirectRoute from "../contact/DirectRoute";

const DynamicContactForm = dynamic(() => import("../contact/ContactForm"), {
  loading: () => (
    <div className="h-[360px] w-full animate-pulse bg-[#121214] rounded-3xl border border-white/[0.08] flex items-center justify-center">
      <span className="text-[#86868b] text-xs">Loading form...</span>
    </div>
  ),
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 w-full bg-black text-[#f5f5f7]"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <Reveal delay={0.1}>
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-6">
              Get in touch.
            </h2>
            <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed max-w-xl">
              Available for full-time engineering positions and select client
              projects. Reach out directly or send a message.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          <div className="lg:col-span-3">
            <Reveal delay={0.2}>
              <DynamicContactForm />
            </Reveal>
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={0.25}>
              <DirectRoute />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
