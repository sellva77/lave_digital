"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";
import MobileMenu from "./MobileMenu";

/* ── Desktop Nav Links matching design (Desktop - 3) ── */
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Initially collapsed on the right; only moves to the center after expanding
  const [isExpanded, setIsExpanded] = useState(false);
  // Dynamic background detection: true when navbar is scrolling over a white/light section
  const [isOverLight, setIsOverLight] = useState(false);
  // Disabled / hidden once footer enters viewport
  const [footerVisible, setFooterVisible] = useState(false);

  /* ── mount entrance slide-down ── */
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  /* ── scroll & dynamic background theme detection ── */
  useEffect(() => {
    const handleScrollAndTheme = () => {
      const scrollY = window.scrollY;
      const isPastThreshold = scrollY > 30;
      setScrolled(isPastThreshold);
      if (isPastThreshold) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }

      // Check section beneath the navbar (~45px from top of viewport)
      const navbarY = 45;
      const sections = Array.from(
        document.querySelectorAll("section, footer, [data-theme]")
      );

      let foundTheme = null;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navbarY && rect.bottom > navbarY) {
          const explicit =
            el.getAttribute("data-theme") ||
            el.closest("[data-theme]")?.getAttribute("data-theme");
          if (explicit) {
            foundTheme = explicit;
            break;
          }

          const classList = el.className || "";
          if (
            classList.includes("bg-[#0a0a0a]") ||
            classList.includes("bg-black") ||
            classList.includes("gradient-dark")
          ) {
            foundTheme = "dark";
            break;
          }
          if (
            classList.includes("bg-white") ||
            classList.includes("bg-surface-alt")
          ) {
            foundTheme = "light";
            break;
          }

          // Fallback: check computed background color
          try {
            const bg = window.getComputedStyle(el).backgroundColor;
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const [, r, g, b, a] = match;
              if (a === "0") {
                // transparent, keep checking
                continue;
              }
              const brightness = (Number(r) * 299 + Number(g) * 587 + Number(b) * 114) / 1000;
              foundTheme = brightness > 140 ? "light" : "dark";
              break;
            }
          } catch {
            // ignore
          }
        }
      }

      if (foundTheme) {
        setIsOverLight(foundTheme === "light");
      } else {
        // Fallback for home page hero vs other pages
        if (pathname === "/" && scrollY < window.innerHeight * 0.85) {
          setIsOverLight(false);
        } else if (pathname !== "/") {
          setIsOverLight(true);
        }
      }
    };

    handleScrollAndTheme();
    window.addEventListener("scroll", handleScrollAndTheme, { passive: true });
    window.addEventListener("resize", handleScrollAndTheme, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollAndTheme);
      window.removeEventListener("resize", handleScrollAndTheme);
    };
  }, [pathname]);

  /* ── disable / hide navbar once footer enters the screen ── */
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  /* ── prevent body scroll when mobile menu is active ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`navbar-root${scrolled ? " navbar-root--scrolled" : ""}${
          mounted ? " navbar-root--mounted" : ""
        }${isOverLight ? " navbar-root--on-light" : ""}${
          footerVisible ? " navbar-root--hidden" : ""
        }`}
        aria-hidden={footerVisible}
      >
        <div className="navbar-inner">
          {/* ── Brand Logo (Stacked Red LAVE / Black DIGITAL) ── */}
          <Link href="/" className="navbar-logo" aria-label={siteConfig.name}>
            <span className="logo-lave">LAVE</span>
            <span className="logo-digital">DIGITAL</span>
          </Link>

          {/* ── Desktop Morphing Action / Navigation Capsule ── */}
          <div
            className={`navbar-capsule-wrapper ${
              isExpanded ? "capsule--expanded" : "capsule--collapsed"
            }`}
          >
            {/* STATE 1 (COLLAPSED): "<< Send a brief" Pill */}
            <div className="capsule-collapsed-view">
              <Link
                href="/contact"
                className="capsule-brief-link"
                aria-label="Send a brief"
              >
                <span className="brief-arrows" aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="11 17 6 12 11 7" />
                    <polyline points="18 17 13 12 18 7" />
                  </svg>
                </span>
                <span className="brief-text">Send a brief</span>
              </Link>

              {/* Red circular toggle hamburger */}
              <button
                type="button"
                className="capsule-burger-circle"
                onClick={() => setIsExpanded(true)}
                title="Open navigation menu"
                aria-label="Expand menu"
              >
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
              </button>
            </div>

            {/* STATE 2 (EXPANDED): Full Glossy Red Pill Nav (Desktop - 3) */}
            <nav className="capsule-expanded-view" aria-label="Main navigation">
              <div className="capsule-links-list">
                {NAV_ITEMS.map((link, idx) => {
                  const isActive =
                    pathname === link.href ||
                    (link.href !== "/" &&
                      pathname.startsWith(link.href.split("#")[0]));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`capsule-nav-link${
                        isActive ? " capsule-nav-link--active" : ""
                      }`}
                      style={{ animationDelay: `${0.22 + idx * 0.06}s` }}
                    >
                      <span className="nav-link-label">{link.label}</span>
                      <span
                        className="capsule-nav-link__underline"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Hamburger icon inside the right edge of capsule to toggle collapse / drawer */}
              <button
                type="button"
                className="capsule-burger-embedded"
                onClick={() => setIsExpanded(false)}
                title="Collapse menu to 'Send a brief'"
                aria-label="Collapse menu"
                style={{
                  animationDelay: `${0.22 + NAV_ITEMS.length * 0.06}s`,
                }}
              >
                <span className="burger-line" />
                <span className="burger-line" />
                <span className="burger-line" />
              </button>
            </nav>
          </div>

          {/* ── Mobile-Only Hamburger Button (< 768px) ── */}
          <button
            type="button"
            className={`mobile-burger${
              mobileOpen ? " mobile-burger--open" : ""
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}


