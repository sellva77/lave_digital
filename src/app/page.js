import Hero from "@/components/sections/Hero";
import StatsRibbon from "@/components/sections/StatsRibbon";
import BrandPartners from "@/components/sections/BrandPartners";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import WorkPreview from "@/components/sections/WorkPreview";
import ContentDistribution from "@/components/sections/ContentDistribution";
// import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import ContactPreview from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Stats Ribbon (100+ | 50+ | 10M+) */}
      <StatsRibbon />

      {/* Brands That Create Magic With Us */}
      <ServicesPreview />
      <AboutPreview />
      <BrandPartners />

      <WorkPreview />

      {/* Content Distribution Multi-Channel Ecosystem */}
      <ContentDistribution />

      {/* Frequently Asked Questions */}
      {/* <FAQ /> */}

      <Testimonials />

      <CTA />

      <ContactPreview />
    </>
  );
}
