import dynamic from "next/dynamic";
import Reveal from "@/components/ui/Reveal";
import DirectRoute from "../contact/DirectRoute";

const DynamicContactForm = dynamic(() => import("../contact/ContactForm"), {
  loading: () => (
    <div className="h-[400px] w-full animate-pulse bg-zinc-900/20 rounded-2xl border border-zinc-800/30 flex items-center justify-center">
      <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
        Loading interface...
      </span>
    </div>
  ),
});

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-12 md:py-32 w-full bg-zinc-950 overflow-hidden"
    >
      <div
        data-ambient-glow
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-t-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at bottom center, rgba(6, 182, 212, 0.08) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        <div className="lg:w-24 flex-shrink-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 lg:flex-col lg:h-full lg:justify-start">
              <span className="text-cyan-500 font-mono text-sm">03.</span>
              <div className="section-divider-line h-[1px] hidden md:block w-12 lg:w-[1px] lg:h-24 bg-zinc-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-widest uppercase lg:-rotate-180 lg:[writing-mode:vertical-rl] whitespace-nowrap">
                Contact
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="flex-1 w-full">
          <Reveal delay={0.2}>
            <div className="max-w-2xl mb-12">
              <h3 className="text-5xl lg:text-6xl font-bold text-zinc-100 mb-6 tracking-tighter">
                Initiate{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-cyan-600">
                  Connection.
                </span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Have a complex project in mind? Need a full-stack developer to
                join your team? Send a message directly through the terminal
                below, or use the direct email route.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <Reveal delay={0.3}>
                <DynamicContactForm />
              </Reveal>
            </div>

            <div className="lg:col-span-2">
              <Reveal delay={0.4}>
                <DirectRoute />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
