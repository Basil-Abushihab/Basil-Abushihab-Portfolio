import { HeroSectionIntroduction } from "@/main-page/sections/hero-section/components/hero-section-introduction/HeroSectionIntroduction";
import { TechStackOrbitSection } from "@/main-page/sections/hero-section/components/hero-section-tech-stack-orbit/TechStackOrbitSection";
import { ScrollingButton } from "@/main-page/sections/hero-section/components/ScrollingCallToActionButton";
import clsx from "clsx";
import type { Variants } from "motion/react";
import {useRef, useState } from "react";

const ScrollingButtonVariants:Variants = {
    hidden: { y: 20, opacity: 0, },
    visible: { y: 0, opacity: 1,transition:{ type: "tween", delay: 3.5, duration: 1 } },
  };

export const HeroSection = () => {
  const heroRef=useRef<HTMLElement | null>(null);
  const [isVisible,setIsVisible]=useState<boolean>(false);

  return (
    <section
      className="flex flex-col justify-center items-center"
      ref={heroRef}
    >
      <div className="flex flex-col w-full items-center relative md:flex-row">
        <HeroSectionIntroduction />
        <TechStackOrbitSection />
      </div>
      <ScrollingButton
        className={clsx({
          "cursor-pointer": isVisible,
          "cursor-auto": !isVisible,
        })}
        isVisible={isVisible}
        initial={"hidden"}
        animate={"visible"}
        variants={ScrollingButtonVariants}
        onAnimationComplete={()=>setIsVisible(true)}
      />
    </section>
  );
};
