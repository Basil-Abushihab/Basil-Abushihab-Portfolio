import type {  TimelineNode } from "@/content/timelineNodes/TimelineNodes";
import { useWindowBreakpointValue } from "@/hooks/windowUtilityHooks";
import { TimelinePopupContent } from "@/main-page/sections/my-journey/components/timeline-popups/TimelinePopupContent";
import {  PopoverContent } from "@radix-ui/react-popover";
import clsx from "clsx";

enum PopoverContentAlignment {
  Start= "start",
  Center= "center",
  End="end",
};

enum PopoverContentSide {
  Top= "top",
  Right= "right",
  Bottom="bottom",
  Left="left",
};

export type TimeLinePopupProps = Omit<TimelineNode, "nodeAnimationVariants" | "nodeImg"> & { nodeIndex: number };
export const TimelinePopup = (props:TimeLinePopupProps) => { 
const {isLastNode}=props;
const popoverAlignment= useWindowBreakpointValue<PopoverContentAlignment>({base:PopoverContentAlignment.Center,lg:PopoverContentAlignment.Start});
const popoverSide= useWindowBreakpointValue<PopoverContentSide>({base:PopoverContentSide.Bottom,lg:PopoverContentSide.Left});
const popoverSideOffset=useWindowBreakpointValue<number>({base:20,lg:30});

  return (
    <PopoverContent
      align={isLastNode ? PopoverContentAlignment.Center : popoverAlignment}
      side={isLastNode ? PopoverContentSide.Bottom : popoverSide}
      sideOffset={popoverSideOffset}
      avoidCollisions={false}
      className={clsx("w-[350px] md:w-[500px] lg:w-[600px]",{"lg:w-[1500px]":isLastNode})}
    >
      <TimelinePopupContent {...props} />
    </PopoverContent>
  );
};
