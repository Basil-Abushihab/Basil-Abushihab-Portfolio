import type { NodeContent } from "@/content/timelineNodes/TimelineNodes";
import { TimelinePopupContent } from "@/main-page/sections/my-journey/components/timelinePopups/TimelinePopupContent";
import { PopoverContent } from "@radix-ui/react-popover";

export const TimelinePopup = (props:NodeContent) => {
  return (
    <PopoverContent align="start" side="left" sideOffset={30} className="hidden lg:block lg:w-[600px]">
        <TimelinePopupContent {...props} />
    </PopoverContent>
  );
};
