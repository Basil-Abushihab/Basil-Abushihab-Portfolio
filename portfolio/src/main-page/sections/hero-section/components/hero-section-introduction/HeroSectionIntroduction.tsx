import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { heroText } from "@/content/heroSectionContent";

  const iconSize = 50;

  const titleVariant:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1,transition:{ type: "tween", delay: 1.4, duration: 1 } },
  };

  const subtitleVariant:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1,transition:{ type: "tween", delay: 2.4, duration: 0.5 } },
  };

  const connectTextVariant:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1,transition:{ type: "tween", delay: 2.9, duration: 0.5 } },
  };

  const socialIconVariant:Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.8,
      type: "spring",
      stiffness: 600,
      damping: 20,
    },
  }),
    hover:{scale:1.2,transition:{delay:0,duration:0.1,type:"tween"}}
  };

export const HeroSectionIntroduction = () => {
/*this state is used as a multiplier for the delay of the icons animation this is done to make the delay applied or not applied to the icons,
  since its effecting the hovering effect.
*/ 
const [iconDelayMultiplier,setIconDelayMultiplier]=useState<number>(1)

  return (
    <div className="flex justify-center flex-col gap-10 w-full z-10 items-center md:w-[60%] lg:w-[60%] md:items-baseline lg:items-baseline">
      {/* Title */}
      <motion.h1
        variants={titleVariant}
        initial="hidden"
        animate="visible"
        className="text-2xl md:text-4xl lg:text-5xl font-satoshi text-white"
      >
        {heroText.title.greeting}<span className="text-secondary text-bold">,</span> {heroText.title.name}
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        variants={subtitleVariant}
        initial="hidden"
        animate="visible"
        className="text-lg md:text-xl lg:text-2xl font-satoshi text-white text-center md:text-left lg:text-left"
      >
        {heroText.subtitle.part1} <span className="text-secondary font-bold">{heroText.subtitle.highlight}</span>{" "}
        {heroText.subtitle.part2}
      </motion.h2>

      {/* Connect Section */}
      <div className="flex flex-col justify-center gap-3">
        <motion.h3
          variants={connectTextVariant}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl lg:text-2xl font-satoshi text-white text-center md:text-left lg:text-left"
        >
          {heroText.connect.part1} <span className="text-secondary font-bold">{heroText.connect.highlight}</span> {heroText.connect.part2}
        </motion.h3>

        {/* Social Icons */}
        <div className="flex items-center gap-5 justify-center md:justify-start lg:justify-start">
          {heroText.socialLinks.map((socialLink)=>
          <a href={socialLink.href} target="_blank">
            <motion.img
              custom={socialLink.delay*iconDelayMultiplier}
              variants={socialIconVariant}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              src={socialLink.imgSrc}
              height={iconSize}
              width={iconSize}
              onAnimationComplete={()=>setIconDelayMultiplier(0)}
              alt={socialLink.label}
            />
          </a>
          )}
        </div>
      </div>
    </div>
  );
};
