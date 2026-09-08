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
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {projects.map((project, index) => (
        <Reveal
          key={index}
          delay={0.15 + (index % 2) * 0.1}
          duration={0.9}
          className="h-full flex"
        >
          <div className="group relative flex flex-col w-full h-full bg-zinc-900/25 border border-zinc-800/60 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.06)]">
            {/* Subtle Hover Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            {/* Thumbnail / Cover Image */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-950 border-b border-zinc-800/50">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="block w-full h-full relative"
                aria-label={`Visit live site for ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/25 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              </a>

              {/* Status and Index Badge */}
              <div className="absolute top-3.5 left-4 right-4 flex justify-between items-center pointer-events-none z-20">
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] text-zinc-300 tracking-wider">
                    Live
                  </span>
                </div>

                <span className="font-mono text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 text-cyan-400">
                  0{index + 1}
                </span>
              </div>
            </div>

            {/* Card Content - Streamlined & Minimal */}
            <div className="relative z-10 flex flex-col flex-1 justify-between p-5 sm:p-6 gap-5">
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline decoration-cyan-400/40 underline-offset-4"
                  >
                    {project.title}
                  </a>
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tech Stack & Action Links */}
              <div className="space-y-4 pt-3 border-t border-zinc-800/50 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-950/70 border border-zinc-800/70 text-[11px] font-mono text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500 border border-cyan-500/30 hover:border-cyan-500 text-cyan-400 hover:text-zinc-950 font-mono text-xs font-semibold tracking-wide transition-all duration-300 group/btn"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 font-mono text-xs font-medium transition-all duration-300"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-200" />
                      <span>Code</span>
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
