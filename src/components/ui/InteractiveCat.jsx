"use client";

import { useEffect, useRef, useCallback } from "react";

/**
 * InteractiveCat — Lightweight 2.5D SVG cat mascot
 *
 * Pure inline SVG + CSS transform driven by requestAnimationFrame.
 * Zero external images. Zero HTTP requests. ~3KB total.
 *
 * Performance rules:
 * - No Three.js / WebGL / images
 * - No continuous React state updates
 * - CSS transform only (GPU-composited, no layout recalc)
 * - requestAnimationFrame for animation
 * - Respects prefers-reduced-motion
 * - Reduced effect on mobile / touch devices
 */
export default function InteractiveCat({ className = "" }) {
  const containerRef = useRef(null);
  const bodyRef = useRef(null);
  const headRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const tailRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const currentRef = useRef({ x: 0.5, y: 0.5 });

  const lerp = (a, b, t) => a + (b - a) * t;

  const animate = useCallback(() => {
    const cur = currentRef.current;
    const target = mouseRef.current;

    cur.x = lerp(cur.x, target.x, 0.12);
    cur.y = lerp(cur.y, target.y, 0.12);

    // Normalised offset from centre (-1 to +1)
    const dx = (cur.x - 0.5) * 2;
    const dy = (cur.y - 0.5) * 2;

    // Body: subtle tilt (±5°)
    if (bodyRef.current) {
      bodyRef.current.style.transform = `rotate(${dx * 5}deg)`;
    }

    // Head: follows cursor strongly (±25° rotation, ±18px shift)
    if (headRef.current) {
      headRef.current.style.transform = `rotate(${dx * 25}deg) translate(${dx * 18}px, ${dy * 12}px)`;
    }

    // Pupils: most responsive (±10px shift within the eye sockets)
    if (leftPupilRef.current) {
      leftPupilRef.current.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
    }
    if (rightPupilRef.current) {
      rightPupilRef.current.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
    }

    // Tail: visible wag
    if (tailRef.current) {
      tailRef.current.style.transform = `rotate(${dx * -18}deg)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Use (hover: hover) to detect if the device has a hover-capable pointer (mouse)
    // This is true for desktops/laptops even if they also have touch
    const hasHover = window.matchMedia("(hover: hover)").matches;

    if (hasHover) {
      // Desktop: track mouse position
      const onMouseMove = (e) => {
        mouseRef.current.x = e.clientX / window.innerWidth;
        mouseRef.current.y = e.clientY / window.innerHeight;
      };

      window.addEventListener("mousemove", onMouseMove, { passive: true });
      rafRef.current = requestAnimationFrame(animate);

      return () => {
        window.removeEventListener("mousemove", onMouseMove);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    // Mobile/touch-only: gentle idle sway
    let t = 0;
    const idleAnimate = () => {
      t += 0.02;
      const swayX = Math.sin(t) * 0.4;
      const swayY = Math.cos(t * 0.7) * 0.25;

      if (bodyRef.current)
        bodyRef.current.style.transform = `rotate(${swayX * 4}deg)`;
      if (headRef.current)
        headRef.current.style.transform = `rotate(${swayX * 15}deg) translate(${swayX * 8}px, ${swayY * 5}px)`;
      if (leftPupilRef.current)
        leftPupilRef.current.style.transform = `translate(${swayX * 6}px, ${swayY * 4}px)`;
      if (rightPupilRef.current)
        rightPupilRef.current.style.transform = `translate(${swayX * 6}px, ${swayY * 4}px)`;
      if (tailRef.current)
        tailRef.current.style.transform = `rotate(${swayX * -12}deg)`;

      rafRef.current = requestAnimationFrame(idleAnimate);
    };

    rafRef.current = requestAnimationFrame(idleAnimate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={`interactive-cat ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 280"
        width="200"
        height="280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* ── Tail (bottom layer) ── */}
        <g ref={tailRef} style={{ transformOrigin: "140px 210px", willChange: "transform" }}>
          <path
            d="M140 210 Q175 195 185 170 Q195 145 180 125 Q172 115 165 120"
            stroke="#3a3a3a"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M165 120 Q158 125 162 118"
            stroke="#e60000"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ── Body ── */}
        <g ref={bodyRef} style={{ transformOrigin: "100px 220px", willChange: "transform" }}>
          {/* Main body */}
          <ellipse cx="100" cy="215" rx="52" ry="50" fill="#2d2d2d" />
          {/* Chest tuft */}
          <ellipse cx="100" cy="200" rx="28" ry="22" fill="#3a3a3a" />
          {/* Front paws */}
          <ellipse cx="72" cy="258" rx="16" ry="10" fill="#2d2d2d" />
          <ellipse cx="128" cy="258" rx="16" ry="10" fill="#2d2d2d" />
          {/* Paw pads */}
          <ellipse cx="72" cy="261" rx="8" ry="5" fill="#444" />
          <ellipse cx="128" cy="261" rx="8" ry="5" fill="#444" />
        </g>

        {/* ── Head (most movement) ── */}
        <g ref={headRef} style={{ transformOrigin: "100px 140px", willChange: "transform" }}>
          {/* Left ear */}
          <polygon points="55,85 70,40 90,80" fill="#2d2d2d" />
          <polygon points="62,80 72,50 85,78" fill="#cc0000" />

          {/* Right ear */}
          <polygon points="145,85 130,40 110,80" fill="#2d2d2d" />
          <polygon points="138,80 128,50 115,78" fill="#cc0000" />

          {/* Head shape */}
          <ellipse cx="100" cy="110" rx="50" ry="42" fill="#2d2d2d" />

          {/* Forehead tuft */}
          <ellipse cx="100" cy="80" rx="12" ry="6" fill="#3a3a3a" />

          {/* Left eye socket */}
          <ellipse cx="80" cy="105" rx="14" ry="12" fill="#1a1a1a" />
          <ellipse cx="80" cy="105" rx="12" ry="10" fill="#f5f0e0" />
          {/* Left iris */}
          <ellipse cx="80" cy="105" rx="8" ry="9" fill="#d4a017" />
          {/* Left pupil — this moves */}
          <g ref={leftPupilRef} style={{ willChange: "transform" }}>
            <ellipse cx="80" cy="105" rx="4" ry="7" fill="#111" />
            {/* Pupil highlight */}
            <ellipse cx="77" cy="101" rx="2" ry="2" fill="rgba(255,255,255,0.7)" />
          </g>

          {/* Right eye socket */}
          <ellipse cx="120" cy="105" rx="14" ry="12" fill="#1a1a1a" />
          <ellipse cx="120" cy="105" rx="12" ry="10" fill="#f5f0e0" />
          {/* Right iris */}
          <ellipse cx="120" cy="105" rx="8" ry="9" fill="#d4a017" />
          {/* Right pupil — this moves */}
          <g ref={rightPupilRef} style={{ willChange: "transform" }}>
            <ellipse cx="120" cy="105" rx="4" ry="7" fill="#111" />
            {/* Pupil highlight */}
            <ellipse cx="117" cy="101" rx="2" ry="2" fill="rgba(255,255,255,0.7)" />
          </g>

          {/* Nose */}
          <path
            d="M97 120 L100 124 L103 120 Z"
            fill="#cc0000"
          />

          {/* Mouth */}
          <path
            d="M100 124 Q95 130 90 128"
            stroke="#444"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M100 124 Q105 130 110 128"
            stroke="#444"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Whiskers - left */}
          <line x1="58" y1="112" x2="38" y2="108" stroke="#555" strokeWidth="1" opacity="0.6" />
          <line x1="58" y1="118" x2="36" y2="120" stroke="#555" strokeWidth="1" opacity="0.6" />
          <line x1="60" y1="124" x2="40" y2="130" stroke="#555" strokeWidth="1" opacity="0.6" />

          {/* Whiskers - right */}
          <line x1="142" y1="112" x2="162" y2="108" stroke="#555" strokeWidth="1" opacity="0.6" />
          <line x1="142" y1="118" x2="164" y2="120" stroke="#555" strokeWidth="1" opacity="0.6" />
          <line x1="140" y1="124" x2="160" y2="130" stroke="#555" strokeWidth="1" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
