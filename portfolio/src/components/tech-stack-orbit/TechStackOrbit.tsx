import { OrbitingLogo } from "@/components/tech-stack-orbit/components/OrbittingLogo";
import { motion } from "framer-motion";
import { prepareOrbitGroups } from "@/components/tech-stack-orbit/utils/orbitGroupCalculations.util";

export type TechStackOrbitProps = {
  width?: string;
  height?: string;
  viewBox?: string;
};
export const TechStackOrbit = (props: TechStackOrbitProps) => {
  const { width = "300px", height = "300px", viewBox = "0 0 300 300" } = props;
  const w = parseInt(width.replace("px", ""));
  const h = parseInt(height.replace("px", ""));
  const orbitGroups=prepareOrbitGroups({height:h, width:w});


  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        {orbitGroups.map((group) => {
          return (
            <g>
              <motion.circle
                cx={group.orbit.centerX}
                cy={group.orbit.centerY}
                r={group.orbit.radius}
                stroke="#B2CCE8"
                strokeWidth="1"
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
            </g>
          );
        })}
      </svg>
    </>
  );
};
