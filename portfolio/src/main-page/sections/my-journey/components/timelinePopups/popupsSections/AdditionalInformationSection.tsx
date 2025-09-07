import type { BaseSectionProps } from "@/content/timelineNodes/TimelineNodes";
import { Badge } from "@/components/ui/badge";
type TagContent={
  color: string;
  text: string;
}
export type AdditionalInformationSectionProps = {
Tags:TagContent[]
};

export const AdditionalInformationSection = (props: AdditionalInformationSectionProps & BaseSectionProps) => {
  const { sectionTitle, Tags } = props;
  return (
    <div className="flex flex-col gap-4 w-full font-satoshi">
      <h3 className="text-lg font-bold mb-2">{sectionTitle}</h3>
      <div className="grid grid-cols-3 gap-1">
        {Tags.map((tag,index)=>(
            <Badge key={index} style={{backgroundColor:tag.color}}>{tag.text}</Badge>
        ))}
      </div>
    </div>
  );
};
