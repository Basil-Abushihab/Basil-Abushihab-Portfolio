import { AdventureHighlightSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/AdventureHighlightSection";
import { PopoverArticleSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/ArticleSection";
import { ProjectCardsCover } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectCards/ProjectCardsCover";
import type { Project } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectsSection";
import { PopoverTechStackSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/TechStackSection";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef,  type MouseEventHandler } from "react";

type ProjectCardsProps = Project & {
  selectedProject: string | null;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const ProjectCards = (props: ProjectCardsProps) => {
  const {
    projectName,
    projectOverviewSection,
    stack,
    bulletPointsSection,
    projectBackgroundImage,
    projectRepoLink,
    projectStatus,
    featuredTags,
    onClick,
    selectedProject,
  } = props;
  const isSelected = useMemo(
    () => selectedProject === projectName,
    [selectedProject, projectName]
  );
  const cardRef=useRef<HTMLDivElement>(null);


  useEffect(() => {
      cardRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [isSelected]);

  
  return (
    <motion.div
      animate={{
        height: isSelected ? "1000px" : "500px",
        transition: { duration: 0.5 },
      }}
      whileHover={{ scale: isSelected ? 1 : 1.02 }}
      className={clsx(
        "relative w-full flex flex-col gap-10 bg-white rounded-lg shadow-lg transition-all hover:shadow-secondary p-4 no-scrollbar",
        { "overflow-y-hidden": !isSelected ,"overflow-y-scroll": isSelected}
      )}
      ref={cardRef}
    >
      <PopoverArticleSection
        sectionTitle="Project Overview"
        description={projectOverviewSection}
      />
      <AdventureHighlightSection
        sectionTitle={bulletPointsSection.sectionTitle}
        highlightBulletPoints={bulletPointsSection.bulletPoints}
      />
      <PopoverTechStackSection
        sectionTitle="Used Tech Stack"
        techStackGroups={stack.techStackGroups}
      />

      <ProjectCardsCover
        isSelected={isSelected}
        projectName={projectName}
        projectStatus={projectStatus}
        projectBackgroundImage={projectBackgroundImage}
        onClick={onClick}
        featuredTags={featuredTags}
        projectRepoLink={projectRepoLink}
      />
    </motion.div>
  );
};
