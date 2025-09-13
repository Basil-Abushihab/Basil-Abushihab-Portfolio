import type { BaseSectionProps } from "@/content/timelineNodes/TimelineNodes";

export type AdventureHighlightSectionProps = {
  highlightBulletPoints: string[];
};
export const AdventureHighlightSection = (
  props: AdventureHighlightSectionProps & BaseSectionProps
) => {
  const { highlightBulletPoints, sectionTitle } = props;

  return (
    <div className="flex flex-col gap-4 w-full font-satoshi">
      <h3 className="text-md md:text-xl font-bold mb-2">{sectionTitle}</h3>
      <ul className="list-disc list-inside space-y-4 text-md md:text-xl">
        {highlightBulletPoints.map((bulletPoint, index) => (
          <li key={index}>{bulletPoint}</li>
        ))}
      </ul>
    </div>
  );
};
