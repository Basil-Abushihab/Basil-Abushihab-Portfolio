import { TechStackOrbit } from "@/components/tech-stack-orbit/TechStackOrbit";
import { useWindowBreakpointValue } from "@/hooks/windowUtilityHooks";
import { motion, type Variants } from "framer-motion";

const TechStackOrbitVariant: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 0.8,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeIn",
      delay: 3.4,
    },
  },
};

export const TechStackOrbitSection = () => {
  const orbitSize = useWindowBreakpointValue({
    base: "350px",
    md: "500px",
    lg: "600px",
    xl: "750px",
  });
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0"
      variants={TechStackOrbitVariant}
      initial="initial"
      animate="animate"
    >
      <TechStackOrbit height={orbitSize} width={orbitSize} />
    </motion.div>
  );
};
