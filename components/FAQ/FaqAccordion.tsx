"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-white/[0.08]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <Reveal key={index} delay={0.15 + index * 0.05}>
            <div className="border-b border-white/[0.08]">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between py-5 text-left focus:outline-none transition-colors group"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base sm:text-lg font-medium text-[#f5f5f7] group-hover:text-white transition-colors pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-4 h-4 text-[#86868b] transition-transform duration-300 flex-shrink-0 ${
                    isOpen ? "rotate-180 text-white" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 text-sm sm:text-base text-[#86868b] leading-relaxed max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
