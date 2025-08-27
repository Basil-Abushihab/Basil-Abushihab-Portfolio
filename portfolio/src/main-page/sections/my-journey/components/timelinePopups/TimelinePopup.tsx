import type { NodeContent } from "@/content/timelineNodes/TimelineNodes";
import { useWindowBreakpointValue } from "@/hooks/windowUtilityHooks";
import { TimelinePopupContent } from "@/main-page/sections/my-journey/components/timelinePopups/TimelinePopupContent";
import {  PopoverContent } from "@radix-ui/react-popover";

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

export type TimeLinePopupProps=NodeContent & {nodeIndex:number}; 
export const TimelinePopup = (props:TimeLinePopupProps) => {
const popoverAlignment= useWindowBreakpointValue<PopoverContentAlignment>({base:PopoverContentAlignment.Center,lg:PopoverContentAlignment.Start});
const popoverSide= useWindowBreakpointValue<PopoverContentSide>({base:PopoverContentSide.Bottom,lg:PopoverContentSide.Left});

  return (
    <PopoverContent align={popoverAlignment} side={popoverSide} sideOffset={30} avoidCollisions={false} className="w-[350px] md:w-[500px] lg:w-[600px]">
        <TimelinePopupContent {...props} />
    </PopoverContent>
  );
};
