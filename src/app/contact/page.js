"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/lib/site";

const faqs = [
  {
    q: "What is your typical project timeline?",
    a: "Timelines vary depending on project complexity. Standard brand identity sprints typically take 3-5 weeks, custom web design and engineering 6-10 weeks, and full-scale digital ecosystem builds 12+ weeks.",
  },
  {
    q: "How do you handle project pricing?",
    a: "We structure our pricing on either a value-driven project basis or a monthly retainer for continuous design, engineering, and growth marketing partnership.",
  },
  {
    q: "Do you collaborate with international clients?",
    a: "Yes! Over 60% of our client partners are based outside our home region. We use asynchronous workflows, modern collaboration tools, and structured sprint reviews across global time zones.",
  },
  {
    q: "What happens after the project launches?",
    a: "We don't abandon you at launch. Every project includes 30 days of post-launch stabilization support, plus optional continuous growth, maintenance, and optimization retainers.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Web Design & Development",
    budget: "$10k - $25k",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Let&apos;s Connect
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              Start a Conversation. <br />
              <span className="gradient-text">Build Something Bold.</span>
            </h1>
            <p className="text-lg text-text-secondary mt-6 leading-relaxed">
              Whether you have an upcoming project, need strategic brand clarity, or want to discuss a long-term partnership, we&apos;re here to help.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="py-12">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-8 sm:p-10 border border-border shadow-xl shadow-surface-dark/5">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-primary/20">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-text-primary">
                      Thank You for Reaching Out!
                    </h3>
                    <p className="text-sm text-text-secondary mt-3 max-w-md mx-auto leading-relaxed">
                      We have received your message. Our team will review your brief and get back to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 text-sm font-semibold text-primary hover:underline cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold font-display text-text-primary mb-1">
                        Tell Us About Your Project
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Fill out the details below and we&apos;ll schedule an introductory consultation.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Jane Doe"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                          Company / Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Company name"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                          Service Needed
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                        >
                          <option>Branding & Identity</option>
                          <option>Web Design & Development</option>
                          <option>UI/UX Design</option>
                          <option>Digital Marketing</option>
                          <option>Video Production</option>
                          <option>Other / Full Package</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Estimated Budget (USD)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {["< $10k", "$10k - $25k", "$25k - $50k", "$50k+"].map((b) => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                              formData.budget === b
                                ? "bg-primary text-white border-primary shadow-sm"
                                : "bg-surface-alt text-text-secondary border-border hover:border-primary/50"
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-text-primary uppercase tracking-wider mb-2">
                        Project Overview *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your brand, goals, target timeline, or what problem you're looking to solve..."
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                      Submit Brief
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Sidebar Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-8 border border-border">
                <h3 className="text-xl font-bold font-display text-text-primary mb-6">
                  Direct Inquiries
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase font-semibold text-text-secondary">Email Us</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-text-primary hover:text-primary transition-colors">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase font-semibold text-text-secondary">Call Us</div>
                      <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-sm font-bold text-text-primary hover:text-primary transition-colors">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs uppercase font-semibold text-text-secondary">Studio Location</div>
                      <div className="text-sm font-bold text-text-primary">
                        {siteConfig.address}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Working Hours */}
              <Card className="p-8 border border-border bg-surface-alt">
                <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-3">
                  Response Guarantee
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  We reply to all inquiries within 24 hours Monday through Friday (9:00 AM – 6:00 PM EST).
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs Section */}
      <section id="faq" className="py-20 bg-surface-alt mt-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Questions"
              title="Frequently Asked Questions"
              highlightedWord="Questions"
            />

            <div className="space-y-4 mt-12">
              {faqs.map((faq, i) => (
                <Card key={i} className="p-6 border border-border">
                  <h4 className="text-base font-bold text-text-primary mb-2">{faq.q}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
