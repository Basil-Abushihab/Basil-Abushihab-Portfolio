import { topbarSectionItems } from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection";
import { useTopBarSections } from "@/components/layout/top-bar/components/topbar-sections/utils/sectionUtilities";

export const TopbarSections = () => {
  const { applySectionSelection } = useTopBarSections();
  return (
    <>
      <div className="hidden relative md:flex lg:flex items-center gap-10 font-satoshi">
        {topbarSectionItems.map((topbarSectionItem, index) => (
          <a
            href={`#${topbarSectionItem.href}`}
            onClick={() => applySectionSelection(topbarSectionItem)}
            className="text-lg"
            key={index}
          >
            {topbarSectionItem.label}
          </a>
        ))}
      </div>
    </>
  );
};
