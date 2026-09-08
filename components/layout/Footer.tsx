import { Github, Linkedin, Twitter, Activity, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-zinc-950 pt-20 pb-6 overflow-hidden border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-zinc-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            <p className="font-mono text-sm text-zinc-600">
              <span className="text-cyan-500/50">//</span> &copy; {currentYear}{" "}
              Mehrab Hossain.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/DevMehrab"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/devmehrab"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>

        <div className="w-full overflow-hidden select-none pointer-events-none border-t border-zinc-900 pt-8">
          <h2 className="text-[15vw] leading-[0.75] font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-800/80 to-zinc-950 text-center tracking-tighter">
            MEHRAB
          </h2>
        </div>
      </div>
    </footer>
  );
}
