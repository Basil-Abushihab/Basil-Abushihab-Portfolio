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
const popoverSideOffset=useWindowBreakpointValue<number>({base:20,lg:30});

  return (
   <PopoverContent
  align={PopoverContentAlignment.Center}
  side={PopoverContentSide.Bottom}
  sideOffset={popoverSideOffset}
  avoidCollisions={false}
  className={clsx(
    "h-[80vh] max-w-[1500px] pointer-events-auto", 
    { "w-[90vw] md:w-[60vw] lg:w-[35vw]": !isLastNode,"w-[90vw]":isLastNode } 
  )}
>
  <TimelinePopupContent {...props} />
</PopoverContent>
  );
};
