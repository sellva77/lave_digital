"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="home"
      data-theme="dark"
      className="relative w-full h-screen h-[100dvh] max-h-screen overflow-hidden bg-black select-none"
    >
      {/* ─── 1. Ambient Background Video (100% Visibility Across Screen) ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
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

        {/* Soft, minimal left vignette for crisp text contrast without darkening the video */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.42) 45%, rgba(0, 0, 0, 0.12) 100%)",
          }}
        />
      </div>

      {/* ─── 2. Frosted Glass Panel Overlay ─── */}
      {/* <div className="hero-frost-panel" /> */}

      {/* ─── 2b. Interactive Cat Mascot (2.5D Layered) ─── */}
     

      {/* ─── 3. Hero Content Layer (Pinned Within 100vh) ─── */}
      <div className="relative z-20 h-full w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 box-border pointer-events-none">
        {/* Top Headline Block */}
        <div className="pointer-events-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.4rem] font-display font-extrabold tracking-[-0.04em] leading-[0.93] text-white">
            <span className="block">
              Your <span className="text-[#e60000]">Vision</span>
            </span>
            <span className="block ml-[0.38em] sm:ml-[0.42em]">
              Our <span className="text-[#e60000]">Magic</span>
            </span>
          </h1>
        </div>

        {/* Bottom Narrative & Action Block */}
        <div className="max-w-xl flex flex-col items-start gap-3 sm:gap-4 pointer-events-auto">
          {/* Paragraph Tagline */}
          <p className="text-sm sm:text-base md:text-[17px] text-white/90 leading-relaxed font-normal">
            We design <strong className="text-white font-bold">brands</strong>, innovative{" "}
            <strong className="text-white font-bold">marketing campaigns</strong>, and impactful{" "}
            <strong className="text-white font-bold">events</strong> that leave lasting impressions.
          </p>

          {/* "Watch the Journey" CTA Button */}
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] shadow-xl cursor-pointer group"
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

          {/* Thin Rule Divider */}
          <div className="w-48 sm:w-64 h-[1px] bg-white/35 my-0.5" />

          {/* Foot Micro-copy */}
          <div className="space-y-0.5">
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
