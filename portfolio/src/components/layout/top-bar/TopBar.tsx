import { TopbarLogo } from "@/components/layout/top-bar/components/TopbarLogo";
import { motion } from "motion/react";

export const Topbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
    >
      <header className="flex px-5 w-full h-24 items-center sticky">
        <TopbarLogo/>
      </header>
    </motion.div>
  );
};
