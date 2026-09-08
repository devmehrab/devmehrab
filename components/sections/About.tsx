import Reveal from "@/components/ui/Reveal";
import {
  Briefcase,
  GraduationCap,
  Cpu,
  TerminalSquare,
  ChevronRight,
} from "lucide-react";

export default function About() {
  const coreStack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="relative py-12 md:py-32 w-full bg-zinc-950 overflow-hidden"
    >
      <div
        data-ambient-glow
        className="absolute top-40 left-[-10%] w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-24 flex-shrink-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 lg:flex-col lg:h-full lg:justify-start">
              <span className="text-cyan-500 font-mono text-sm">01.</span>
              <div className="section-divider-line h-[1px] hidden md:block w-12 lg:w-[1px] lg:h-24 bg-zinc-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-widest uppercase lg:-rotate-180 lg:[writing-mode:vertical-rl] whitespace-nowrap">
                Background
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-7 space-y-16">
            <Reveal delay={0.2}>
              <div className="relative">
                <TerminalSquare className="absolute -top-6 -left-6 w-12 h-12 text-zinc-800/50 -z-10" />
                <h3 className="text-2xl font-semibold text-zinc-100 mb-6">
                  The Human Element
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  I am a full-stack developer who loves bridging the gap between
                  technical logic and seamless user experience. I build
                  accessible, performant web applications, focusing primarily on
                  the modern JavaScript ecosystem to turn complex problems into
                  elegant solutions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="relative pl-6 sm:pl-8 border-l border-zinc-800/60 space-y-12">
                <div className="absolute top-1 -left-[2px] w-[3px] h-24 bg-gradient-to-b from-cyan-500 to-transparent" />

                <div className="relative group">
                  <div className="absolute -left-[40px] sm:-left-[48px] p-2 bg-zinc-950 border border-zinc-800 rounded-full group-hover:border-cyan-500/50 transition-colors">
                    <Briefcase className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <h4 className="text-xl font-bold text-zinc-100">
                      Junior Full-Stack Dev
                    </h4>
                    <span className="font-mono text-sm text-cyan-500">
                      @ iMS Technologies
                    </span>
                  </div>
                  <p className="text-zinc-500 font-mono text-xs mb-3">
                    CURRENT ROLE
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Developing and maintaining robust web applications,
                    optimizing performance, and collaborating on architecture
                    decisions using the MERN stack & Next.js.
                  </p>
                </div>

                <div className="relative group">
                  <div className="absolute -left-[40px] sm:-left-[48px] p-2 bg-zinc-950 border border-zinc-800 rounded-full group-hover:border-emerald-500/50 transition-colors">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                    <h4 className="text-xl font-bold text-zinc-100">
                      B.Sc. in CSE
                    </h4>
                    <span className="font-mono text-sm text-emerald-500">
                      @ BUP
                    </span>
                  </div>
                  <p className="text-zinc-500 font-mono text-xs mb-3">
                    GRADUATION
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Building a strong foundation in computer science
                    fundamentals, algorithms, and software engineering
                    principles.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.4} className="">
              <div className="relative h-full p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 overflow-hidden flex flex-col group">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />

                <div className="relative z-10 flex items-center gap-3 mb-8 pb-4 border-b border-zinc-800/50">
                  <Cpu className="w-5 h-5 text-zinc-300" />
                  <h3 className="font-mono text-sm tracking-widest text-zinc-300 uppercase">
                    System Dependencies
                  </h3>
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2">
                    {coreStack.map((tech, index) => (
                      <div
                        key={index}
                        className="group/tag flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-950/50 border border-zinc-800/50 hover:border-cyan-500/30 transition-colors cursor-default"
                      >
                        <ChevronRight className="w-3 h-3 text-zinc-600 group-hover/tag:text-cyan-400 transition-colors" />
                        <span className="text-zinc-400 text-sm font-mono group-hover/tag:text-zinc-200 transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-8 pt-4 border-t border-zinc-800/50 flex justify-between items-center font-mono text-[10px] text-zinc-600">
                  <span>// stack_loaded</span>
                  <span className="animate-pulse text-cyan-500/50">100%</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
