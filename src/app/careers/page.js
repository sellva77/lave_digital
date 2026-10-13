"use client";

import { useState, useId } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { perks, hiringProcess, jobListings, candidateFaqs } from "@/lib/careersData";

// Icon helpers
function PerkIcon({ name }) {
  switch (name) {
    case "globe":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case "laptop":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    case "book":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      );
    case "heart":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "sparkles":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "chart":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="20" x2="12" y2="10" />
          <line x1="18" y1="20" x2="18" y2="4" />
          <line x1="6" y1="20" x2="6" y2="16" />
        </svg>
      );
    default:
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedJobId, setExpandedJobId] = useState(null);

  // Application Form State
  const [selectedRole, setSelectedRole] = useState(jobListings[0].title);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    portfolioUrl: "",
    linkedinUrl: "",
    experience: "3-5 years",
    coverNote: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const departments = ["All", "Design & Creative", "Engineering", "Marketing & Strategy", "Operations"];
  const locations = ["All", "Remote", "Hybrid"];

  // Filter listings
  const filteredJobs = jobListings.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesLoc =
      selectedLocation === "All" ||
      (selectedLocation === "Remote" && job.location.toLowerCase().includes("remote")) ||
      (selectedLocation === "Hybrid" && job.location.toLowerCase().includes("hybrid"));
    const matchesSearch =
      searchQuery.trim() === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      job.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDept && matchesLoc && matchesSearch;
  });

  const handleApplyClick = (jobTitle) => {
    setSelectedRole(jobTitle);
    // Smooth scroll to application form
    const formElement = document.getElementById("apply-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20">
      {/* ─── Hero Section ─── */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[130px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              We Are Hiring Worldwide
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight">
              Build The Next Era Of <br />
              <span className="gradient-text">Digital Excellence</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary mt-6 max-w-2xl mx-auto leading-relaxed">
              We&apos;re a collaborative collective of visionary designers, creative engineers, and brand strategists. Join us in shaping digital products that captivate millions.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="#open-roles" variant="primary" size="lg">
                View Open Positions
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </Button>
              <Button href="#apply-section" variant="outline-dark" size="lg">
                General Application
              </Button>
            </div>

            {/* Quick Metrics Ribbon */}
            <div className="mt-14 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-text-primary">100%</div>
                <div className="text-xs uppercase tracking-wider text-text-secondary mt-1 font-semibold">Remote & Flexible</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-text-primary">$2,000</div>
                <div className="text-xs uppercase tracking-wider text-text-secondary mt-1 font-semibold">Annual Learning Stipend</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-text-primary">48 Hrs</div>
                <div className="text-xs uppercase tracking-wider text-text-secondary mt-1 font-semibold">Guaranteed Feedback</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-text-primary">4.9 / 5</div>
                <div className="text-xs uppercase tracking-wider text-text-secondary mt-1 font-semibold">Team Culture Score</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Why Join Us / Perks Section ─── */}
      <section className="py-20 bg-surface-alt border-y border-border">
        <Container>
          <SectionHeading
            eyebrow="Benefits & Culture"
            title="Everything You Need To Do Your Best Work"
            highlightedWord="Best Work"
            description="We believe brilliant work happens when talented people are respected, autonomous, and equipped with first-class resources."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white border border-border hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <PerkIcon name={perk.icon} />
                </div>
                <h3 className="text-xl font-bold font-display text-text-primary mb-3">
                  {perk.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Open Positions Filter & Listings ─── */}
      <section id="open-roles" className="py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Open Positions"
              title="Find Your Next Chapter"
              highlightedWord="Chapter"
              description="Explore open opportunities across engineering, product design, brand identity, and operations."
            />

            {/* Filter Bar */}
            <div className="bg-surface-alt p-5 sm:p-6 rounded-2xl border border-border mb-10 shadow-sm space-y-5">
              {/* Search box */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by job title, skill (e.g. Next.js, Figma, Motion)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-white text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-text-tertiary hover:text-text-primary"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Department Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-text-tertiary mb-2">
                  Department
                </label>
                <div className="flex flex-wrap gap-2">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => setSelectedDept(dept)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                        selectedDept === dept
                          ? "bg-primary text-white shadow-sm"
                          : "bg-white text-text-secondary border border-border hover:border-primary/50"
                      }`}
                    >
                      {dept}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Pills */}
              <div className="flex items-center justify-between pt-2 border-t border-border/60">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-text-tertiary">
                    Location:
                  </span>
                  <div className="flex gap-1.5">
                    {locations.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => setSelectedLocation(loc)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer ${
                          selectedLocation === loc
                            ? "bg-text-primary text-white"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-xs font-semibold text-text-secondary">
                  Showing <span className="text-primary font-bold">{filteredJobs.length}</span> positions
                </div>
              </div>
            </div>

            {/* Job Listings List */}
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 px-4 rounded-2xl bg-surface-alt border border-dashed border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold font-display text-text-primary">No positions match your filter</h3>
                <p className="text-sm text-text-secondary mt-1 max-w-sm mx-auto">
                  Try tweaking your search keywords or send us a spontaneous pitch below.
                </p>
                <button
                  onClick={() => {
                    setSelectedDept("All");
                    setSelectedLocation("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => {
                  const isExpanded = expandedJobId === job.id;
                  return (
                    <div
                      key={job.id}
                      className="rounded-2xl border border-border bg-white hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-sm"
                    >
                      {/* Summary Row */}
                      <div className="p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1 space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-primary/10 text-primary">
                              {job.department}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-surface-alt text-text-secondary border border-border">
                              {job.location}
                            </span>
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-surface-alt text-text-secondary border border-border">
                              {job.type}
                            </span>
                            {job.featured && (
                              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-amber-500/15 text-amber-600 border border-amber-500/30">
                                High Priority
                              </span>
                            )}
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold font-display text-text-primary">
                            {job.title}
                          </h3>

                          <p className="text-sm text-text-secondary line-clamp-2 leading-relaxed">
                            {job.shortDescription}
                          </p>

                          {/* Skill Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {job.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 rounded text-[11px] font-medium bg-neutral-100 text-neutral-600"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-border">
                          <div className="text-left md:text-right">
                            <div className="text-xs uppercase font-bold text-text-tertiary">Comp</div>
                            <div className="text-sm font-bold text-text-primary whitespace-nowrap">{job.salary}</div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-text-secondary hover:text-text-primary border border-border hover:border-text-secondary transition-colors cursor-pointer"
                            >
                              {isExpanded ? "Hide Details" : "Details"}
                            </button>
                            <Button
                              onClick={() => handleApplyClick(job.title)}
                              variant="primary"
                              size="sm"
                              className="text-xs py-2 px-4"
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Accordion Detail Breakdown */}
                      {isExpanded && (
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-border/70 bg-surface-alt">
                          <div className="grid md:grid-cols-12 gap-6 pt-4">
                            <div className="md:col-span-8 space-y-4">
                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-2">
                                  About The Role
                                </h4>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                  {job.description}
                                </p>
                              </div>

                              <div>
                                <h4 className="text-sm font-bold uppercase tracking-wider text-text-primary mb-2">
                                  What We Look For
                                </h4>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, rIdx) => (
                                    <li key={rIdx} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2.5">
                                      <svg
                                        className="w-4 h-4 text-primary shrink-0 mt-0.5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polyline points="20 6 9 17 4 12" />
                                      </svg>
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className="md:col-span-4 bg-white p-5 rounded-xl border border-border space-y-4 flex flex-col justify-between">
                              <div className="space-y-3">
                                <div>
                                  <span className="text-[11px] uppercase font-bold text-text-tertiary">Experience Level</span>
                                  <div className="text-sm font-semibold text-text-primary">{job.experience}</div>
                                </div>
                                <div>
                                  <span className="text-[11px] uppercase font-bold text-text-tertiary">Workplace Model</span>
                                  <div className="text-sm font-semibold text-text-primary">{job.location}</div>
                                </div>
                                <div>
                                  <span className="text-[11px] uppercase font-bold text-text-tertiary">Package</span>
                                  <div className="text-sm font-semibold text-primary">{job.salary}</div>
                                </div>
                              </div>

                              <Button
                                onClick={() => handleApplyClick(job.title)}
                                variant="primary"
                                size="sm"
                                className="w-full justify-center"
                              >
                                Apply For This Role
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ─── Hiring Process (How We Hire) ─── */}
      <section className="py-20 bg-surface-alt border-y border-border">
        <Container>
          <SectionHeading
            eyebrow="Transparency"
            title="Our 4-Step Hiring Pipeline"
            highlightedWord="Hiring Pipeline"
            description="We respect your craft, your schedule, and your energy. No drawn-out bureaucratic loops."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {hiringProcess.map((step) => (
              <div
                key={step.step}
                className="p-7 rounded-2xl bg-white border border-border relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl font-display font-black text-primary/30 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold font-display text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <div className="inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary mb-3">
                    {step.timeframe}
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Interactive Application Section ─── */}
      <section id="apply-section" className="py-24 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                Join The Collective
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-text-primary">
                Submit Your Application
              </h2>
              <p className="text-sm text-text-secondary mt-2">
                Applying for an open role or sending an open invitation? Fill out the brief below.
              </p>
            </div>

            <Card className="p-8 sm:p-10 border border-border bg-white shadow-xl text-neutral-900">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6 shadow-xl shadow-primary/25">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-text-primary">
                    Application Received!
                  </h3>
                  <p className="text-sm text-text-secondary mt-3 max-w-md mx-auto leading-relaxed">
                    Thank you for applying to join Lave Digital as <span className="font-semibold text-primary">{selectedRole}</span>. We will review your portfolio and reach out within 48 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        portfolioUrl: "",
                        linkedinUrl: "",
                        experience: "3-5 years",
                        coverNote: "",
                      });
                    }}
                    className="mt-8 text-xs font-bold text-primary hover:underline cursor-pointer uppercase tracking-wider"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Selected Role */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                      Role Applied For *
                    </label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors font-medium"
                    >
                      {jobListings.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title} ({job.department})
                        </option>
                      ))}
                      <option value="Spontaneous / Pitch Your Dream Role">
                        ✨ Spontaneous Pitch / Dream Role
                      </option>
                    </select>
                  </div>

                  {/* Name and Email */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@work.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Portfolio & LinkedIn */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                        Portfolio / Website / GitHub URL *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://yourportfolio.design"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                        LinkedIn or Twitter (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedinUrl}
                        onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  {/* Experience Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                      Years of Relevant Experience
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {["1-2 years", "3-5 years", "6-8 years", "8+ years"].map((lvl) => (
                        <button
                          type="button"
                          key={lvl}
                          onClick={() => setFormData({ ...formData, experience: lvl })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                            formData.experience === lvl
                              ? "bg-primary text-white border-primary shadow-sm"
                              : "bg-surface-alt text-text-secondary border-border hover:border-primary/50"
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Intro pitch / Cover note */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2">
                      Tell Us About Yourself & What Excites You About Lave *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Share a standout project, why you love your craft, or what impact you want to create here..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-text-primary text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                    Submit Application
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Button>
                </form>
              )}
            </Card>
          </div>
        </Container>
      </section>

      {/* ─── Candidate FAQs ─── */}
      <section className="py-20 bg-surface-alt border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="Questions"
              title="Frequently Asked Questions"
              highlightedWord="Questions"
              description="Common questions about our compensation, contracts, time zones, and interview standards."
            />

            <div className="space-y-4 mt-12">
              {candidateFaqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-border shadow-sm">
                  <h4 className="text-base font-bold text-text-primary mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-text-secondary mb-4">
                Have an inquiry that isn&apos;t covered here?
              </p>
              <Button href="/contact" variant="outline-dark" size="sm">
                Get in Touch With Talent Operations
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
