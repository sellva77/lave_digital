"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function AboutPreview() {
  const sectionRef = useRef(null);

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
    <section ref={sectionRef} id="about-preview" data-theme="light" className="py-24 lg:py-32 relative">
      {/* Subtle glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] gradient-glow pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Creative Showcase Card */}
          <div className="reveal relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#091118] via-[#05090d] to-[#020405] border border-white/10 p-8 sm:p-10 flex flex-col justify-between group shadow-2xl">
              {/* Luminous glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e60000]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#e60000] px-3.5 py-1.5 rounded-full bg-[#e60000]/10 border border-[#e60000]/20">
                  Design & Strategy
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#e60000] animate-pulse" />
              </div>

              <div className="relative z-10 my-auto py-6">
                <h4 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                  Transforming vision into enduring <span className="text-[#e60000]">digital impact</span>.
                </h4>
                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  Every interaction, pixel, and line of code is engineered with purpose, precision, and conviction.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10 text-xs font-semibold text-gray-400 relative z-10">
                <span className="text-white">Strategy</span>
                <span>•</span>
                <span className="text-white">Identity</span>
                <span>•</span>
                <span className="text-white">Engineering</span>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl bg-gradient-to-br from-[#e60000] to-[#cc0000] flex flex-col items-center justify-center text-white shadow-2xl">
              <span className="text-3xl font-display font-extrabold">5+</span>
              <span className="text-xs font-bold uppercase tracking-wider">Years Exp</span>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="reveal">
              <SectionHeading
                eyebrow="Who We Are"
                title="Where Vision Becomes Legacy"
                highlightedWord="Legacy"
                align="left"
              />
            </div>

            <div className="reveal space-y-5 text-text-secondary leading-relaxed">
              <p>
                We are a team of passionate designers, developers, and strategists
                who believe in the power of digital craft. At Lave Digital, we
                don&apos;t just build brands — we build legacies.
              </p>
              <p>
                Every pixel, every line of code, every campaign is infused with
                purpose. Our holistic approach ensures your brand doesn&apos;t just
                look great — it performs, connects, and grows.
              </p>
            </div>

            {/* Feature list */}
            <div className="reveal grid grid-cols-2 gap-4 mt-8">
              {[
                "Strategy-First Approach",
                "Award-Winning Design",
                "Data-Driven Results",
                "Dedicated Support",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-text-primary">{feature}</span>
                </div>
              ))}
            </div>

            <div className="reveal mt-10">
              <Button href="/about" variant="secondary">
                More About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
