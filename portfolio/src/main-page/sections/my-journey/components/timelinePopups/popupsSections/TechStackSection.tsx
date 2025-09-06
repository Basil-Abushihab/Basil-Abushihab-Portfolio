import type { BaseSectionProps } from "@/content/timelineNodes/TimelineNodes";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { TechSectionGroups } from "@/content/timelineNodes/techStackSectionContent";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type TechStackInfo = {
  techMedia: string;
  techTitle: string;
  experience?: number;
  experienceUnit?: string;
};

export type PopoverTechStackSectionProps = {
  techStackGroups: Partial<
    Record<TechSectionGroups | string, Array<TechStackInfo>>
  >;
};

export const PopoverTechStackSection = (
  props: PopoverTechStackSectionProps & BaseSectionProps
) => {
  const { sectionTitle, techStackGroups } = props;

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-bold mb-2">{sectionTitle}</h3>
      <Accordion type="single" collapsible className="w-full">
        {Object.keys(techStackGroups).map((techStackGroup) => (
          <AccordionItem key={techStackGroup} value={techStackGroup}>
            <AccordionTrigger className="cursor-pointer">
              {techStackGroup}
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-4 mt-4 font-satoshi overflow-x-scroll no-scrollbar">
                {techStackGroups[techStackGroup]?.map((techStackInfo,index) => (
                  <div className="flex gap-4 items-center" key={index}>
                    <img
                      src={techStackInfo.techMedia}
                      alt={techStackInfo.techTitle}
                      className="w-8"
                    />
                    <h3 className="font-bold">{techStackInfo.techTitle}</h3>
                    {techStackInfo.experience ||
                    techStackInfo.experienceUnit ? (
                      <Badge
                        variant={"secondary"}
                        className={clsx("text-white text-xs", {
                          "bg-main": techStackInfo.experienceUnit === "Years",
                          "bg-secondary":
                            techStackInfo.experienceUnit === "Months",
                        })}
                      >
                        {techStackInfo.experience}{" "}
                        {techStackInfo.experienceUnit} Of Experience
                      </Badge>
                    ) : null}
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
