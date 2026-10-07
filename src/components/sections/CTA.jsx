"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const processSteps = [
  {
    number: "01",
    title: "Discover & Research",
    description:
      "We dive deep into your brand, audience, and competition to uncover insights that drive creative strategy.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We map out a clear roadmap — defining goals, milestones, and the creative direction that will set you apart.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design & Create",
    description:
      "Our design team brings the vision to life — crafting stunning visuals, interfaces, and brand assets.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "We launch with precision and continue optimizing for growth, ensuring long-term success and ROI.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
      </svg>
    ),
  },
];

export default function CTA() {
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
      { threshold: 0.1 }
    );
    section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="process" data-theme="light" className="py-24 lg:py-32">
      <Container>
        <div className="reveal">
          <SectionHeading
            eyebrow="Our Process"
            title="Clarity before the Creativity"
            highlightedWord="Creativity"
            description="Design, Strategy, Execution — a proven process that delivers results every time."
          />
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto space-y-0">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="reveal process-connector"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex gap-6 pb-10 group">
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
