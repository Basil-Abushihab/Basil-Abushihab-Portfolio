import { HeroSectionIntroduction } from "@/main-page/sections/hero-section/components/hero-section-introduction/HeroSectionIntroduction";
import { TechStackOrbitSection } from "@/main-page/sections/hero-section/components/hero-section-tech-stack-orbit/TechStackOrbitSection";
import { returnAnimationVariant } from "@/utils/animation-utilities/animationUtilityFunctions";
import { AnimationVariants } from "@/utils/animation-utilities/animationVariants";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { setTripStarted } from "@/context/actions";
import {motion} from "framer-motion";
import arrowDownImage from "@/assets/ArrowDown.png"
import clsx from "clsx";
import { useRef } from "react";
export const HeroSection = () => {
  const {dispatch,isTripStarted} = useTimeLineNodes();
  const callToActionAnimationVariant=returnAnimationVariant(AnimationVariants.Bounce);
  const heroRef=useRef<HTMLElement | null>(null);

  const scrollDownOnClick = () => {
    dispatch(setTripStarted({isStarted:true}));
    if (heroRef.current) {
      setTimeout(() => {
        window.scrollTo({
          top: heroRef.current?.offsetHeight ?? 0,
          behavior: "smooth",
        });
      }, 50);
    }
  };

  return (
    <section
      className="flex flex-col justify-center items-center"
      ref={heroRef}
    >
      <div className="flex flex-col w-full items-center relative md:flex-row">
        <HeroSectionIntroduction />
        <TechStackOrbitSection />
      </div>
      <button
        onClick={scrollDownOnClick}
      >
        <motion.img
          animate={callToActionAnimationVariant}
          src={arrowDownImage}
          alt="ArrowDown"
          className={clsx("w-10 cursor-pointer", {
            hidden: isTripStarted,
            block: !isTripStarted,
          })}
        />
      </button>
    </section>
  );
};
