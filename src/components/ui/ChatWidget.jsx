"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ChatWidget() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 240);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside aria-label="Quick actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* Scroll to Top circular button */}
      <button
        onClick={scrollToTop}
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0a0a0a] hover:bg-neutral-800 text-[#e60000] flex items-center justify-center shadow-xl border border-neutral-800 transition-all duration-300 cursor-pointer ${
          showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>

      {/* Floating Chat Circle */}
      <Link
        href="/contact"
        className="w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#e60000] hover:bg-[#cc0000] text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-300 relative cursor-pointer group"
        aria-label="Contact us"
      >
        {/* Red notification dot on top-right */}
        <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white animate-pulse" />

        {/* Chat bubble icon */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:rotate-6 transition-transform text-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </Link>
    </aside>
  );
}
