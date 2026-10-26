"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { MessageSquare, X } from "lucide-react";

const LazyChatWidget = dynamic(() => import("@/components/ui/ChatWidget"), {
  ssr: false,
});

export default function FloatingChatToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Assistant"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center 
          h-12 w-12 rounded-full border transition-all duration-300 ease-out shadow-lg backdrop-blur-xl
          ${
            isOpen
              ? "bg-[#2c2c2e] border-white/[0.15] text-white scale-95"
              : "bg-[#1c1c1e]/90 hover:bg-[#2c2c2e] border-white/[0.1] text-[#f5f5f7] hover:scale-105"
          }`}
      >
        {isOpen ? (
          <X className="h-4 w-4 text-white" />
        ) : (
          <MessageSquare className="h-4 w-4 text-[#f5f5f7]" />
        )}
      </button>

      {isOpen && <LazyChatWidget onClose={() => setIsOpen(false)} />}
    </>
  );
}
