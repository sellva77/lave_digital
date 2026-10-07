"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export default function ContactPreview() {
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
    <section ref={sectionRef} id="contact-preview" data-theme="dark" className="py-24 lg:py-32 gradient-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ready to Start?
            </span>
          </div>

          <h2 className="reveal text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-6">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>

          <p className="reveal text-lg text-text-on-dark-secondary max-w-xl mx-auto mb-10 leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Drop us a
            line and let&apos;s explore how we can bring your vision to life.
          </p>

          <div className="reveal flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="outline-light"
              size="lg"
            >
              {siteConfig.email}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
