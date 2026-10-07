import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "About Us",
  description: "Learn more about Lave Digital, our passionate team, creative philosophy, and vision for digital transformation.",
};

const values = [
  {
    title: "Relentless Innovation",
    description: "We constantly explore emerging technologies and creative frontiers to deliver work that leads, rather than follows.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Precision Craftsmanship",
    description: "From typography and responsive layouts to smooth animations and clean code, we believe extraordinary design lives in the details.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </svg>
    ),
  },
  {
    title: "Measurable Impact",
    description: "Every visual asset, brand campaign, and website is engineered with clear business outcomes, conversion metrics, and ROI in mind.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "True Partnership",
    description: "We don't work for you — we work with you. Collaborative transparency and mutual trust drive our longest-standing relationships.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Aiden Vance",
    role: "Founder & Creative Director",
    bio: "Ex-agency lead with 10+ years shaping high-growth global brand narratives.",
    avatar: "AV",
  },
  {
    name: "Elena Rostova",
    role: "Head of Product & Design",
    bio: "Specializing in human-centered UI/UX systems and interactive design experiences.",
    avatar: "ER",
  },
  {
    name: "Marcus Chen",
    role: "Lead Systems Architect",
    bio: "Passionate about high-performance modern web stacks, 3D web, and headless architecture.",
    avatar: "MC",
  },
  {
    name: "Sophia Delgado",
    role: "Director of Digital Strategy",
    bio: "Bridging brand storytelling and multi-channel performance marketing.",
    avatar: "SD",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              About Lave Digital
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight">
              We Craft Digital Experiences That Leave A Lasting{" "}
              <span className="gradient-text">Impression</span>
            </h1>
            <p className="text-lg text-text-secondary mt-6 leading-relaxed">
              Founded on the belief that bold ideas and masterful execution redefine industries, Lave Digital partners with forward-thinking brands to accelerate growth, captivate audiences, and shape the digital future.
            </p>
          </div>
        </Container>
      </section>

      {/* Story & Philosophy */}
      <section className="py-20 bg-surface-alt">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Born from Passion, Built for Scale"
                highlightedWord="Scale"
                align="left"
              />
              <div className="space-y-4 text-text-secondary leading-relaxed mt-6">
                <p>
                  Lave Digital was born out of a desire to eliminate the gap between high-level brand strategy and tactile digital craft. We believe great design isn&apos;t just aesthetic decoration — it&apos;s a strategic lever for competitive advantage.
                </p>
                <p>
                  Today, our multidisciplinary collective works at the intersection of brand identity, digital product design, web engineering, and cinematic motion. We partner with ambitious startups and established market leaders across the globe.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {siteConfig.stats.map((s, i) => (
                  <div key={i} className="border-l-2 border-primary pl-4">
                    <div className="text-3xl font-bold font-display text-text-primary">{s.value}</div>
                    <div className="text-xs text-text-secondary mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Box */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-border bg-gradient-to-br from-surface to-surface-alt flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-white mb-6 shadow-xl shadow-primary/20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Our Guiding Principle</h3>
                <p className="text-sm text-text-secondary max-w-sm">
                  &ldquo;Simplicity is the ultimate sophistication. When clarity meets creative courage, extraordinary work happens.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Pillars"
            title="The Values That Guide Every Decision"
            highlightedWord="Values"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {values.map((v, i) => (
              <Card key={i} className="p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-surface-alt">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="Meet the Minds Behind the Magic"
            highlightedWord="Magic"
            description="A team united by a relentless drive for perfection and creative discovery."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {team.map((member, i) => (
              <Card key={i} className="p-6 text-center border border-border group hover:border-primary/40 transition-all">
                <div className="w-24 h-24 mx-auto rounded-full gradient-primary flex items-center justify-center text-white text-2xl font-bold font-display shadow-lg shadow-primary/20 mb-5 group-hover:scale-105 transition-transform">
                  {member.avatar}
                </div>
                <h3 className="text-lg font-bold text-text-primary">{member.name}</h3>
                <p className="text-xs font-semibold text-primary mt-1 uppercase tracking-wider">{member.role}</p>
                <p className="text-xs text-text-secondary mt-3 leading-relaxed">{member.bio}</p>
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
              Ready to work with our team?
            </h2>
            <p className="text-text-on-dark-secondary mb-8 leading-relaxed">
              We&apos;re currently accepting new projects. Let&apos;s build something that stands out and delivers real growth.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get In Touch With Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
