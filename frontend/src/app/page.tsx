import { Ambient } from "@/components/landing/ambient";
import { LandingFooter } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { LandingNav } from "@/components/landing/nav";
import { HowItWorks } from "@/components/landing/steps";
import { FeatureTicker } from "@/components/landing/ticker";

export default function LandingPage() {
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <Ambient />
      <LandingNav />

      <main id="main">
        <Hero />
        <FeatureTicker />
        <HowItWorks />
      </main>

      <LandingFooter />
    </div>
  );
}
