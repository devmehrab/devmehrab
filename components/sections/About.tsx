import Reveal from "@/components/ui/Reveal";
import { Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const stack = [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 w-full bg-black text-[#f5f5f7]"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        {/* Section Header */}
        <Reveal delay={0.1}>
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-6">
              Focused on craft, precision, and performance.
            </h2>
            <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed max-w-2xl">
              I build web applications with an emphasis on speed, clean code,
              and thoughtful user experience. Working primarily across the React
              and Node.js ecosystem.
            </p>
          </div>
        </Reveal>

        {/* Experience & Education Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Reveal delay={0.2} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6">
                  <Briefcase className="w-4 h-4 text-[#f5f5f7]" />
                </div>
                <p className="text-xs font-medium text-[#86868b] uppercase tracking-wider mb-2">
                  Experience
                </p>
                <h3 className="text-xl font-semibold text-[#f5f5f7] mb-1">
                  Full-Stack Developer
                </h3>
                <p className="text-sm text-[#86868b] mb-4">iMS Technologies</p>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  Building and scaling web applications with Next.js, React, and
                  RESTful services.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.25} className="h-full">
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-6">
                  <GraduationCap className="w-4 h-4 text-[#f5f5f7]" />
                </div>
                <p className="text-xs font-medium text-[#86868b] uppercase tracking-wider mb-2">
                  Education
                </p>
                <h3 className="text-xl font-semibold text-[#f5f5f7] mb-1">
                  B.Sc. in Computer Science & Engineering
                </h3>
                <p className="text-sm text-[#86868b] mb-4">
                  Bangladesh University of Professionals (BUP)
                </p>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  Focusing on core software engineering principles, data
                  structures, and algorithms.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stack Card */}
        <Reveal delay={0.3}>
          <div className="p-6 sm:p-8 rounded-3xl bg-[#121214] border border-white/[0.08]">
            <p className="text-xs font-medium text-[#86868b] uppercase tracking-wider mb-4">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-[#f5f5f7] bg-white/[0.05] border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
