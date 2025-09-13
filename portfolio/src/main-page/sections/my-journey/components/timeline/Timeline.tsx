import type { TimelineNode as TimelineNodeType } from "@/content/timelineNodes/TimelineNodes";
import { TimelineNode } from "@/main-page/sections/my-journey/components/timeline/TimelineNode";
import { TimelineSVG } from "@/main-page/sections/my-journey/components/timeline/TimelineSVGLine";
import { TimelinePopup } from "@/main-page/sections/my-journey/components/timeline-popups/TimelinePopup";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import type { TargetAndTransition, Variant } from "motion/react";

type TimelineProps = {
  nodeSrc: string;
  nodeLabel: string;
  nodeAnimationVariant:Variant;
  isLastNode:boolean;
  isOpen:boolean;
  nodeContent:TimelineNodeType["nodeContent"];
  nodeIndex:number;
}

export const Timeline = (props:TimelineProps) => {
  const { nodeSrc, nodeLabel,nodeAnimationVariant,isLastNode,nodeIndex } = props;
  return (
    <>
      <div className="relative flex items-center flex-col">
        <Popover open={true}>
          <PopoverTrigger>
          <TimelineNode
            imgSrc={nodeSrc}
            label={nodeLabel}
            nodeAnimationVariant={nodeAnimationVariant as TargetAndTransition}
          />
          </PopoverTrigger>
          <TimelinePopup {...props} nodeIndex={nodeIndex}/>
        </Popover>
        {isLastNode ? null : <TimelineSVG />}
      </div>
    </>
  );
};
