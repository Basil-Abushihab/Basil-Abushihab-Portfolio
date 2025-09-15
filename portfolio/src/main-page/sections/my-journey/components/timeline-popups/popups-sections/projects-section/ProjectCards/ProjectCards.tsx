import { AdventureHighlightSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/AdventureHighlightSection";
import { PopoverArticleSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/ArticleSection";
import { ProjectCardsCover } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectCards/ProjectCardsCover";
import type { Project } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectsSection";
import { PopoverTechStackSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/TechStackSection";
import { VideoDemoSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/VideoDemoSection";
import clsx from "clsx";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useMemo, useRef,  type MouseEventHandler } from "react";

type ProjectCardsProps = Project & {
  selectedProject: string | null;
  onClick?: MouseEventHandler<HTMLDivElement & HTMLButtonElement>;
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
    videoDemo
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
      }}
      whileHover={{ scale: isSelected ? 1 : 1.02 }}
      className={clsx(
        "relative w-full flex flex-col gap-10 bg-white rounded-lg shadow-lg transition-all hover:shadow-secondary p-4 no-scrollbar",
        {
          "overflow-y-hidden pointer-events-none": !isSelected,
          "overflow-y-scroll pointer-events-auto": isSelected,
        }
      )}
      ref={cardRef}
    >
      <motion.button
        onClick={onClick}
        animate={{ opacity: isSelected ? 1 : 0 }}
        className=" absolute top-4 right-4 bg-white cursor-pointer p-2 shadow-lg rounded-2xl hover:bg-gray-200 transition-all"
      >
        <X color="black" />
      </motion.button>
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
       <VideoDemoSection sectionTitle="Video Demo" videoUrl={videoDemo}/>
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
