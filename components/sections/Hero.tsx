import Reveal from "@/components/ui/Reveal";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Mehrab Hossain - Developer Introduction"
      className="relative min-h-[90vh] flex flex-col justify-center items-center w-full px-6 pt-28 pb-16 bg-black"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[#86868b] text-xs font-medium tracking-tight">
              Dhaka, Bangladesh &bull; Available for select work
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#f5f5f7] mb-6">
            Mehrab Hossain.
            <span className="block text-[#86868b] mt-2 font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight">
              Building software for the web.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#86868b] font-normal leading-relaxed mb-10">
            Developer at iMS Technologies. CSE student at BUP. Focused on
            Next.js, React, and TypeScript.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5f5f7] text-black text-sm font-medium hover:bg-white transition-all shadow-sm"
            >
              <span>View Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="/Resume Mehrab Hossain.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Resume Mehrab Hossain.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#f5f5f7] border border-white/[0.08] text-sm font-medium transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#86868b]" />
              <span>Resume</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
