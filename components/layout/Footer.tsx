import { Github, Linkedin, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/[0.08] py-12 text-[#86868b]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span>&copy; {currentYear} Mehrab Hossain. All rights reserved.</span>
          <span className="hidden sm:inline text-white/20">&bull;</span>
          <span className="inline-flex items-center gap-1 text-[#86868b]">
            <MapPin className="w-3 h-3 text-[#86868b]" />
            Dhaka, Bangladesh
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/DevMehrab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/devmehrab"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
