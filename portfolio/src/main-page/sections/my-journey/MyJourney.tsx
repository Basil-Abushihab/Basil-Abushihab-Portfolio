import { Timeline } from "@/main-page/sections/my-journey/components/timeline/Timeline";
import type { TargetAndTransition } from "motion/react";
import {  useTimeLineNodes } from "@/context/timelineNodesContext";

export const MyJourney = () => {
  const {timelineNodes}=useTimeLineNodes();
  return (
    <div className="flex flex-col items-center justify-center w-full mt-60 md:mt-40">
      {timelineNodes.map((node, index) => (
        <Timeline
          key={index}
          nodeAnimationVariant={
            node.nodeAnimationVariants["animate"] as TargetAndTransition
          }
          nodeSrc={node.nodeImg}
          nodeLabel={node.nodeLabel}
          isLastNode={node.isLastNode}
          isOpen={node.isOpen}
          isVisited={node.isVisited}
          nodeContent={node.nodeContent}
        />
      ))}
    </div>
  );
};
