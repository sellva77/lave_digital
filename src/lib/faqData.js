export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "engagement", label: "Engagement & Pricing" },
  { id: "engineering", label: "Engineering & Architecture" },
  { id: "branding", label: "Brand & Creative Direction" },
  { id: "distribution", label: "Content Distribution" },
  { id: "process", label: "Process & Deliverables" },
];

export const faqItems = [
  {
    id: "pricing-models",
    category: "engagement",
    categoryLabel: "Engagement & Pricing",
    question: "How does Lave Digital structure pricing and contracts?",
    answer:
      "We operate under two transparent engagement models tailored to your stage and scope: Fixed-Scope Sprints and Dedicated Retainers. For defined deliverables (e.g., brand identity system, custom Next.js web application, or product launch), we provide fixed-scope proposals with guaranteed milestones and zero hidden fees. For continuous product evolution, ongoing UI/UX iterations, and high-velocity content distribution, we operate on monthly retainers with reserved dedicated design and engineering bandwidth. Every engagement includes transparent sprint roadmaps, weekly demo sessions, and shared project channels.",
    highlights: ["Fixed-Scope Milestones", "Dedicated Monthly Retainers", "Zero Hidden Fees"],
  },
  {
    id: "ip-code-ownership",
    category: "engagement",
    categoryLabel: "Engagement & Pricing",
    question: "Do we retain 100% intellectual property and code ownership?",
    answer:
      "Yes, unconditionally. Upon receipt of final payment, all intellectual property—including source code repositories, Figma design systems, vector brand files, 3D assets, custom typography licenses, and raw video rushes—transfers completely to your organization. We never hold your assets hostage, lock you into proprietary CMS black boxes, or charge exit fees. You receive clean, documented Git repositories ready for in-house handover at any moment.",
    highlights: ["100% IP Transfer", "No Proprietary Lock-In", "Full Git Repositories"],
  },
  {
    id: "timeline-turnarounds",
    category: "process",
    categoryLabel: "Process & Deliverables",
    question: "What is your typical project timeline from kickoff to deployment?",
    answer:
      "Our sprint model is engineered for momentum without compromising craftsmanship. Brand identity sprints typically take 3 to 5 weeks from initial immersion to complete design guidelines. Custom web application design and engineering sprints run 6 to 10 weeks depending on integrations and API complexity. Content distribution engines are initiated within 7 business days of brand asset onboarding. We operate in rapid 1-to-2 week agile cycles with weekly live staging demos so you see tangible progress every single Friday.",
    highlights: ["3–5 Weeks: Brand Systems", "6–10 Weeks: Web Applications", "Weekly Live Staging Demos"],
  },
  {
    id: "tech-stack-decisions",
    category: "engineering",
    categoryLabel: "Engineering & Architecture",
    question: "Why do you engineer in Next.js, React, and modern headless architectures?",
    answer:
      "We build exclusively on modern, high-performance web stacks—primarily Next.js (App Router), React, TypeScript, and modern headless APIs (Sanity, Strapi, Shopify Storefront). Traditional monolithic CMS architectures (like legacy WordPress) suffer from security vulnerabilities, slow database queries, and rigid templates that dilute brand identity. Next.js gives our clients sub-second page loads, near-perfect Core Web Vitals, enterprise-grade edge caching, ironclad security, and custom editorial freedom without technical debt.",
    highlights: ["Next.js App Router", "Sub-second Page Loads", "Headless CMS Flexibility", "Zero Bloated Plugins"],
  },
  {
    id: "design-system-integration",
    category: "branding",
    categoryLabel: "Brand & Creative Direction",
    question: "How do you ensure our visual identity translates seamlessly into digital products?",
    answer:
      "We treat branding and digital engineering as a singular continuum rather than separate handoffs. Our design team builds multi-token design systems directly in Figma with strict naming tokens (color scales, spatial grids, fluid typography scales, micro-interaction states) that map 1:1 with CSS variables and React component properties. When engineering begins, there is zero guesswork or aesthetic degradation—your digital product feels like an organic extension of your physical and editorial brand.",
    highlights: ["1:1 Figma to Code Tokens", "Fluid Responsive Typography", "Custom Micro-Interactions"],
  },
  {
    id: "content-distribution-engine",
    category: "distribution",
    categoryLabel: "Content Distribution",
    question: "What makes Lave Digital's Content Distribution engine different from traditional social agencies?",
    answer:
      "Most agencies churn out generic, disjointed social posts that vanish in hours. Our 1-to-10 Multiplier Engine takes your high-value anchor assets—such as a founder keynote, podcast, whitepaper, or client case study—and methodically deconstructs it into 15 to 25 platform-native assets: LinkedIn visual carousels, executive thought leadership essays, high-retention YouTube Shorts, Instagram aesthetic reels, and newsletter dispatches. Every piece is tailored to each algorithm's psychology while reinforcing your unified brand prestige.",
    highlights: ["1 Anchor Idea → 25 Assets", "Algorithm-Native Optimization", "Executive Voice Calibration"],
  },
  {
    id: "communication-collaboration",
    category: "process",
    categoryLabel: "Process & Deliverables",
    question: "How do we communicate and track sprint progress during our partnership?",
    answer:
      "We integrate seamlessly into your existing executive rhythm. Kickoffs occur via shared private Slack or Teams channels for rapid asynchronous check-ins, accompanied by an interactive Notion or Linear project hub detailing active sprint tasks, blockers, and timelines. We hold structured weekly 30-minute syncs to review deployed staging builds and gather feedback. You always communicate directly with senior strategists and lead engineers—never junior account managers.",
    highlights: ["Direct Senior Access", "Private Slack / Teams Channel", "Live Staging URLs"],
  },
  {
    id: "international-timezones",
    category: "process",
    categoryLabel: "Process & Deliverables",
    question: "Do you work with international clients across diverse time zones?",
    answer:
      "Over 65% of our client partners are based across North America, Europe, the Middle East, and Asia-Pacific. We have refined an asynchronous-first operating model: detailed Loom video walk-throughs for design reviews, unambiguous PR reviews, and overlapping working hours scheduled for live milestone alignment. You receive continuous forward momentum around the clock.",
    highlights: ["Global Client Base", "Asynchronous Sprint Rhythm", "Loom Video Walkthroughs"],
  },
  {
    id: "maintenance-hosting-sla",
    category: "engineering",
    categoryLabel: "Engineering & Architecture",
    question: "What happens after launch? Do you provide ongoing maintenance and SLAs?",
    answer:
      "Every production launch includes 30 days of comprehensive hypercare support covering bug fixes, performance monitoring, and analytics calibration at zero additional charge. After this stabilization window, clients can transition into our Growth & Engineering Retainer for continuous feature development, third-party API updates, 99.9% uptime monitoring, and quarterly conversion optimization audits.",
    highlights: ["30-Day Hypercare Included", "Continuous Feature Retainers", "99.9% Uptime SLA Monitoring"],
  },
  {
    id: "revision-feedback-policy",
    category: "branding",
    categoryLabel: "Brand & Creative Direction",
    question: "How do you manage revisions and design feedback rounds?",
    answer:
      "We don't limit you to arbitrary 'two rounds of changes' that create tension. Instead, our sprints are structured around iterative phases: Discovery & Creative Direction, Foundational Architecture, and High-Fidelity Refinement. At each gate, we align on strategic objectives before advancing. Because feedback is calibrated against measurable business goals rather than subjective whims, revisions are swift, focused, and collaborative.",
    highlights: ["Milestone-Gated Reviews", "Objective-Driven Feedback", "Collaborative Figma Sessions"],
  },
];
