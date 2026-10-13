"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { blogArticles } from "@/lib/blogData";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug;

  const article = blogArticles.find((a) => a.slug === slug);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="pt-40 pb-24 min-h-screen text-center">
        <Container>
          <h1 className="text-3xl font-bold font-display text-text-primary">
            Dispatch Not Found
          </h1>
          <p className="text-text-secondary mt-3">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex items-center gap-2 text-primary font-bold hover:underline"
          >
            ← Return to All Dispatches
          </Link>
        </Container>
      </div>
    );
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Find related articles (excluding current)
  const relatedArticles = blogArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="pt-28 pb-24 min-h-screen bg-white">
      {/* ─── Reading Progress Indicator ─── */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border/40 z-50">
        <div
          className="h-full bg-primary transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* ─── Hero Header ─── */}
      <section className="py-12 md:py-16 border-b border-border/50 relative overflow-hidden bg-surface-alt/40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb & Navigation */}
            <div className="flex items-center justify-between text-xs text-text-tertiary mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 font-bold text-text-secondary hover:text-primary transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
                Back to Dispatches
              </Link>

              <div className="flex items-center gap-2 font-mono">
                <span>{article.publishDate}</span>
                <span>•</span>
                <span className="text-primary font-bold">{article.readTime}</span>
              </div>
            </div>

            {/* Category Tag */}
            <span className="inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-5">
              {article.categoryLabel}
            </span>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-text-primary leading-[1.15] tracking-tight">
              {article.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-lg sm:text-xl text-text-secondary mt-6 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Author Profile Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-8 border-t border-border/60">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-md shadow-primary/20">
                  {article.author.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-text-primary">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {article.author.role} • Lave Digital
                  </div>
                </div>
              </div>

              {/* Share & Copy Link Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-border bg-white text-xs font-semibold text-text-primary hover:border-primary hover:text-primary transition-colors cursor-pointer shadow-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  {copied ? "Link Copied!" : "Copy Link"}
                </button>

                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                  aria-label="Share on X"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl border border-border bg-white flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Editorial Body Section ─── */}
      <section className="py-14">
        <Container>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Table of Contents & Insights */}
            <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-6 order-2 lg:order-1">
              {/* Table of Contents */}
              <div className="p-6 rounded-2xl bg-surface-alt border border-border">
                <div className="text-xs font-bold uppercase tracking-wider text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Contents of this Dispatch
                </div>

                <nav className="space-y-2.5 text-xs text-text-secondary">
                  {article.content.map((sec, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="block hover:text-primary transition-colors line-clamp-1 py-0.5"
                    >
                      {i + 1}. {sec.heading}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Executive Summary Takeaways Box */}
              {article.takeaways && article.takeaways.length > 0 && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                    Executive Takeaways
                  </div>
                  <ul className="space-y-2.5 text-xs text-text-secondary leading-relaxed">
                    {article.takeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tag Badges */}
              <div className="p-6 rounded-2xl bg-surface-alt border border-border">
                <div className="text-xs font-bold uppercase tracking-wider text-text-primary mb-3">
                  Referenced Topics
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white border border-border text-[11px] font-medium text-text-secondary"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Editorial Text Column */}
            <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">
              {article.content.map((section, idx) => (
                <article key={idx} id={`section-${idx}`} className="scroll-mt-36">
                  <h2 className="text-2xl sm:text-3xl font-display font-bold text-text-primary mb-6 leading-snug">
                    {section.heading}
                  </h2>

                  {/* Paragraphs */}
                  {section.paragraphs && (
                    <div className="space-y-5 text-base sm:text-lg text-text-secondary leading-relaxed font-sans">
                      {section.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className={
                            idx === 0 && pIdx === 0
                              ? "first-letter:text-5xl first-letter:font-black first-letter:font-display first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:leading-none"
                              : ""
                          }
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Stylized Pull Quote */}
                  {section.quote && (
                    <div className="my-8 p-6 sm:p-8 rounded-2xl bg-surface-alt border-l-4 border-primary relative overflow-hidden">
                      <div className="text-3xl font-serif text-primary opacity-30 mb-1 leading-none">
                        &ldquo;
                      </div>
                      <blockquote className="text-lg sm:text-xl font-display font-semibold text-text-primary italic leading-relaxed">
                        {section.quote}
                      </blockquote>
                    </div>
                  )}

                  {/* Architectural Comparison Matrix */}
                  {section.type === "comparison" && section.data && (
                    <div className="my-8 rounded-2xl border border-border overflow-hidden bg-white shadow-sm">
                      <div className="grid grid-cols-12 bg-surface-alt px-5 py-3 border-b border-border text-xs font-bold text-text-primary uppercase tracking-wider">
                        <div className="col-span-4">Metric</div>
                        <div className="col-span-4 text-text-tertiary">Legacy Monolith</div>
                        <div className="col-span-4 text-primary">Next.js Headless</div>
                      </div>
                      <div className="divide-y divide-border">
                        {section.data.map((row, rIdx) => (
                          <div
                            key={rIdx}
                            className="grid grid-cols-12 px-5 py-3.5 text-xs sm:text-sm items-center"
                          >
                            <div className="col-span-4 font-semibold text-text-primary">
                              {row.metric}
                            </div>
                            <div className="col-span-4 text-text-secondary pr-2">
                              {row.legacy}
                            </div>
                            <div className="col-span-4 font-semibold text-primary">
                              {row.modern}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              ))}

              {/* Author Bio Box */}
              <div className="mt-16 p-8 rounded-3xl bg-surface-alt border border-border flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg shadow-primary/20">
                  {article.author.avatar}
                </div>
                <div className="text-center sm:text-left flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Written by
                  </div>
                  <h3 className="text-lg font-bold font-display text-text-primary">
                    {article.author.name}
                  </h3>
                  <p className="text-xs font-medium text-text-secondary">
                    {article.author.role} at Lave Digital
                  </p>
                  <p className="text-xs text-text-secondary mt-3 leading-relaxed">
                    Collaborating with founders and enterprise leaders to engineer high-velocity digital experiences, design systems, and algorithmic distribution engines.
                  </p>
                </div>
              </div>

              {/* CTA Consultation Banner */}
              <div className="mt-8 p-8 rounded-3xl bg-[#0a0a0a] text-white border border-neutral-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-bold font-display text-white">
                      Ready to execute this standard for your brand?
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                      Schedule a private technical consultation with our engineering team.
                    </p>
                  </div>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="flex-shrink-0 justify-center shadow-lg shadow-primary/25"
                  >
                    Discuss Your Project
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </Container>
      </section>

      {/* ─── Related Dispatches Section ─── */}
      {relatedArticles.length > 0 && (
        <section className="py-16 border-t border-border bg-surface-alt/50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    Continue Reading
                  </span>
                  <h3 className="text-2xl font-bold font-display text-text-primary mt-1">
                    Related Dispatches
                  </h3>
                </div>
                <Link
                  href="/blog"
                  className="text-xs font-bold text-text-secondary hover:text-primary transition-colors"
                >
                  View All →
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.slug}
                    className="p-7 rounded-3xl border border-border bg-white hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-[11px] uppercase tracking-wider">
                          {rel.categoryLabel}
                        </span>
                        <span className="font-mono text-text-tertiary">
                          {rel.readTime}
                        </span>
                      </div>
                      <Link href={`/blog/${rel.slug}`}>
                        <h4 className="text-lg font-bold font-display text-text-primary hover:text-primary transition-colors line-clamp-2">
                          {rel.title}
                        </h4>
                      </Link>
                      <p className="text-xs sm:text-sm text-text-secondary mt-2 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                      <span className="text-text-tertiary">{rel.author.name}</span>
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="font-bold text-primary hover:underline inline-flex items-center gap-1"
                      >
                        Read Dispatch →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
