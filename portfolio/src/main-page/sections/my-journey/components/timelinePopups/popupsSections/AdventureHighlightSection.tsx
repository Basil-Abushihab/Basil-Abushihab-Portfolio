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
      <h3 className="text-lg font-bold mb-2">{sectionTitle}</h3>
      <ul className="list-disc list-inside space-y-4">
        {highlightBulletPoints.map((bulletPoint, index) => (
          <li key={index}>{bulletPoint}</li>
        ))}
      </ul>
    </div>
  );
};
