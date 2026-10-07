// "use client";

// import { useEffect, useRef, useState } from "react";
// import Container from "@/components/ui/Container";

// const faqs = [
//   {
//     question: "What is Content Distribution and why is it essential?",
//     answer:
//       "Instead of creating one-off posts that disappear in hours, Content Distribution takes a single high-value anchor idea—such as a keynote, founder insight, client case study, or long-form video—and strategically multiplies it into LinkedIn carousels, YouTube Shorts, Instagram Reels, and thought-leadership posts. This maximizes ROI and multiplies your organic reach across every platform that matters.",
//   },
//   {
//     question: "How do you adapt one core idea across different platforms?",
//     answer:
//       "Each social platform has a distinct audience psychology and algorithmic format. LinkedIn favors structured frameworks and executive commentary; Instagram thrives on aesthetic carousels and short-form storytelling; YouTube demands retention hooks and long-form cinematic value. We adapt the core message into native formats tailored specifically for each platform's recommendation engine.",
//   },
//   {
//     question: "What is your typical turnaround time for content delivery?",
//     answer:
//       "Our sprint cycle delivers approved weekly or monthly content batches within 3 to 5 business days. All assets—including video edits, carousel slides, thumbnail graphics, and copy—are queued and ready for your sign-off well ahead of the publishing calendar.",
//   },
//   {
//     question: "Do you handle publishing and account management?",
//     answer:
//       "Yes. We offer both asset-only delivery (for in-house marketing teams) and end-to-end managed distribution, where we schedule posts, optimize captions, monitor comments, and provide transparent monthly analytics reports detailing reach and conversion metrics.",
//   },
//   {
//     question: "Can we integrate our existing brand guidelines and design systems?",
//     answer:
//       "Absolutely. We begin every client partnership with a brand immersion session to codify your typography, color palettes, visual motifs, and brand voice. Every distributed asset feels undeniably proprietary to your company.",
//   },
//   {
//     question: "How do we get started with Lave Digital?",
//     answer:
//       "Simply schedule an initial discovery call or submit a brief through our contact section. We'll analyze your current content output, pinpoint growth opportunities, and propose a tailored multi-platform distribution strategy.",
//   },
// ];

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState(0); // first item open by default
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) entry.target.classList.add("revealed");
//         });
//       },
//       { threshold: 0.1 }
//     );
//     section.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <section
//       ref={sectionRef}
//       id="faq"
//       data-theme="light"
//       className="py-20 sm:py-28 lg:py-32 bg-white text-neutral-950 border-t border-neutral-100 relative"
//     >
//       <Container>
//         {/* ─── Header (Matching "FAQ" in Screenshot) ─── */}
//         <div className="reveal mb-12 sm:mb-16">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-neutral-950">
//             FAQ
//           </h2>
//           <p className="text-base sm:text-lg text-neutral-500 font-normal mt-3 max-w-xl">
//             Frequently asked questions about our process, distribution models, and deliverables.
//           </p>
//         </div>

//         {/* ─── Accordion List ─── */}
//         <div className="reveal max-w-4xl space-y-4">
//           {faqs.map((faq, index) => {
//             const isOpen = openIndex === index;

//             return (
//               <div
//                 key={index}
//                 className={`rounded-2xl transition-all duration-300 border ${
//                   isOpen
//                     ? "bg-neutral-50/80 border-neutral-300/80 shadow-sm"
//                     : "bg-white border-neutral-200/70 hover:border-neutral-300"
//                 }`}
//               >
//                 <button
//                   type="button"
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
//                   aria-expanded={isOpen}
//                 >
//                   <span className="text-base sm:text-lg font-bold font-display text-neutral-900 leading-snug">
//                     {faq.question}
//                   </span>

//                   {/* Plus / Minus or Chevron Indicator */}
//                   <div
//                     className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
//                       isOpen
//                         ? "bg-neutral-900 text-white rotate-45"
//                         : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
//                     }`}
//                   >
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2.5"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     >
//                       <line x1="12" y1="5" x2="12" y2="19" />
//                       <line x1="5" y1="12" x2="19" y2="12" />
//                     </svg>
//                   </div>
//                 </button>

//                 {/* Collapsible Answer */}
//                 <div
//                   className={`grid transition-all duration-300 ease-in-out ${
//                     isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
//                   }`}
//                 >
//                   <div className="overflow-hidden">
//                     <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-200/40">
//                       {faq.answer}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </section>
//   );
// }
