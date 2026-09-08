import Reveal from "@/components/ui/Reveal";
import ProjectGrid, { Project } from "../projects/ProjectGrid";

const projects: Project[] = [
  {
    title: "Campus Connect",
    description:
      "University social network monorepo featuring real-time chat, student feeds, and an AI/RAG document retrieval service.",
    tech: ["Next.js", "Express", "MongoDB", "Socket.IO", "Docker", "RAG"],
    image: "/projects/campus.png",
    live: "https://bup-cse.netlify.app",
    github: "https://github.com/devmehrab/campus-connect",
  },
  {
    title: "Atenier",
    description:
      "Multi-tenant real estate SaaS providing isolated public property storefronts, agency dashboards, and role-based access.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    image: "/projects/Atenier.png",
    live: "https://atenier.com",
    github: "https://github.com/devmehrab/atenier-tech",
  },
  {
    title: "Make Your Dev CV",
    description:
      "AI-powered developer CV builder with custom editing, ATS score optimization, and job-matching assistance.",
    tech: ["Next.js", "TypeScript", "OpenRouter", "MongoDB"],
    image: "/projects/devcv.png",
    live: "https://makeyour.dev.cv",
    github: "https://github.com/devmehrab/make-your-dev-cv",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-32 w-full bg-zinc-950 overflow-hidden"
    >
      <div
        data-ambient-glow
        className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        <div className="lg:w-24 flex-shrink-0">
          <Reveal delay={0.1}>
            <div className="flex items-center gap-4 lg:flex-col lg:h-full lg:justify-start">
              <span className="text-cyan-500 font-mono text-sm">02.</span>
              <div className="section-divider-line h-[1px] hidden md:block w-12 lg:w-[1px] lg:h-24 bg-zinc-800" />
              <h2 className="text-3xl lg:text-4xl font-bold text-zinc-100 tracking-widest uppercase lg:-rotate-180 lg:[writing-mode:vertical-rl] whitespace-nowrap">
                Projects
              </h2>
            </div>
          </Reveal>
        </div>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
