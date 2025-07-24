import { topbarSectionItems } from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection.model";
import { useWindowDimensions } from "@/hooks/windowUtilityHooks";
import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

type TopbarSectionsMobileProps = {
  isOpen?: boolean;
};



export const TopbarSectionsMobile = ({ isOpen = true }: TopbarSectionsMobileProps) => {
const { height } = useWindowDimensions();
const [shouldAnimateSection,setShouldAnimateSection] = useState(false);
// Trigger animation only once and thats when the menu is opened
useEffect(() => {
  if (isOpen && !shouldAnimateSection) {
    setShouldAnimateSection(true);
  }
}, [isOpen]);

 const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

  return (
    <motion.div
      animate={{ y: isOpen ? 0 : -height }}
      transition={{ type: "tween", damping: 30 }}
      className="fixed left-0 right-0 top-0 flex flex-col items-center justify-center bg-secondary gap-40 md:hidden lg:hidden h-screen font-satoshi"
    >
      {topbarSectionItems.map((topbarSectionItem) => (
        <motion.a animate={shouldAnimateSection?"visible":"hidden"} variants={itemVariants} transition={ {type: "spring",stiffness: 700,damping: 20,delay:topbarSectionItem.delay}} href={topbarSectionItem.href} className="text-4xl text-white">
          {topbarSectionItem.label}
        </motion.a>
      ))}
    </motion.div>
  );
};
