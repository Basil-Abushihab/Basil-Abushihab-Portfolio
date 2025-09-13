import type { BaseSectionProps } from "@/content/timelineNodes/TimelineNodes";
import lodash from "lodash";
export type Dates={
  max:number | string;
  min:number | string;
}

export type PopoverArticleSectionProps = {
  nodeLogo?: string;
  dates?:Dates
  description: string[];
};

export const PopoverArticleSection = (props: PopoverArticleSectionProps & BaseSectionProps) => {
  const { description, nodeLogo, sectionTitle,dates } = props;

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-row items-end gap-4">
        {!lodash.isUndefined(nodeLogo) &&<img src={nodeLogo} className="w-[60px] h-[60px]" alt={sectionTitle} />}
        <div className="flex flex-col">
        <h3 className="text-md md:text-xl font-bold mb-2">{sectionTitle}</h3>
        {!lodash.isUndefined(dates) && (
          <h5 className="text-sm mb-2 text-gray-600">{dates.min} - {dates.max}</h5>
        )}
        </div>
      </div>

      {description.map((desc, index) => (
        <p key={index} className="mb-2 text-md md:text-xl">
          {desc}
        </p>
      ))}
    </div>
  );
};
