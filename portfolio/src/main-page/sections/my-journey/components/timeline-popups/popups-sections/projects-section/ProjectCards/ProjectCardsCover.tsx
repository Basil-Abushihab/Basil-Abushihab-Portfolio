import { Badge } from "@/components/ui/badge";
import { ProjectStatusColors } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectsSection";
import { ProjectsStackBadgeSection } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectCards/ProjectsStackBadgeSection";
import { motion } from "framer-motion";
import CodePicture from "@/assets/CodePicture.png";
import { Button } from "@/components/ui/button";
import type { MouseEventHandler } from "react";
import clsx from "clsx";

type ProjectCardsCoverProps = {
  projectName: string;
  projectBackgroundImage?: string;
  projectStatus: keyof typeof ProjectStatusColors;
  featuredTags?:string[];
  projectRepoLink?: string;
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

export const ProjectCardsCover = (props: ProjectCardsCoverProps) => {
  const {
    projectName,
    projectBackgroundImage,
    isSelected = false,
    projectStatus,
    onClick,
    featuredTags,
    projectRepoLink,
  } = props;
  return (
    <motion.div
      animate={{ opacity: isSelected ? 0 : 1 }}
      className={clsx("absolute inset-0 w-full h-full bg-gray-200 z-50 flex items-end text-white text-2xl font-bold font-satoshi",{
        "pointer-events-none":isSelected,
        "pointer-events-auto":!isSelected
      })}
      onClick={onClick}
    >
      <div
        style={{
          backgroundImage: `url(${projectBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
        className="absolute inset-0 blur-xs"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 to-transparent" />
      <div className="flex w-full h-[50%] md:h-[40%] flex-col p-8 gap-5 relative">
        <span className="relative z-10 text-white text-lg font-bold drop-shadow-lg md:text-2xl">
          {projectName}
        </span>
        <ProjectsStackBadgeSection
          techStack={featuredTags || []}
        />
        <div className="flex gap-4">
          <Badge className={`${ProjectStatusColors[projectStatus]}`}>
            {projectStatus}
          </Badge>
          <Button
            onClick={(e) => {
              e.stopPropagation()
              window.open(projectRepoLink, "_blank");
            }}
            className="bg-secondary cursor-pointer hover:bg-secondary/80 text-white flex items-center gap-2"
          >
            <span>View Code</span>
            <img src={CodePicture} className="w-5 h-5" />{" "}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
