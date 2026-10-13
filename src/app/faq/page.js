"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { faqItems, faqCategories } from "@/lib/faqData";
import { siteConfig } from "@/lib/site";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({ "pricing-models": true });
  const [feedbackState, setFeedbackState] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  // Filter items based on category and search query
  const filteredFaqs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.highlights?.some((h) => h.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen = {};
    filteredFaqs.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  const handleFeedback = (id, type) => {
    setFeedbackState((prev) => ({
      ...prev,
      [id]: type,
    }));
  };

  const handleCopyLink = (id) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/faq#${id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const quickTags = [
    "Pricing",
    "Next.js",
    "Sprint Timelines",
    "Code Ownership",
    "Retainers",
    "Content Engine",
  ];

  return (
    <div className="pt-28 pb-24 min-h-screen bg-white">
      {/* ─── Hero Section ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Clarity & Transparency
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black leading-tight tracking-tight text-text-primary">
              Frequently Asked Questions. <br />
              <span className="gradient-text">Zero Guesswork.</span>
            </h1>

            <p className="text-lg text-text-secondary mt-6 leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our high-velocity sprint cycles,
              fixed-scope contracts, engineering stack standards, and full IP handover.
            </p>

            {/* Quick Assurance Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-surface-alt border border-border/70 hover:border-primary/40 transition-colors">
                <div className="text-xs uppercase font-bold tracking-wider text-primary">100% IP Handover</div>
                <div className="text-sm font-semibold text-text-primary mt-1">Full code & design ownership</div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-alt border border-border/70 hover:border-primary/40 transition-colors">
                <div className="text-xs uppercase font-bold tracking-wider text-primary">&lt; 24h Response</div>
                <div className="text-sm font-semibold text-text-primary mt-1">Dedicated senior lead access</div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-alt border border-border/70 hover:border-primary/40 transition-colors">
                <div className="text-xs uppercase font-bold tracking-wider text-primary">Weekly Demos</div>
                <div className="text-sm font-semibold text-text-primary mt-1">Live working staging code</div>
              </div>

              <div className="p-4 rounded-2xl bg-surface-alt border border-border/70 hover:border-primary/40 transition-colors">
                <div className="text-xs uppercase font-bold tracking-wider text-primary">Transparent Sprints</div>
                <div className="text-sm font-semibold text-text-primary mt-1">Fixed or retainer, no surprises</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Main Content & Accordion Section ─── */}
      <section className="py-14">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-text-tertiary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions by keyword, topic, or tech stack (e.g. Next.js, pricing, IP)..."
                className="w-full pl-12 pr-12 py-4 rounded-2xl border border-border bg-white text-text-primary placeholder:text-text-tertiary focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 text-base shadow-sm transition-all"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-tertiary hover:text-text-primary"
                  aria-label="Clear search"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>

            {/* Quick Keyword Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-10 text-xs">
              <span className="text-text-secondary font-medium">Quick search:</span>
              {quickTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag)}
                  className="px-3 py-1 rounded-full bg-surface-alt border border-border hover:border-primary text-text-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  #{tag}
                </button>
              ))}
            </div>

            {/* Category Filter Pills & Global Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-border/60">
              <div className="flex flex-wrap items-center gap-2">
                {faqCategories.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  const count =
                    cat.id === "all"
                      ? faqItems.length
                      : faqItems.filter((i) => i.category === cat.id).length;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                        isActive
                          ? "bg-text-primary text-white shadow-md shadow-text-primary/10"
                          : "bg-surface-alt text-text-secondary hover:bg-neutral-100 hover:text-text-primary"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-neutral-200/80 text-text-secondary"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Expand / Collapse All */}
              <div className="flex items-center gap-3 text-xs font-semibold text-text-secondary flex-shrink-0">
                <button
                  type="button"
                  onClick={expandAll}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Expand All
                </button>
                <span className="text-border">|</span>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="hover:text-primary transition-colors cursor-pointer"
                >
                  Collapse All
                </button>
              </div>
            </div>

            {/* Search Results Notification */}
            {searchQuery && (
              <div className="mb-6 flex items-center justify-between text-sm text-text-secondary bg-surface-alt px-4 py-2.5 rounded-xl border border-border">
                <span>
                  Found <strong className="text-text-primary">{filteredFaqs.length}</strong> matching questions for &ldquo;{searchQuery}&rdquo;
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-primary font-medium hover:underline text-xs cursor-pointer"
                >
                  Reset filter
                </button>
              </div>
            )}

            {/* Accordion Items List */}
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 bg-surface-alt rounded-2xl border border-dashed border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary">No matching questions found</h3>
                <p className="text-sm text-text-secondary mt-1 max-w-sm mx-auto">
                  Try adjusting your search terms or select another category filter above.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-5 px-4 py-2 rounded-xl bg-text-primary text-white text-xs font-semibold hover:bg-primary transition-colors"
                >
                  View All Questions
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = !!openItems[faq.id];
                  const feedback = feedbackState[faq.id];
                  const formattedIndex = String(index + 1).padStart(2, "0");

                  return (
                    <div
                      key={faq.id}
                      id={faq.id}
                      className={`rounded-2xl transition-all duration-300 border ${
                        isOpen
                          ? "bg-white border-primary/30 shadow-lg shadow-primary/5 ring-1 ring-primary/20"
                          : "bg-white border-border hover:border-neutral-300 hover:shadow-sm"
                      }`}
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        type="button"
                        onClick={() => toggleItem(faq.id)}
                        className="w-full py-5 px-6 sm:px-8 flex items-start justify-between text-left gap-4 cursor-pointer focus:outline-none"
                        aria-expanded={isOpen}
                      >
                        <div className="flex items-start gap-4 sm:gap-5 flex-1">
                          <span className="font-mono text-xs sm:text-sm font-bold text-primary mt-1 px-2 py-0.5 rounded bg-primary/10">
                            {formattedIndex}
                          </span>
                          <div>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-text-tertiary mb-1">
                              {faq.categoryLabel}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold font-display text-text-primary leading-snug">
                              {faq.question}
                            </h3>
                          </div>
                        </div>

                        {/* Toggle Icon */}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                            isOpen
                              ? "bg-primary text-white rotate-45 shadow-md shadow-primary/30"
                              : "bg-surface-alt border border-border text-text-secondary hover:bg-neutral-100"
                          }`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </div>
                      </button>

                      {/* Accordion Expandable Content */}
                      {isOpen && (
                        <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-border/40 text-text-secondary text-sm sm:text-base leading-relaxed animate-fade-in">
                          <p className="mb-4">{faq.answer}</p>

                          {/* Highlights Pills */}
                          {faq.highlights && faq.highlights.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border/30">
                              <span className="text-xs font-semibold text-text-primary uppercase tracking-wider mr-1">
                                Key Standard:
                              </span>
                              {faq.highlights.map((h, i) => (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-alt border border-border/80 text-xs font-medium text-text-primary"
                                >
                                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-primary">
                                    <polyline points="20 6 9 17 4 12" />
                                  </svg>
                                  {h}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Interactive Footer: Was this helpful + Copy link */}
                          <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-border/40 text-xs text-text-tertiary">
                            <div className="flex items-center gap-3">
                              <span>Was this answer clear?</span>
                              {feedback ? (
                                <span className="text-primary font-semibold flex items-center gap-1">
                                  ✓ Thank you for your feedback!
                                </span>
                              ) : (
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => handleFeedback(faq.id, "helpful")}
                                    className="px-2.5 py-1 rounded-lg border border-border bg-surface-alt hover:border-primary hover:text-primary transition-colors cursor-pointer"
                                  >
                                    👍 Helpful
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => handleFeedback(faq.id, "unhelpful")}
                                    className="px-2.5 py-1 rounded-lg border border-border bg-surface-alt hover:border-primary hover:text-primary transition-colors cursor-pointer"
                                  >
                                    👎 Could be clearer
                                  </button>
                                </div>
                              )}
                            </div>

                            <button
                              type="button"
                              onClick={() => handleCopyLink(faq.id)}
                              className="inline-flex items-center gap-1.5 hover:text-text-primary transition-colors cursor-pointer"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                              </svg>
                              {copiedId === faq.id ? "Link copied!" : "Copy question link"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* ─── Concierge Callout Card ─── */}
            <div className="mt-16 rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-[#0a0a0a] text-white border border-neutral-800 shadow-2xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px] pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-light text-xs font-bold uppercase tracking-wider mb-4 border border-primary/30">
                    Direct Concierge
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                    Have a unique technical or strategic requirement?
                  </h3>
                  <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
                    We review briefs within 24 hours. Schedule an executive discovery session or send us your scope for a candid feasibility assessment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="lg"
                    className="justify-center shadow-lg shadow-primary/30"
                  >
                    Send Project Brief
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Button>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-neutral-700 bg-neutral-900/80 text-neutral-300 hover:text-white hover:border-neutral-500 text-sm font-semibold transition-colors"
                  >
                    Email: {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
