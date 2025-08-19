import { TimelineNode } from "@/main-page/sections/my-journey/components/timeline/TimelineNode";
import { TimelineSVG } from "@/main-page/sections/my-journey/components/timeline/TimelineSVGLine";
import type { TargetAndTransition, Variant } from "motion/react";

type TimelineProps = {
  nodeSrc: string;
  nodeLabel: string;
  nodeAnimationVariant:Variant;
}

export const Timeline = (props:TimelineProps) => {
  const { nodeSrc, nodeLabel,nodeAnimationVariant } = props;
  return (
    <>
      <div className="flex items-center flex-col">
        <TimelineNode imgSrc={nodeSrc} label={nodeLabel} nodeAnimationVariant={nodeAnimationVariant as TargetAndTransition}/>
        <TimelineSVG/>
      </div>
    </>
  );
};
