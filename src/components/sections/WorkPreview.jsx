"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AccordionGallery from "@/components/ui/AccordionGallery";
import { projects, projectCategories } from "@/lib/projects";

export default function WorkPreview() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory);
  }, [activeCategory]);

  const galleryItems = useMemo(() => {
    return filteredProjects.map((p) => ({
      id: p.id,
      image: p.image,
      label: p.title,
      title: p.title,
      category: p.category,
      description: p.description,
      tags: p.tags,
      link: p.link || "/work",
    }));
  }, [filteredProjects]);

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
    <section
      ref={sectionRef}
      id="work-preview"
      data-theme="light"
      className="py-24 lg:py-32 bg-surface-alt overflow-hidden"
    >
      <Container>
        <div className="reveal">
          <SectionHeading
            eyebrow="Portfolio"
            title="A look at the work"
            highlightedWord="work"
            description="Selected projects that showcase our creative range, technical craft, and strategic thinking."
          />
        </div>

        {/* Category Filters */}
        <div className="reveal flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.slug
                  ? "bg-[#e60000] text-white font-bold shadow-lg shadow-[#e60000]/25 scale-105"
                  : "bg-white text-text-secondary border border-border hover:border-[#e60000] hover:text-[#e60000]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Accordion Gallery Showcase */}
        <div className="reveal">
          <AccordionGallery
            key={activeCategory}
            items={galleryItems}
            defaultIndex={Math.min(1, Math.max(0, galleryItems.length - 1))}
            expandRatio={0.52}
            trigger="hover"
            accentColor="#e60000"
            overlayColor="#070b12"
            textColor="#ffffff"
            grayscale={true}
            showLabels={true}
            duration={0.65}
            ease="power3.out"
            parallax={0.5}
            tilt={8}
            stagger={0.06}
            height={520}
            gap={12}
            radius={20}
            orientation="horizontal"
          />
        </div>

        {/* View All CTA */}
        <div className="reveal text-center mt-14">
          <Button href="/work" variant="outline-dark" size="lg">
            Explore All Projects
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
