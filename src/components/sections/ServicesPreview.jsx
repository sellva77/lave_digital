"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { services } from "@/lib/services";

function ServiceIcon({ icon }) {
  switch (icon) {
    case "palette":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </svg>
      );
    case "code":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "layers":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "trending":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      );
    case "film":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
          <line x1="7" y1="2" x2="7" y2="22" />
          <line x1="17" y1="2" x2="17" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="2" y1="7" x2="7" y2="7" />
          <line x1="2" y1="17" x2="7" y2="17" />
          <line x1="17" y1="17" x2="22" y2="17" />
          <line x1="17" y1="7" x2="22" y2="7" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
  }
}

export default function ServicesPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = section.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services-preview" data-theme="dark" className="py-24 lg:py-32 relative bg-[#0a0a0a]">
      <Container>
        <div className="reveal">
          <SectionHeading
            eyebrow="What We Do"
            title="Services Built for Digital Dominance"
            highlightedWord="Dominance"
            description="We fuse strategy, design, and state-of-the-art engineering to help visionary brands scale."
            dark
          />
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="reveal"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Card className="group h-full flex flex-col justify-between p-8 border border-white/10 hover:border-[#e60000]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#e60000]/10 relative overflow-hidden">
                {/* Glow accent in background on hover */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Bar: Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#e60000]/10 border border-[#e60000]/20 flex items-center justify-center text-[#e60000] group-hover:bg-[#e60000] group-hover:text-white transition-all duration-300 shadow-sm">
                      <ServiceIcon icon={service.icon} />
                    </div>
                    <span className="text-2xl font-display font-bold text-white/15 group-hover:text-[#e60000]/30 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#e60000] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="mt-6 space-y-2.5">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2.5 text-xs font-medium text-white/50">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e60000] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-[#e60000] transition-colors"
                  >
                    <span>Learn More</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="reveal text-center mt-16">
          <Button href="/services" variant="outline" size="lg">
            Explore All Capabilities
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
          </Button>
        </div>
      </Container>
    </section>
  );
}
