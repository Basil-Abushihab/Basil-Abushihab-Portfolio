import { topbarSectionItems } from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection.model";
import { motion } from "framer-motion";

export const TopbarSections = () => {
  return (
    <>
      <div className="hidden relative md:flex lg:flex items-center gap-10 font-satoshi">
        <motion.div className="absolute bg-white h-2 w-2 rounded-full right-full mr-3" />
        {topbarSectionItems.map((topbarSectionItem) => (
          <a href={topbarSectionItem.href} className="text-lg">
            {topbarSectionItem.label}
          </a>
        ))}
      </div>
    </>
  );
};
