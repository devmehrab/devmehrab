import Reveal from "@/components/ui/Reveal";
import ProjectGrid, { Project } from "../projects/ProjectGrid";

const projects: Project[] = [
  {
    title: "Campus Connect",
    description:
      "University social platform featuring real-time messaging, community feeds, and document search.",
    tech: ["Next.js", "Express", "MongoDB", "Socket.IO", "Docker"],
    image: "/projects/campus.png",
    live: "https://bup-cse.vercel.app",
    github: "https://github.com/devmehrab/campus-connect",
  },
  {
    title: "Atenier",
    description:
      "Real estate platform with storefronts, property listings, and agency management dashboards.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    image: "/projects/Atenier.png",
    live: "https://atenier.com",
    github: "https://github.com/devmehrab/atenier-tech",
  },
  {
    title: "Make Your Dev CV",
    description:
      "Developer resume builder with interactive templates, section customization, and PDF export.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    image: "/projects/devcv.png",
    live: "https://makeyour.dev.cv",
    github: "https://github.com/devmehrab/make-your-dev-cv",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 w-full bg-black text-[#f5f5f7]"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <Reveal delay={0.1}>
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
              Projects
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-6">
              Selected work.
            </h2>
            <p className="text-base sm:text-lg text-[#86868b] font-normal leading-relaxed max-w-xl">
              Web applications and production software built with modern tools.
            </p>
          </div>
        </Reveal>

        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
