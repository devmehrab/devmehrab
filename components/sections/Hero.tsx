import Reveal from "@/components/ui/Reveal";
import { ArrowRight, Terminal, Database, Code2, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Mehrab Hossain - Full-Stack Developer Hero Section"
      className="relative min-h-screen flex flex-col justify-center w-full overflow-hidden bg-zinc-950"
    >
      <div
        data-ambient-glow
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"
      />
      <div
        data-ambient-glow
        className="absolute bottom-0 left-[-20%] w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full z-10 flex flex-col items-center justify-center pt-20 lg:pt-0">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-zinc-300 font-mono text-xs tracking-wide uppercase">
                Software Dev based in Dhaka
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-6xl sm:text-8xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9]">
              <span className="text-zinc-100"></span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-600 pb-2">
                Mehrab Hossain <span className="sr-only">Jim - devmehrab</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-xl sm:text-2xl font-medium text-zinc-300 mb-4">
                Full Stack Developer
              </h2>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed">
                I am Mehrab Hossain, a Junior Full-Stack Developer at iMS
                Technologies, studying CSE at BUP. I specialize in building
                high-performance Next.js & MERN applications with a focus on SEO
                and scalability.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#projects"
                aria-label="View Mehrab Hossain's Full-Stack Projects"
                className="group relative flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 font-semibold rounded-lg overflow-hidden transition-all hover:bg-white"
              >
                <div className="absolute inset-0 bg-cyan-400 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative z-10 group-hover:text-zinc-950 transition-colors">
                  View My Work
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Resume Mehrab Hossain.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Resume Mehrab Hossain.pdf"
                title="View and Download Mehrab Hossain's Resume"
                className="group flex items-center gap-2.5 px-7 py-4 text-zinc-300 text-md rounded-lg border border-zinc-800 bg-zinc-900/30 hover:text-cyan-400 hover:bg-zinc-900/80 hover:border-cyan-500/40 transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
                <span>Resume</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="w-full hidden justify-center mt-16 lg:mt-24">
          <Reveal delay={0.5}>
            <div className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden group text-left">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-[50px] rounded-full group-hover:bg-cyan-400/30 transition-colors duration-500" />

              <div className="relative z-10 flex justify-between items-center">
                <div className="p-3 bg-zinc-800/50 rounded-xl border border-zinc-700">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  Expertise: Full-Stack
                </span>
              </div>

              <div className="relative z-10 space-y-4 py-8">
                <div className="flex items-center gap-4 text-zinc-400 hover:text-zinc-200 transition-colors">
                  <Code2 className="w-5 h-5" aria-hidden="true" />
                  <span className="font-mono text-sm">
                    Next.js / React / TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-4 text-zinc-400 hover:text-zinc-200 transition-colors">
                  <Database className="w-5 h-5" aria-hidden="true" />
                  <span className="font-mono text-sm">Node.js / MongoDB</span>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-zinc-800/50">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-zinc-500">Available in</span>
                  <span className="text-emerald-400 flex items-center gap-2 ml-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Dhaka, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
