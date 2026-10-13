"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { blogArticles, blogCategories } from "@/lib/blogData";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // The primary featured article
  const featuredArticle = blogArticles.find((a) => a.featured) || blogArticles[0];

  // Filtered articles list (excluding the featured one if viewing "all" and no search query)
  const filteredArticles = useMemo(() => {
    return blogArticles.filter((article) => {
      if (!searchQuery && activeCategory === "all" && article.slug === featuredArticle?.slug) {
        return false;
      }
      const matchesCategory =
        activeCategory === "all" || article.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags?.some((t) => t.toLowerCase().includes(q)) ||
        article.author.name.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, featuredArticle]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-white">
      {/* ─── Hero Section ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Perspectives & Field Notes
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight text-text-primary">
              Lave Dispatches. <br />
              <span className="gradient-text">Ideas in Motion.</span>
            </h1>

            <p className="text-lg text-text-secondary mt-6 leading-relaxed max-w-2xl mx-auto">
              Strategic frameworks, technical deep dives, and contrarian field notes
              on building high-velocity digital brands that command attention and market authority.
            </p>
          </div>
        </Container>
      </section>

      {/* ─── Featured Article Showcase ─── */}
      {!searchQuery && activeCategory === "all" && featuredArticle && (
        <section className="py-12 border-b border-border/60 bg-surface-alt/50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-widest text-text-tertiary">
                  Featured Cover Story
                </span>
              </div>

              <div className="rounded-3xl border border-border bg-white shadow-xl shadow-surface-dark/5 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-2xl">
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  {/* Left Editorial Visual Accent */}
                  <div className="lg:col-span-5 relative p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-br from-[#0c0f18] to-[#1a1420] text-white min-h-[320px] overflow-hidden">
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full blur-[80px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-[60px] pointer-events-none" />

                    {/* Stylized Badge */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold uppercase tracking-wider border border-white/15">
                        {featuredArticle.categoryLabel}
                      </span>
                      <span className="font-mono text-xs text-white/70">
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    {/* Graphic Quote / Motif */}
                    <div className="relative z-10 my-8">
                      <div className="text-5xl font-serif text-primary mb-2 opacity-80 leading-none">
                        &ldquo;
                      </div>
                      <p className="text-base sm:text-lg font-display text-white/90 italic leading-snug">
                        True digital luxury is the sensation of instantaneous, friction-free interaction.
                      </p>
                    </div>

                    {/* Author Chip */}
                    <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-xs text-white tracking-wider">
                        {featuredArticle.author.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">
                          {featuredArticle.author.name}
                        </div>
                        <div className="text-xs text-white/60">
                          {featuredArticle.author.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content Details */}
                  <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-text-tertiary mb-3">
                        <span>{featuredArticle.publishDate}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                          {featuredArticle.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-text-secondary font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link href={`/blog/${featuredArticle.slug}`} className="group">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-text-primary leading-tight group-hover:text-primary transition-colors">
                          {featuredArticle.title}
                        </h2>
                      </Link>

                      <p className="text-base text-text-secondary mt-4 leading-relaxed">
                        {featuredArticle.excerpt}
                      </p>

                      {/* Quick Takeaways Box */}
                      {featuredArticle.takeaways && (
                        <div className="mt-6 p-4 rounded-2xl bg-surface-alt border border-border/70">
                          <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">
                            Key Strategic Takeaway
                          </div>
                          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                            {featuredArticle.takeaways[0]}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                      <Button
                        href={`/blog/${featuredArticle.slug}`}
                        variant="primary"
                        size="md"
                        className="shadow-md shadow-primary/20"
                      >
                        Read Deep-Dive Dispatch
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Button>

                      <span className="text-xs text-text-tertiary hidden sm:inline">
                        Full Architectural Blueprint
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ─── Search & Category Filter Section ─── */}
      <section className="py-12">
        <Container>
          <div className="max-w-6xl mx-auto">
            {/* Filter Bar & Search */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2">
                {blogCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? blogArticles.length
                      : blogArticles.filter((a) => a.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-text-primary text-white shadow-md shadow-text-primary/10"
                          : "bg-surface-alt text-text-secondary hover:bg-neutral-100 hover:text-text-primary border border-border"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-neutral-200 text-text-secondary"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative min-w-[280px]">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-text-tertiary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search dispatches & topics..."
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-border bg-surface-alt text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary text-sm transition-all"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-tertiary hover:text-text-primary"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Articles Grid */}
            {filteredArticles.length === 0 ? (
              <div className="text-center py-20 bg-surface-alt rounded-3xl border border-dashed border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary">No dispatches match your query</h3>
                <p className="text-sm text-text-secondary mt-1">
                  Try a different search keyword or category tab.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-text-primary text-white text-xs font-semibold hover:bg-primary transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article
                    key={article.slug}
                    className="group flex flex-col justify-between rounded-3xl border border-border bg-white p-7 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div>
                      {/* Top Meta Header */}
                      <div className="flex items-center justify-between text-xs mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-bold uppercase tracking-wider text-[11px]">
                          {article.categoryLabel}
                        </span>
                        <span className="font-mono text-text-tertiary">
                          {article.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${article.slug}`}>
                        <h3 className="text-xl font-bold font-display text-text-primary leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {article.title}
                        </h3>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-sm text-text-secondary mt-3 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-surface-alt text-[11px] font-medium text-text-secondary border border-border/70"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Author & Read Link */}
                    <div className="pt-6 mt-6 border-t border-border flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-text-primary text-white flex items-center justify-center font-bold text-xs tracking-wider">
                          {article.author.avatar}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-primary">
                            {article.author.name}
                          </div>
                          <div className="text-[10px] text-text-tertiary">
                            {article.publishDate}
                          </div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${article.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:translate-x-1 transition-transform"
                      >
                        Read
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* ─── "The Lave Dispatch" VIP Newsletter Strip ─── */}
            <div className="mt-20 rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-[#0a0a0a] text-white border border-neutral-800 shadow-2xl">
              <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">
                  Private Fortnightly Briefing
                </span>

                <h3 className="text-3xl sm:text-4xl font-display font-black text-white">
                  Subscribe to The Lave Dispatch
                </h3>

                <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed max-w-xl mx-auto">
                  Join 4,200+ founders, design executives, and engineering leaders receiving
                  our unvarnished analysis on digital architecture, brand magnetism, and distribution.
                </p>

                {subscribed ? (
                  <div className="mt-8 p-4 rounded-2xl bg-primary/10 border border-primary/30 text-white max-w-md mx-auto">
                    <div className="text-sm font-bold text-primary-light flex items-center justify-center gap-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      You are confirmed on the private list.
                    </div>
                    <p className="text-xs text-neutral-400 mt-1">
                      Your first dispatch arrives this Thursday. Zero spam, ever.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your executive email..."
                      className="w-full px-5 py-3.5 rounded-xl border border-neutral-700 bg-neutral-900/90 text-white placeholder:text-neutral-500 text-sm focus:outline-none focus:border-primary transition-colors"
                    />

                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto justify-center flex-shrink-0 shadow-lg shadow-primary/30"
                    >
                      Join Dispatch
                    </Button>
                  </form>
                )}

                <div className="flex items-center justify-center gap-6 text-[11px] text-neutral-500 mt-5">
                  <span>✓ Fortnightly release</span>
                  <span>✓ 100% ad-free analysis</span>
                  <span>✓ Instant 1-click unsubscribe</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
