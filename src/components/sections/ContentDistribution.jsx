"use client";

import { useEffect, useRef, useState } from "react";
import InteractiveCat from "@/components/ui/InteractiveCat";

const nodes = [
  {
    id: "linkedin-posts",
    title: "LinkedIn Posts",
    src: "/socials/linkedin.svg",
    transform: "translate(0px, -310px)",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-gray-500">
        <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
        <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
    ),
  },
  {
    id: "linkedin-carousels",
    title: "LinkedIn Carousels",
    src: "/socials/linkedin.svg",
    transform: "translate(242.36775956508924px, -193.28183857620738px)",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images text-gray-500">
        <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path>
        <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path>
        <circle cx="13" cy="7" r="1" fill="currentColor"></circle>
        <rect x="8" y="2" width="14" height="14" rx="2"></rect>
      </svg>
    ),
  },
  {
    id: "instagram-reels",
    title: "Instagram Reels",
    src: "/socials/instagram.svg",
    transform: "translate(302.22765277636535px, 68.9814895264575px)",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film text-gray-500">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M7 3v18"></path>
        <path d="M3 7.5h4"></path>
        <path d="M3 12h18"></path>
        <path d="M3 16.5h4"></path>
        <path d="M17 3v18"></path>
        <path d="M17 7.5h4"></path>
        <path d="M17 16.5h4"></path>
      </svg>
    ),
  },
  {
    id: "instagram-carousels",
    title: "Instagram Carousels",
    src: "/socials/instagram.svg",
    transform: "translate(134.50395912644308px, 279.3003490497499px)",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images text-gray-500">
        <path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path>
        <path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path>
        <circle cx="13" cy="7" r="1" fill="currentColor"></circle>
        <rect x="8" y="2" width="14" height="14" rx="2"></rect>
      </svg>
    ),
  },
  {
    id: "youtube-shorts",
    title: "YouTube Shorts",
    src: "/socials/youtube.svg",
    transform: "translate(-134.5039591264431px, 279.30034904974985px)",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film text-gray-500">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M7 3v18"></path>
        <path d="M3 7.5h4"></path>
        <path d="M3 12h18"></path>
        <path d="M3 16.5h4"></path>
        <path d="M17 3v18"></path>
        <path d="M17 7.5h4"></path>
        <path d="M17 16.5h4"></path>
      </svg>
    ),
  },
  {
    id: "youtube-longform",
    title: "YouTube Long-form",
    src: "/socials/youtube.svg",
    transform: "translate(-302.22765277636535px, 68.9814895264575px)",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video text-gray-500">
        <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
        <rect x="2" y="6" width="14" height="12" rx="2"></rect>
      </svg>
    ),
  },
  {
    id: "facebook-reels",
    title: "Facebook Reels",
    src: "/socials/facebook.svg",
    transform: "translate(-242.36775956508927px, -193.28183857620735px)",
    badgeIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-film text-gray-500">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M7 3v18"></path>
        <path d="M3 7.5h4"></path>
        <path d="M3 12h18"></path>
        <path d="M3 16.5h4"></path>
        <path d="M17 3v18"></path>
        <path d="M17 7.5h4"></path>
        <path d="M17 16.5h4"></path>
      </svg>
    ),
  },
];

export default function ContentDistribution() {
  const [activeId, setActiveId] = useState(null);
  const sectionRef = useRef(null);

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
    <section
      ref={sectionRef}
      id="content-distribution"
      data-theme="light"
      className="py-12 md:py-20 lg:py-24 bg-white relative overflow-hidden flex flex-col items-center justify-center select-none"
    >
      {/* Background Grid Pattern with Radial Vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Header Container */}
      <div className="container mx-auto px-6 mb-2 md:mb-8 relative z-10 text-left w-full max-w-7xl">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display text-neutral-950 tracking-tight mb-4 sm:mb-6 md:mb-8">
          Content Distribution.
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 max-w-3xl">
          One core idea, multiplied across every platform that matters.
        </p>
      </div>

      {/* Animated Hub Diagram Canvas */}
      <div className="relative w-[800px] h-[800px] flex items-center justify-center scale-[0.45] xs:scale-[0.52] sm:scale-75 md:scale-100 -my-48 sm:-my-20 md:my-0">
        
        {/* Orbiting Platform Nodes */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center w-32 -ml-16 -mt-10 pointer-events-auto"
              style={{ transform: node.transform }}
              onMouseEnter={() => setActiveId(node.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mb-3 z-10 relative group hover:scale-110 transition-transform duration-300 cursor-pointer">
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <img
                    alt={node.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain"
                    src={node.src}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 border border-gray-100 shadow-sm flex items-center justify-center">
                  {node.badgeIcon}
                </div>
              </div>
              <span
                className={`text-sm font-medium text-center leading-tight bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg transition-colors duration-200 ${
                  activeId === node.id ? "text-neutral-950 font-semibold" : "text-gray-600"
                }`}
              >
                {node.title}
              </span>
            </div>
          ))}
        </div>

        {/* Dashed Outer Circle Rotating Counter-Clockwise */}
        <div
          className="absolute inset-0 flex items-center justify-center z-0 animate-spin-reverse-slow pointer-events-none"
          style={{ willChange: "transform" }}
        >
          <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-80">
            <circle
              cx="300"
              cy="300"
              r="230"
              stroke="#f3f4f6"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>
        </div>

        {/* Iridescent Rainbow Concentric Rings Rotating Clockwise */}
        <div
          className="absolute inset-0 flex items-center justify-center z-10 animate-spin-slow pointer-events-none"
          style={{ willChange: "transform" }}
        >
          <svg width="600" height="600" viewBox="0 0 600 600" className="opacity-80">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FACC15" stopOpacity="1" />
                <stop offset="25%" stopColor="#22D3EE" stopOpacity="1" />
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="1" />
                <stop offset="75%" stopColor="#A855F7" stopOpacity="1" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="1" />
              </linearGradient>
            </defs>
            <circle
              cx="300"
              cy="300"
              r="200"
              stroke="url(#ringGradient)"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="300"
              cy="300"
              r="195"
              stroke="url(#ringGradient)"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <circle
              cx="300"
              cy="300"
              r="205"
              stroke="url(#ringGradient)"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Center Node: Interactive LAVE Blob Mascot */}
        <div className="absolute z-30 flex items-center justify-center">
          <div className="flex items-center justify-center relative z-10 cursor-default group hover:scale-105 transition-transform duration-300" style={{ width: "220px", height: "220px" }}>
            <div className="relative z-10 flex items-center justify-center" style={{ transform: "scale(0.75)" }}>
              <InteractiveCat />
            </div>
          </div>
          {/* Pulsing Red Glow Effect */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              width: "220px",
              height: "220px",
              background: "radial-gradient(circle, rgba(230,0,0,0.15) 0%, rgba(230,0,0,0.05) 60%, transparent 75%)",
              animation: "pulse 2.5s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
