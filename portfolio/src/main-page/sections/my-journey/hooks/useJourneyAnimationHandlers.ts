import { setRocketMoving} from "@/context/actions";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { useWindowBreakpointValue } from "@/hooks/windowUtilityHooks";
import { useCallback } from "react";

export const useJourneyAnimationHandlers = (
  rocketRef: React.RefObject<SVGSVGElement | null>
) => {
  const { dispatch } = useTimeLineNodes();

  const isMobile = useWindowBreakpointValue<boolean>({ base: true, lg: false });
  const onAnimationStart = () => {
    dispatch(setRocketMoving({ isMoving: true }));
  };

  const onAnimationEnd = () => {
    dispatch(setRocketMoving({ isMoving: false }));
  };

  const onAnimationUpdate = useCallback(() => {
    if (!rocketRef.current) return;
    const rect = rocketRef.current.getBoundingClientRect();
    const rocketTop = rect.top;
    const rocketHeight = rect.height;
    const scrollTop = rocketTop + rocketHeight / 2 - window.innerHeight / 2;
    const alignmentFactor = isMobile ? rocketTop - 30 : scrollTop;
    window.scrollTo({
      top: alignmentFactor + window.scrollY,
      behavior: "auto",
    });
  }, [isMobile]);

  return {onAnimationEnd,onAnimationStart,onAnimationUpdate}
};
