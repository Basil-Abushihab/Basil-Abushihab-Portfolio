import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { resetJourneyMode, setJourneyModeActive } from "@/context/actions";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { Rocket } from "@/main-page/sections/my-journey/components/rocket/Rocket";
import clsx from "clsx";
import { motion } from "framer-motion";

type JourneyControlButtonComponentProps = {
  ref?: React.Ref<HTMLDivElement>;
};
const JourneyControlButtonComponent = (
  props: JourneyControlButtonComponentProps
) => {
  const { ref } = props;
  const { dispatch, isJoruenyModeActive, isTripFinished } = useTimeLineNodes();
  const toggleJourneyMode = () => {
    if(isTripFinished){
      dispatch(resetJourneyMode());
      return;
    }
    dispatch(setJourneyModeActive({ isActive: !isJoruenyModeActive }));
  };
  return (
    <div ref={ref}>
      <Tooltip>
        <TooltipTrigger
          onClick={toggleJourneyMode}
          className="w-12 h-12 flex justify-center items-center rounded-full shadow-[0_0_12px_rgba(88,175,255,0.35),_inset_0_0_12px_rgba(88,175,255,0.12)] ring-2 ring-blue-400 bg-main overflow-clip cursor-pointer"
        >
          <Rocket
            animate={{
              scale: isJoruenyModeActive || !isTripFinished ? 1 : 0.9,
            }}
            height="50px"
            width="50px"
            debrisOffsetX={-23}
            debrisOffsetY={20}
            className={clsx("rotate-45", {
              "grayscale opacity-60": !isJoruenyModeActive || isTripFinished,
            })}
          />
        </TooltipTrigger>
        <TooltipContent
          className="bg-white fill-white text-black"
          side="bottom"
        >
          <p>
            {isJoruenyModeActive
              ? isTripFinished
                ? "Restart"
                : "Disable"
              : "Enable"}{" "}
            Joruney Mode
          </p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export const JourneyControlButton = motion.create(JourneyControlButtonComponent);
