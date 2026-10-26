"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowUp, X, Loader2 } from "lucide-react";

export default function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    const historyToSend = [...messages];

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: historyToSend,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "model", content: data.text }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "model", content: "Something went wrong. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-[calc(100vw-32px)] sm:w-[380px] h-[500px] max-h-[80vh] flex flex-col z-50 overflow-hidden rounded-3xl border border-white/[0.1] bg-[#121214]/95 backdrop-blur-2xl shadow-2xl">
      {/* Header */}
      <div className="px-5 py-4 border-b border-white/[0.08] flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-[#f5f5f7]">Assistant</h3>
          <p className="text-xs text-[#86868b]">Ask about work & projects</p>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-white/[0.08] rounded-full text-[#86868b] hover:text-white transition-colors"
          aria-label="Close Assistant"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-3"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#86868b]">
            <p className="text-xs max-w-xs leading-relaxed">
              Ask any question about Mehrab’s technical background, projects, or
              availability.
            </p>
          </div>
        )}

        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                m.role === "user"
                  ? "bg-[#0071e3] text-white rounded-br-sm"
                  : "bg-[#1c1c1e] text-[#f5f5f7] border border-white/[0.08] rounded-bl-sm"
              }`}
            >
              {m.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-[#1c1c1e] border border-white/[0.08] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#86868b] animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="p-3 bg-[#121214] border-t border-white/[0.08]"
      >
        <div className="relative flex items-center">
          <input
            className="w-full bg-[#1c1c1e] border border-white/[0.08] focus:border-white/[0.25] text-[#f5f5f7] text-sm rounded-full py-2.5 pl-4 pr-11 outline-none transition-colors placeholder:text-[#6e6e73]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send message"
            className="absolute right-1.5 p-1.5 bg-white text-black hover:bg-[#e5e5ea] disabled:opacity-30 rounded-full transition-all"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}
