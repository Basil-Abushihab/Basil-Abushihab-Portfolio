import { Timeline } from "@/main-page/sections/my-journey/components/timeline/Timeline";
import { timeLineNodes } from "@/content/timelineNodes/timelineNodes";
export const MyJourney = () => {
  return <div className="flex items-center justify-center w-full mt-60 md:mt-40">
    {timeLineNodes.map((node, index) => (
      <Timeline key={index} nodeSrc={node.nodeImg} nodeLabel={node.nodeLabel} />
    ))}
  </div>;
};
