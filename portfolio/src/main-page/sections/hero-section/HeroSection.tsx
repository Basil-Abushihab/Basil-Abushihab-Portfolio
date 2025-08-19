import { HeroSectionIntroduction } from "@/main-page/sections/hero-section/components/hero-section-introduction/HeroSectionIntroduction";
import { TechStackOrbitSection } from "@/main-page/sections/hero-section/components/hero-section-tech-stack-orbit/TechStackOrbitSection";

export const HeroSection = () => {
  return <section>
    <div className="flex flex-col w-full items-center relative md:flex-row">
      <HeroSectionIntroduction/>
      <TechStackOrbitSection/>
    </div>
  </section>;
};
