import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { services } from "@/lib/services";

export const metadata = {
  title: "Services & Capabilities",
  description: "Explore our comprehensive suite of creative branding, web development, UI/UX design, digital marketing, and video production services.",
};

const serviceDetails = {
  branding: {
    tagline: "Distinguish your business with an iconic, memorable identity.",
    deliverables: [
      "Visual Identity System & Logo Guidelines",
      "Tone of Voice & Messaging Architecture",
      "Brand Collateral & Marketing Toolkits",
      "Packaging, Merchandise & Print Production",
      "Rebranding Strategy & Brand Architecture",
    ],
  },
  web: {
    tagline: "High-performance digital platforms engineered for speed, conversions, and scale.",
    deliverables: [
      "Custom Next.js & React Web Applications",
      "Enterprise E-Commerce Platforms (Shopify, Headless)",
      "Headless CMS Architectures & Integrations",
      "SEO, Core Web Vitals & Speed Optimization",
      "Custom Web Portals & Web-based Software",
    ],
  },
  uiux: {
    tagline: "Intuitive, human-centered interfaces that delight users and drive engagement.",
    deliverables: [
      "In-depth User Research & Journey Mapping",
      "Interactive Wireframes & High-Fidelity Prototypes",
      "Complete Scalable Multi-Brand Design Systems",
      "Mobile App UI/UX (iOS & Android)",
      "Usability Audits & Conversion Rate Optimization",
    ],
  },
  marketing: {
    tagline: "Targeted campaigns and organic growth engines that deliver measurable ROI.",
    deliverables: [
      "Full-Funnel Performance Marketing (Paid Ads, Meta, Google)",
      "Comprehensive SEO & Content Strategy",
      "Social Media Management & Creative Production",
      "Lifecycle & Email Marketing Automation",
      "Analytics Setup, Dashboards & Attribution Modeling",
    ],
  },
  video: {
    tagline: "High-impact visual storytelling that captivates attention and builds emotional loyalty.",
    deliverables: [
      "Brand Films & Commercial Video Production",
      "Product Showcases & 3D Motion Graphics",
      "Social-First Short-Form Video (Reels, TikTok, Shorts)",
      "Studio Photography & Creative Direction",
      "Post-Production, Color Grading & Sound Design",
    ],
  },
};

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Comprehensive Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              Full-Spectrum Creative & <span className="gradient-text">Digital Mastery</span>
            </h1>
            <p className="text-lg text-text-secondary mt-6 leading-relaxed">
              We engineer bespoke digital solutions that solve real business challenges. From foundational brand strategies to high-performing digital platforms, our work is calibrated for maximum impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List Detailed */}
      <section className="py-12">
        <Container>
          <div className="space-y-16">
            {services.map((service, index) => {
              const details = serviceDetails[service.id] || {
                tagline: service.description,
                deliverables: service.features,
              };

              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="scroll-mt-32 p-8 sm:p-12 rounded-3xl border border-border bg-surface hover:border-primary/40 transition-all shadow-sm hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className={`grid lg:grid-cols-12 gap-10 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    <div className="lg:col-span-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10">
                          Capability #{String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="text-3xl font-display font-bold text-text-primary">
                        {service.title}
                      </h2>
                      <p className="text-base text-primary font-medium mt-2">
                        {details.tagline}
                      </p>
                      <p className="text-sm text-text-secondary mt-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mt-8 flex items-center gap-4">
                        <Button href="/contact" variant="primary" size="md">
                          Start a {service.shortTitle} Project
                        </Button>
                      </div>
                    </div>

                    <div className="lg:col-span-6">
                      <Card className="p-6 sm:p-8 bg-surface-alt border border-border/80">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-5 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          Key Deliverables & Scope
                        </h3>
                        <ul className="space-y-3.5">
                          {details.deliverables.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-text-secondary">
                              <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Process / Working Model */}
      <section className="py-24 bg-surface-alt mt-20">
        <Container>
          <SectionHeading
            eyebrow="Execution"
            title="How We Deliver Excellence"
            highlightedWord="Excellence"
            description="A battle-tested 4-step framework designed to deliver predictability, quality, and velocity."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              { num: "01", title: "Discovery & Audit", text: "Deep dive into your market landscape, competitive differentiators, and core objectives." },
              { num: "02", title: "Strategy & Blueprint", text: "Comprehensive architecture, user experience journey, and technical requirements mapped out." },
              { num: "03", title: "Design & Development", text: "Iterative sprints with full visibility, rapid prototyping, and high-fidelity creation." },
              { num: "04", title: "Launch & Growth", text: "Flawless deployment, quality assurance, performance monitoring, and post-launch scaling." },
            ].map((step, idx) => (
              <Card key={idx} className="p-6 border border-border">
                <div className="text-3xl font-display font-bold text-primary mb-3">{step.num}</div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{step.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 gradient-dark text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4">
              Need a customized package?
            </h2>
            <p className="text-text-on-dark-secondary mb-8 leading-relaxed">
              We tailor our services to align with your specific timelines, tech stack, and growth milestones.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request a Custom Proposal
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
