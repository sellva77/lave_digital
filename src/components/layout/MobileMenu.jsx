"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";
import Button from "@/components/ui/Button";

/* ─── Social Icons ─── */
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
      <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
      <path d="M8.56 2.75c4.37 6 6 12.56 6.44 16.85" />
    </svg>
  );
}

function BehanceIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
    </svg>
  );
}

const socialIcons = {
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  dribbble: DribbbleIcon,
  behance: BehanceIcon,
};

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Backdrop overlay */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Drawer panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#0a0f18]/95 backdrop-blur-2xl border-l border-white/10 text-white flex flex-col justify-between p-6 sm:p-10 shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#e60000]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#0abde3]/10 blur-3xl pointer-events-none" />

        {/* Top bar inside drawer */}
        <div className="relative z-10 flex items-center justify-between pb-6 border-b border-white/10">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-1.5 font-display font-extrabold tracking-tight text-xl sm:text-2xl"
          >
            <span className="text-[#cc0000]">LAVE</span>
            <span className="text-white">DIGITAL</span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#e60000] hover:bg-white/5 transition-all duration-200 cursor-pointer"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation list */}
        <nav className="relative z-10 my-auto py-8">
          <p className="text-xs uppercase tracking-widest text-[#e60000] font-semibold mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href;
              const formattedIndex = String(index + 1).padStart(2, "0");

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`group flex items-center justify-between py-3 px-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? "bg-white/10 text-[#e60000] font-bold"
                        : "text-white/80 hover:text-white hover:bg-white/5 font-medium"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-white/40 group-hover:text-[#e60000] transition-colors">
                        {formattedIndex}
                      </span>
                      <span className="text-2xl sm:text-3xl font-display tracking-tight transition-transform duration-200 group-hover:translate-x-1">
                        {link.label}
                      </span>
                    </div>

                    <span
                      className={`text-sm transition-transform duration-200 group-hover:translate-x-1 ${
                        isActive ? "text-[#e60000] opacity-100" : "text-white/40 opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Quick CTA inside drawer */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <Button
              href="/contact"
              variant="primary"
              size="default"
              className="w-full justify-center"
              onClick={onClose}
            >
              Start a Project
            </Button>
          </div>
        </nav>

        {/* Drawer footer info */}
        <div className="relative z-10 pt-6 border-t border-white/10 space-y-4">
          <div className="flex flex-col gap-1 text-sm text-neutral-400">
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-[#e60000] transition-colors"
            >
              {siteConfig.email}
            </a>
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="hover:text-[#e60000] transition-colors"
              >
                {siteConfig.phone}
              </a>
            )}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3 pt-2">
            {Object.entries(siteConfig.socials).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              if (!Icon) return null;
              return (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#e60000] hover:border-[#e60000] hover:bg-white/5 transition-all duration-200"
                  aria-label={`Follow us on ${platform}`}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
