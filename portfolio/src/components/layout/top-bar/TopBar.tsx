import { HamburgerMenuButton } from "@/components/layout/top-bar/components/HamburgerMenuButton";
import { TopbarLogo } from "@/components/layout/top-bar/components/TopbarLogo";
import { TopbarSections } from "@/components/layout/top-bar/components/topbar-sections/TopbarSections";
import { TopbarSectionsMobile } from "@/components/layout/top-bar/components/topbar-sections/TopbarSectionsMobile";
import { motion } from "motion/react";
import { useState } from "react";

export const Topbar = () => {
  const [isMobileOptionsOpen, setIsMobileOptionsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4 }}
    >
      <header className="flex relative px-5 w-full h-24 items-center justify-between md:px-10 lg:px-20 top-0 text-white">
        <a href="#">
          <TopbarLogo />
        </a>
        {/*Topbar sections for large and medium screens*/}
        <TopbarSections/> 
        {/*Topbar section for mobile screens*/}
        <TopbarSectionsMobile isOpen={isMobileOptionsOpen}/>
        {/*Hamburger menu button for mobile screens*/}
        <HamburgerMenuButton isOpen={isMobileOptionsOpen} setIsOpen={setIsMobileOptionsOpen}/>
      </header>
    </motion.div>
  );
};
