// remove client directive to make this a Server Component
import { Reveal } from "@/components/reveal";
import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import FeaturesGrid from "@/components/sections/features-grid";
import BenefitsSection from "@/components/sections/benefits";
import Testimonials from "@/components/sections/testimonials";
import FounderQuote from "@/components/sections/founder-quote";
import Integrations from "@/components/sections/integrations";
import ComparisonSection from "@/components/sections/comparison";
import AiEfficiency from "@/components/sections/ai-efficiency";
import FaqSection from "@/components/sections/faq";
import CtaFinal from "@/components/sections/cta-final";
import Footer from "@/components/sections/footer";

const sections = [
  { key: "hero", Component: HeroSection },
  { key: "features", Component: FeaturesGrid },
  { key: "benefits", Component: BenefitsSection },
  { key: "testimonials", Component: Testimonials },
  { key: "founder", Component: FounderQuote },
  { key: "integrations", Component: Integrations },
  { key: "comparison", Component: ComparisonSection },
  { key: "ai", Component: AiEfficiency },
  { key: "faq", Component: FaqSection },
  { key: "cta", Component: CtaFinal },
];

export default function AnimatedSections() {
  return (
    <main className="min-h-screen bg-[#0F0F23] text-white">
      <Header />
      {sections.map(({ key, Component }, idx) => {
        const delay = idx === 0 ? 0.05 : Math.min(0.1 * (idx % 4), 0.25);
        return (
          <Reveal key={key} delay={delay}>
            <Component />
          </Reveal>
        );
      })}
      <Footer />
    </main>
  );
}