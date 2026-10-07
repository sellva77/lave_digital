"use client";

import Container from "@/components/ui/Container";

const stats = [
  {
    number: "100+",
    label: "BRANDS TRANSFORMED",
  },
  {
    number: "50+",
    label: "CELEBRITY PARTNERS",
  },
  {
    number: "10M+",
    label: "AUDIENCE REACHED",
  },
];

export default function StatsRibbon() {
  return (
    <section data-theme="light" className="bg-white text-black py-16 sm:py-20 md:py-24 border-y border-neutral-200 relative select-none">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-start text-left ${
                i === 0
                  ? "pb-8 md:pb-0 md:pr-12"
                  : i === 1
                  ? "py-8 md:py-0 md:px-12"
                  : "pt-8 md:pt-0 md:pl-12"
              }`}
            >
              <div className="text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] font-black font-display tracking-tight text-neutral-950 leading-none hover:text-[#e60000] transition-colors duration-200">
                {stat.number}
              </div>
              <div className="text-xs sm:text-[13px] font-bold tracking-[0.14em] uppercase text-neutral-600 mt-5 sm:mt-6">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
