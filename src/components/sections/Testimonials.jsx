"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CardSwap, { Card } from "@/components/ui/CardSwap";
import { testimonials } from "@/lib/testimonials";

/* ─── Star Rating ─── */
function Stars() {
  return (
    <div className="flex gap-1 text-amber-400">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Quote Icon ─── */
function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-primary/30"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  );
}

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardSwapRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.15 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      data-theme="light"
      className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden"
    >
      {/* Decorative Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="reveal">
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our Clients Say"
            highlightedWord="Clients"
            description="Real stories from ambitious founders and leadership teams who trust Lave Digital with their brand and digital platforms."
          />
        </div>

        {/* CardSwap 3D Interactive Stack */}
        <div className="reveal max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full h-[460px] sm:h-[480px] flex items-center justify-center">
            <CardSwap
              ref={cardSwapRef}
              width={500}
              height={320}
              cardDistance={52}
              verticalDistance={48}
              depth={85}
              skewAmount={5}
              delay={4500}
              autoplay={true}
              pauseOnHover={true}
              draggable={true}
              speed={1}
              bounce={0.35}
              parallax={0.5}
              hoverSpread={0.12}
              dim={0.45}
              cardRadius={24}
              theme="dark"
              onChange={(index) => setActiveIndex(index)}
            >
              {testimonials.map((t) => (
                <Card
                  key={t.id}
                  className="p-7 sm:p-8 flex flex-col justify-between select-none"
                >
                  {/* Card Top: Stars & Category Badge */}
                  <div className="flex items-center justify-between">
                    <Stars />
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-primary/20 text-white border border-primary/40 backdrop-blur-md">
                        Verified Partner
                      </span>
                      <QuoteIcon />
                    </div>
                  </div>

                  {/* Card Center: Quote */}
                  <blockquote className="my-4 text-base sm:text-lg leading-relaxed text-neutral-100 font-medium italic line-clamp-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Card Bottom: Client Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-[#ff3333] flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary/30 shrink-0">
                        {t.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm sm:text-base tracking-tight">
                          {t.name}
                        </div>
                        <div className="text-xs text-neutral-400">
                          {t.role} ·{" "}
                          <span className="text-primary font-medium">
                            {t.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 hidden sm:block">
                      Drag or Click to Swap
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

          {/* Interactive Navigation & Controls */}
          <div className="flex items-center gap-5 mt-4">
            <button
              onClick={() => cardSwapRef.current?.prev()}
              className="w-10 h-10 rounded-full border border-border bg-white text-text-primary hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Previous testimonial"
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
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const diff = (i - activeIndex + testimonials.length) % testimonials.length;
                    for (let step = 0; step < diff; step++) {
                      setTimeout(() => cardSwapRef.current?.next(), step * 120);
                    }
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "bg-primary w-8"
                      : "bg-neutral-300 hover:bg-neutral-400 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => cardSwapRef.current?.next()}
              className="w-10 h-10 rounded-full border border-border bg-white text-text-primary hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
              aria-label="Next testimonial"
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
