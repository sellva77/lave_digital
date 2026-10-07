"use client";

import Container from "@/components/ui/Container";

// Real logo URLs from partner brands (hosted on vimimagic.in CDN for reference)
const BASE = "https://vimimagic.in/media";

const ALL_BRANDS = [
  // FNB
  { name: "Thenmanam",        logo: `${BASE}/Logo/FNB/thenmanam.png` },
  { name: "Star Briyani",     logo: `${BASE}/Logo/FNB/star-biriyani.png` },
  { name: "Ahmedia",          logo: `${BASE}/Logo/FNB/ahmedia.png` },
  { name: "Arusuvai Arasu",   logo: `${BASE}/Logo/FNB/arusuvai-arasu.png` },
  { name: "Una Villa",        logo: `${BASE}/Logo/FNB/una-villa.png` },
  { name: "Seeragam",         logo: `${BASE}/Logo/FNB/seeragam.png` },
  { name: "Arputhas",         logo: `${BASE}/Logo/FNB/arputhas.png` },
  { name: "Anil Foods",       logo: `${BASE}/Logo/FNB/anil.png` },
  { name: "Tosai",            logo: `${BASE}/Logo/FNB/tosai.png` },
  { name: "Veetu Saapadu",    logo: `${BASE}/Logo/FNB/veetu-sapadu.png` },
  // Construction & Retail
  { name: "Sameera Estates",  logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/sameera-estates.png` },
  { name: "Stone Hands",      logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/stone-hands.png` },
  { name: "Start Insights",   logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/start-insights.png` },
  { name: "Krish",            logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/krish.png` },
  { name: "Geo9",             logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/geo9.png` },
  { name: "Page3",            logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/page3.png` },
  { name: "HireMee",          logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/hiremee.png` },
  { name: "6 Overs",          logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/overs.png` },
  { name: "Fanly",            logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/fanly.png` },
  { name: "Nektinno",         logo: `${BASE}/Logo/CONSTRUCTION_RETAIL/nektinno.png` },
  // Education
  { name: "KSR Institutions", logo: `${BASE}/Logo/Education/ksr.png` },
  { name: "Thangam World School", logo: `${BASE}/Logo/Education/thangam-world-school.png` },
  { name: "Sairam Institutions",  logo: `${BASE}/Logo/Education/sairam-institutions.png` },
  { name: "Annapoorana Engineering", logo: `${BASE}/Logo/Education/annapoorana-engineering-college.png` },
  { name: "J.J. College",     logo: `${BASE}/Logo/Education/j-j-college.png` },
  { name: "Seil Learning",    logo: `${BASE}/Logo/Education/seil-learning.png` },
  { name: "Sowdambikaa",      logo: `${BASE}/Logo/Education/sowdambikaa.png` },
  { name: "St. Joseph's Garden School", logo: `${BASE}/Logo/Education/st-joseph-s-garden-school.png` },
  // Healthcare
  { name: "SIMS Hospital",    logo: `${BASE}/Logo/Health_care/sims-chennai.png` },
  { name: "SIMS Pharmacy",    logo: `${BASE}/Logo/Health_care/sims-pharmacy.png` },
  { name: "Rainbow Children's", logo: `${BASE}/Logo/Health_care/rainbow-children-s-hospital.png` },
  // NGO & Community
  { name: "Valliappa Foundation", logo: `${BASE}/Logo/NGO_Community/valliappa-foundation.png` },
  { name: "FICCI",            logo: `${BASE}/Logo/NGO_Community/ficci.png` },
  { name: "Alert Being",      logo: `${BASE}/Logo/NGO_Community/alert-being.png` },
  { name: "Ology",            logo: `${BASE}/Logo/NGO_Community/girls-olooy.png` },
  // Government
  { name: "StartupTN",        logo: `${BASE}/Logo/Government/startup-tn.png` },
  { name: "Naan Mudhalvan",   logo: `${BASE}/Logo/Government/naan-mudhalvan.png` },
];

// Split into 3 rows of roughly equal length
const ROW_1 = ALL_BRANDS.slice(0, 12);
const ROW_2 = ALL_BRANDS.slice(12, 26);
const ROW_3 = ALL_BRANDS.slice(26);

function MarqueeRow({ brands, direction = "left", speed = 40 }) {
  const animName = direction === "left" ? "marquee-left" : "marquee-right";
  // Duplicate the array for seamless infinite scroll
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-x-hidden overflow-y-visible py-3 md:py-4">
      <div
        className="flex items-center will-change-transform"
        style={{
          width: "max-content",
          gap: "3.25rem",
          animation: `${animName} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((brand, i) => (
          <span
            key={`${brand.name}-${i}`}
            className="network-partner-link flex-shrink-0"
            aria-hidden={i >= brands.length ? "true" : undefined}
          >
            <span className="network-partner-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={i >= brands.length ? "" : brand.name}
                className="network-partner-logo"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BrandPartners() {
  return (
    <section data-theme="light" className="bg-white text-neutral-900 pt-20 sm:pt-28 pb-16 sm:pb-24 select-none">
      <Container>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-neutral-900 tracking-tight text-left mb-8 sm:mb-12 leading-tight">
          Brands That Create Magic With Us
        </h2>
      </Container>

      {/* Logo Rows — full bleed with edge fade masks */}
      <div
        className="relative overflow-x-hidden overflow-y-visible py-6 md:py-8"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex flex-col gap-2 px-4 md:gap-3 md:px-8">
          <MarqueeRow brands={ROW_1} direction="left"  speed={38} />
          <MarqueeRow brands={ROW_2} direction="right" speed={45} />
          <MarqueeRow brands={ROW_3} direction="left"  speed={35} />
        </div>
      </div>
    </section>
  );
}
