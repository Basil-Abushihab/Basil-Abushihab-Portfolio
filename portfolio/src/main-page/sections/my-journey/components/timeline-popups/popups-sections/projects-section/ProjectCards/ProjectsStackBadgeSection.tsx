import { Badge } from "@/components/ui/badge";

type ProjectsStackBadgeSectionProps = {
    techStack:string[];
};
export const ProjectsStackBadgeSection = (props:ProjectsStackBadgeSectionProps) => {
    const {techStack} = props;
  return (
    <div className="flex flex-wrap gap-2 z-50">
      {techStack.map((tech) => (
        <Badge key={tech} className="bg-blue-200 text-blue-800">
          {tech}
        </Badge>
      ))}
    </div>
  );
};
