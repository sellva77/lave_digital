"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Add active class only on client mount
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("has-custom-cursor");
    }

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      setVisible(true);

      // Instant dot position
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check hovered element
      const target = e.target;
      if (target instanceof Element) {
        const interactive = target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer, .interactive-hover"
        );
        setIsHovered(Boolean(interactive));
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    // Continuous 60/120fps ring follower loop
    const render = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("has-custom-cursor");
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <>
      {/* ─── 1. CENTER SOLID DOT ─── */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-[99999] select-none transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full bg-[#e60000] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isHovered
              ? "w-2.5 h-2.5 scale-100 opacity-100"
              : isClicked
              ? "w-2 h-2 scale-75 opacity-100"
              : "w-2 h-2 scale-100 opacity-100"
          }`}
        />
      </div>

      {/* ─── 2. FLUID OUTER RING ─── */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-[99998] select-none transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
            isHovered
              ? "w-16 h-16 border border-[#e60000]/45 bg-[#e60000]/10 shadow-sm"
              : isClicked
              ? "w-7 h-7 border border-[#e60000]/80 bg-[#e60000]/15"
              : "w-9 h-9 border border-[#e60000]/65 bg-[#e60000]/10"
          }`}
        />
      </div>
    </>
  );
}