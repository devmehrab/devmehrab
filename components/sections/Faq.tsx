import Reveal from "@/components/ui/Reveal";
import FaqAccordion from "../FAQ/FaqAccordion";

const faqs = [
  {
    question: "What types of projects do you take on?",
    answer:
      "Full-stack web applications, SaaS platforms, and internal tools. My work centers on Next.js, React, Node.js, and TypeScript.",
  },
  {
    question: "What is your primary technology stack?",
    answer:
      "Next.js (App Router), React, TypeScript, Node.js, Express, MongoDB, PostgreSQL, and Tailwind CSS.",
  },
  {
    question: "How do you approach performance and search visibility?",
    answer:
      "I prioritize clean architecture, server-rendered components, optimized assets, semantic HTML, and fast response times.",
  },
  {
    question: "Are you available for full-time or contract work?",
    answer:
      "Yes. I am open to full-time software engineering roles as well as select contract engagements.",
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
      className="relative py-24 md:py-32 w-full bg-black text-[#f5f5f7]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-6 w-full">
        <Reveal delay={0.1}>
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-3">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-[#f5f5f7] mb-6"
            >
              Frequently asked questions.
            </h2>
          </div>
        </Reveal>

        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
