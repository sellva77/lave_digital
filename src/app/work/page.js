"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { projects, projectCategories } from "@/lib/projects";

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.categorySlug === activeCategory);

  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Our Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              Selected Works & <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-lg text-text-secondary mt-6 leading-relaxed">
              Explore our curated portfolio of award-winning digital experiences, brand identities, and high-performance digital platforms.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Tabs & Grid */}
      <section className="py-12">
        <Container>
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
            {projectCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.slug
                    ? "gradient-primary text-white shadow-lg shadow-primary/25"
                    : "bg-surface text-text-secondary border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="group border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Header / Placeholder */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl bg-gradient-to-br from-surface-alt to-border/50 border-b border-border flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center text-text-tertiary gap-2 p-6 text-center">
                      <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                          <line x1="8" y1="21" x2="16" y2="21" />
                          <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-text-primary mt-1">{project.title}</span>
                    </div>

                    {/* Category pill top left */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full glass text-text-primary shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-display text-text-primary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-2.5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium bg-surface-alt text-text-secondary rounded-md border border-border/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-text-secondary group-hover:text-primary transition-colors">
                    <span>View Project Overview</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-base">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 gradient-dark text-white text-center mt-16">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Have an ambitious project in mind?
            </h2>
            <p className="text-text-on-dark-secondary mb-8 leading-relaxed">
              We&apos;re ready to create the next industry-defining case study with you. Let&apos;s start the discussion.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Start Your Project
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
