"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const headlineRef = useRef(null);
  const paragraphRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const dividerRef = useRef(null);
  const footerTextRef = useRef(null);
  const narrativeBlockRef = useRef(null);

  useEffect(() => {
    // Autoplay background video safely
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Collect character elements for kinetic stagger
      const charsLine1 = heroRef.current?.querySelectorAll(".char-line-1");
      const charsLine2 = heroRef.current?.querySelectorAll(".char-line-2");
      const redChars = heroRef.current?.querySelectorAll(".char-red");

      // ── 1. Initial State Setup ──
      gsap.set([charsLine1, charsLine2], {
        yPercent: 130,
        opacity: 0,
        rotateZ: 4,
        skewX: -6,
        transformOrigin: "bottom left",
      });

      gsap.set(paragraphRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(ctaButtonRef.current, {
        y: 25,
        scale: 0.92,
        opacity: 0,
      });

      gsap.set(dividerRef.current, {
        scaleX: 0,
        opacity: 0,
        transformOrigin: "left center",
      });

      gsap.set(footerTextRef.current, {
        y: 20,
        opacity: 0,
      });

      if (videoWrapperRef.current) {
        gsap.set(videoWrapperRef.current, {
          scale: 1.12,
          opacity: 0.8,
        });
      }

      // ── 2. Master Kinetic Timeline ──
      const tl = gsap.timeline({
        delay: 0.2,
      });

      // Video smooth settle
      if (videoWrapperRef.current) {
        tl.to(
          videoWrapperRef.current,
          {
            scale: 1.0,
            opacity: 1,
            duration: 2.0,
            ease: "power2.out",
          },
          0
        );
      }

      // Line 1: Character-by-character kinetic roll ("Your Vision")
      if (charsLine1 && charsLine1.length > 0) {
        tl.to(
          charsLine1,
          {
            yPercent: 0,
            opacity: 1,
            rotateZ: 0,
            skewX: 0,
            duration: 0.85,
            stagger: 0.032,
            ease: "power3.out",
          },
          0.1
        );
      }

      // Line 2: Character-by-character kinetic roll ("Our Magic")
      if (charsLine2 && charsLine2.length > 0) {
        tl.to(
          charsLine2,
          {
            yPercent: 0,
            opacity: 1,
            rotateZ: 0,
            skewX: 0,
            duration: 0.85,
            stagger: 0.032,
            ease: "power3.out",
          },
          0.32
        );
      }

      // Crimson accent glow ripple on "Vision" and "Magic"
      if (redChars && redChars.length > 0) {
        tl.to(
          redChars,
          {
            textShadow: "0 0 30px rgba(230,0,0,0.65), 0 0 10px rgba(230,0,0,0.3)",
            duration: 0.8,
            stagger: {
              amount: 0.35,
              from: "start",
            },
            ease: "power1.out",
          },
          0.8
        );
      }

      // Narrative text slide-in
      tl.to(
        paragraphRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
        },
        0.75
      );

      // "Watch the Journey" CTA button with snappy overshoot
      tl.to(
        ctaButtonRef.current,
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 0.85,
          ease: "back.out(1.6)",
        },
        0.95
      );

      // Divider line wipe
      tl.to(
        dividerRef.current,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.inOut",
        },
        1.05
      );

      // Footer micro-copy
      tl.to(
        footerTextRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        1.15
      );

      // ── 3. ScrollTrigger Parallax Depth (coordinated with Lenis) ──
      if (heroRef.current) {
        gsap.to(headlineRef.current, {
          yPercent: -30,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(narrativeBlockRef.current, {
          yPercent: -18,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        if (videoWrapperRef.current) {
          gsap.to(videoWrapperRef.current, {
            yPercent: 15,
            scale: 1.06,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Helper to split a word into individual masked letter spans
  const renderLetters = (word, lineClass, isRed = false) => {
    return word.split("").map((char, i) => (
      <span
        key={i}
        className="inline-block overflow-hidden align-top leading-none pb-1"
      >
        <span
          className={`inline-block will-change-transform ${lineClass} ${
            isRed ? "text-[#e60000] char-red" : "text-white"
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      id="home"
      data-theme="dark"
      className="relative w-full h-screen h-[100dvh] max-h-screen overflow-hidden bg-black select-none"
    >
      {/* ─── 1. Background Video Layer ─── */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none will-change-transform"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-100"
        >
          <source src="/assets/Hero%20Section%20Video.mp4" type="video/mp4" />
        </video>

        {/* Soft, minimal left vignette for crisp text contrast */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.44) 45%, rgba(0, 0, 0, 0.12) 100%)",
          }}
        />
      </div>

      {/* ─── 2. Hero Content Layer ─── */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 box-border pointer-events-none">
        {/* Top Headline Block with Kinetic Split-Characters */}
        <div ref={headlineRef} className="pointer-events-auto will-change-transform">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.4rem] font-display font-extrabold tracking-[-0.04em] leading-[0.93]">
            {/* Line 1: "Your Vision" */}
            <span className="block">
              {renderLetters("Your", "char-line-1", false)}
              <span className="inline-block w-[0.25em]">&nbsp;</span>
              {renderLetters("Vision", "char-line-1", true)}
            </span>

            {/* Line 2: "Our Magic" (Indented) */}
            <span className="block ml-[0.38em] sm:ml-[0.42em]">
              {renderLetters("Our", "char-line-2", false)}
              <span className="inline-block w-[0.25em]">&nbsp;</span>
              {renderLetters("Magic", "char-line-2", true)}
            </span>
          </h1>
        </div>

        {/* Bottom Narrative & Action Block */}
        <div
          ref={narrativeBlockRef}
          className="max-w-xl flex flex-col items-start gap-3 sm:gap-4 pointer-events-auto will-change-transform"
        >
          {/* Paragraph Tagline */}
          <p
            ref={paragraphRef}
            className="text-sm sm:text-base md:text-[17px] text-white/90 leading-relaxed font-normal will-change-transform"
          >
            We design <strong className="text-white font-bold">brands</strong>, innovative{" "}
            <strong className="text-white font-bold">marketing campaigns</strong>, and impactful{" "}
            <strong className="text-white font-bold">events</strong> that leave lasting impressions.
          </p>

          {/* "Watch the Journey" CTA Button */}
          <div ref={ctaButtonRef} className="will-change-transform">
            <Link
              href="/work"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] shadow-2xl shadow-black/40 cursor-pointer group"
            >
              <span>Watch the Journey</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Thin Rule Divider */}
          <div
            ref={dividerRef}
            className="w-48 sm:w-64 h-[1px] bg-white/35 my-0.5 will-change-transform"
          />

          {/* Foot Micro-copy */}
          <div ref={footerTextRef} className="space-y-0.5 will-change-transform">
            <span className="block text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-white/70 uppercase">
              LET&apos;S BUILD SOMETHING REMARKABLE
            </span>
            <p className="text-xs sm:text-sm md:text-[15px] font-medium text-white leading-snug">
              Together, we transform your vision into measurable success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
