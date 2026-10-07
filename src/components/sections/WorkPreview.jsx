"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects, projectCategories } from "@/lib/projects";

export default function WorkPreview() {
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory);

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
    <section ref={sectionRef} id="work-preview" data-theme="light" className="py-24 lg:py-32 bg-surface-alt">
      <Container>
        <div className="reveal">
          <SectionHeading
            eyebrow="Portfolio"
            title="A look at the work"
            highlightedWord="work"
            description="Selected projects that showcase our creative range and strategic thinking."
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
                  ? "bg-[#e60000] text-white font-bold shadow-lg shadow-[#e60000]/25"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-[#e60000] hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <div
              key={project.id}
              className="reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Card className="group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden img-placeholder">
                  {/* Replace with: <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" /> */}
                  <div className="flex flex-col items-center justify-center h-full text-text-tertiary gap-2">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <polyline points="21 15 16 10 5 21" />
                    </svg>
                    <span className="text-xs font-medium">{project.title}</span>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                    <div className="text-white">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary-light">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-bold mt-1">{project.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mt-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-surface-alt text-text-secondary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="reveal text-center mt-12">
          <Button href="/work" variant="outline">
            View All Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
