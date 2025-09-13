import type { BaseSectionProps } from "@/content/timelineNodes/TimelineNodes";
import { ProjectCards } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectCards/ProjectCards";
import type { PopoverTechStackSectionProps } from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/TechStackSection";
import { useState } from "react";

export enum ProjectStatus {
  Completed = "Completed",
  InProgress = "In Progress",
  Planned = "Planned",
}
export const ProjectStatusColors = {
  [ProjectStatus.Completed]: "bg-green-500",
  [ProjectStatus.InProgress]: "bg-yellow-500",
  [ProjectStatus.Planned]: "bg-blue-500",
};
export type Project = {
  projectName: string;
  projectOverviewSection: string[];
  bulletPointsSection:{bulletPoints:string[],sectionTitle:string};
  stack: PopoverTechStackSectionProps;
  projectStatus:ProjectStatus;
  featuredTags:string[];
  videoDemo?: string;
  projectRepoLink?: string;
  projectBackgroundImage?: string;
};

export type ProjectsSectionProps = {
  projects: Project[];
};

export const ProjectsSection = (props: ProjectsSectionProps & BaseSectionProps) => {
  const { projects,sectionTitle} = props;
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleProjectClick = (projectName: string) => {
    setSelectedProject(projectName);
  };
  return (
    <div className=" flex flex-col gap-10 font-satoshi">
      <h3 className="text-lg font-bold mb-2">{sectionTitle}</h3>
      {projects.map((project) => (
        <ProjectCards
          {...project}
          key={project.projectName}
          selectedProject={selectedProject}
          onClick={() => handleProjectClick(project.projectName)}
        />
      ))}
    </div>
  );
};
