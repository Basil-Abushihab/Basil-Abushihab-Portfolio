import type { TimelineNode as TimelineNodeType } from "@/content/timelineNodes/TimelineNodes";
import { TimelineNode } from "@/main-page/sections/my-journey/components/timeline/TimelineNode";
import { TimelineSVG } from "@/main-page/sections/my-journey/components/timeline/TimelineSVGLine";
import { TimelinePopup } from "@/main-page/sections/my-journey/components/timeline-popups/TimelinePopup";
import { Popover, PopoverTrigger } from "@radix-ui/react-popover";
import type { TargetAndTransition, Variant } from "motion/react";
import type { SectionTitles } from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection";

type TimelineProps = {
  nodeSrc: string;
  nodeLabel: string;
  nodeAnimationVariant:Variant;
  isLastNode:boolean;
  isOpen:boolean;
  nodeContent:TimelineNodeType["nodeContent"];
  nodeIndex:number;
  id?:SectionTitles
}

export const Timeline = (props:TimelineProps) => {
  const { nodeSrc, nodeLabel,nodeAnimationVariant,isLastNode,nodeIndex,isOpen,id } = props;
  return (
    <>
      <div  className="relative flex items-center flex-col pointer-events-none" id={id}>
        <Popover open={true}>
          <PopoverTrigger>
          <TimelineNode
            imgSrc={nodeSrc}
            label={nodeLabel}
            nodeAnimationVariant={nodeAnimationVariant as TargetAndTransition}
            isOpen={isOpen}
            nodeIndex={nodeIndex}
          />
          </PopoverTrigger>
          <TimelinePopup {...props} nodeIndex={nodeIndex}/>
        </Popover>
        {isLastNode ? null : <TimelineSVG />}
      </div>
    </>
  );
};
