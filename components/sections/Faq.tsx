import Reveal from "@/components/ui/Reveal";
import { TerminalSquare } from "lucide-react";
import FaqAccordion from "../FAQ/FaqAccordion";

const faqs = [
  {
    question: "What types of web development projects do you specialize in?",
    answer:
      "I specialize in building full-stack web applications, modern SaaS platforms, corporate web portals, and custom web products. My focus is on writing clean, scalable code with responsive interfaces, robust APIs, and high performance.",
  },
  {
    question: "What technologies and frameworks do you use for development?",
    answer:
      "My core stack centers on Next.js (App Router), React, TypeScript, Node.js, and Express, alongside MongoDB and PostgreSQL for databases. I utilize Tailwind CSS for modern design systems, with deployments on Vercel, Docker, and cloud platforms.",
  },
  {
    question: "How do you ensure web performance, accessibility, and SEO?",
    answer:
      "I build with Core Web Vitals and search engine visibility at the forefront. This includes leveraging Next.js Server Components, optimized media delivery, semantic HTML5, structured JSON-LD schemas, and edge caching to achieve excellent Lighthouse scores and fast load times.",
  },
  {
    question: "What does your typical project collaboration workflow look like?",
    answer:
      "I follow an agile, transparent workflow: requirements discovery, technical architecture planning, milestone-based iterative development with regular updates, cross-device testing, and smooth production deployment followed by documentation and support.",
  },
  {
    question: "Are you available for freelance contracts or full-time opportunities?",
    answer:
      "Yes, I take on select freelance contracts, technical consulting, and custom development projects. I am also open to discussing compelling full-time engineering and remote opportunities.",
  },
];

export default function Faq() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative py-12 md:py-32 w-full bg-zinc-950 overflow-hidden"
    >
      <div
        data-ambient-glow
        className="absolute top-20 right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(9, 9, 11, 0) 70%)",
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <Reveal delay={0.1}>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-zinc-900/50 border border-zinc-800">
              <TerminalSquare
                className="w-4 h-4 text-cyan-400"
                aria-hidden="true"
              />
              <span className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
                System Queries
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight"
            >
              Frequently Asked <span className="text-cyan-500">Questions</span>
            </h2>
          </div>
        </Reveal>

        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
