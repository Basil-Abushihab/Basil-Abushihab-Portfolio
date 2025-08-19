import { topbarSectionItems } from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection.model";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type TopbarSectionsMobileProps = {
  isOpen?: boolean;
};

export const TopbarSectionsMobile = ({ isOpen = true }: TopbarSectionsMobileProps) => {
  const [shouldAnimateSection, setShouldAnimateSection] = useState(false);

  // Trigger item animation only once, on first open
  useEffect(() => {
    if (isOpen && !shouldAnimateSection) setShouldAnimateSection(true);
  }, [isOpen, shouldAnimateSection]);


  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 flex h-[100dvh] flex-col items-center justify-center gap-40 bg-secondary font-satoshi md:hidden lg:hidden"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      {topbarSectionItems.map((item, index) => (
        <motion.a
          key={item.href ?? index}
          animate={shouldAnimateSection ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 20,
            delay: item.delay,
          }}
          href={item.href}
          className="text-4xl text-white"
        >
          {item.label}
        </motion.a>
      ))}
    </motion.div>
  );
};
