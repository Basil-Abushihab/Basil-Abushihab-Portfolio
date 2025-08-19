import { Timeline } from "@/main-page/sections/my-journey/components/timeline/Timeline";
import { timeLineNodes } from "@/content/timelineNodes/timelineNodes";
import type { TargetAndTransition } from "motion/react";
export const MyJourney = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-60 md:mt-40">
      {timeLineNodes.map((node, index) => (
        <Timeline
          key={index}
          nodeAnimationVariant={
            node.nodeAnimationVariants["animate"] as TargetAndTransition
          }
          nodeSrc={node.nodeImg}
          nodeLabel={node.nodeLabel}
        />
      ))}
    </div>
  );
};
