"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Github } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live: string;
  github?: string;
  featured?: boolean;
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {projects.map((project, index) => (
        <Reveal
          key={index}
          delay={0.15 + (index % 2) * 0.1}
          className="h-full flex"
        >
          <div className="group flex flex-col w-full h-full bg-[#121214] border border-white/[0.08] hover:border-white/[0.18] rounded-3xl overflow-hidden transition-all duration-300">
            {/* Project Image Frame */}
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#1c1c1e] border-b border-white/[0.06]">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="block w-full h-full relative"
                aria-label={`Visit ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  priority={index < 2}
                />
              </a>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 justify-between p-6 sm:p-7 gap-5">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#f5f5f7]">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="text-sm text-[#86868b] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Stack and Action Links */}
              <div className="space-y-4 pt-4 border-t border-white/[0.06] mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-[#86868b]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#f5f5f7] text-black text-xs font-medium hover:bg-white transition-colors"
                  >
                    <span>Visit Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-[#f5f5f7] text-xs font-medium transition-colors"
                      aria-label={`${project.title} Source Code`}
                    >
                      <Github className="w-3.5 h-3.5 text-[#86868b]" />
                      <span>Source</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
