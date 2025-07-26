import { OrbitingLogo } from "@/components/tech-stack-orbit/components/OrbittingLogo";
import { motion, type Variants } from "framer-motion";
import { prepareOrbitGroups } from "@/components/tech-stack-orbit/utils/orbitGroupCalculations.util";
import { cn } from "@/lib/utils";
import { useState, type Ref } from "react";

export type TechStackOrbitProps = {
  width?: string;
  height?: string;
  className?: string;
  ref?: Ref<SVGSVGElement>;
};

export const TechStackOrbit = (props: TechStackOrbitProps) => {
  const { width = "300px", height = "300px", className, ref } = props;
  const [isOrbitHovering, setIsOrbitHovering] = useState<boolean>(false);
  const w = parseInt(width.replace("px", ""));
  const h = parseInt(height.replace("px", ""));
  const orbitGroups = prepareOrbitGroups({ height: h, width: w });

  const orbitTextVariants: Variants = {
    animateOrbitText: {
      opacity: isOrbitHovering ? 1 : 0,
      y: isOrbitHovering ? 0 : -20,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        className={cn("overflow-visible", className)}
        ref={ref}
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {orbitGroups.map((group, groupIndex) => {
          return (
            <motion.g
              onHoverStart={() => setIsOrbitHovering(true)}
              onHoverEnd={() => setIsOrbitHovering(false)}
            >
              <motion.circle
                id={`curve${groupIndex}`}
                key={groupIndex}
                style={{ filter: "url(#glow)" }}
                cx={group.orbit.centerX}
                cy={group.orbit.centerY}
                r={group.orbit.radius}
                stroke="#B2CCE8"
                strokeWidth="2"
                fill="none"
              />
              {group.orbitIcons.map((icon, index) => (
                <OrbitingLogo
                  key={index}
                  index={index}
                  duration={group.orbit.groupAnimationDuration}
                  totalCount={group.orbitIcons.length}
                  cx={icon.centerX}
                  cy={icon.centerY}
                  radius={icon.radius}
                  imageSrc={icon.imageSrc}
                  size={icon.size}
                />
              ))}
            </motion.g>
          );
        })}
      </svg>
    </>
  );
};
