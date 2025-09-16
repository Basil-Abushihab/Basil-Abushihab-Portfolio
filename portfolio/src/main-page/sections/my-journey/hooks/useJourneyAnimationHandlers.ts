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
    window.scrollTo({
      top: rocketTop-40 + window.scrollY,
      behavior: "auto",
    });
  }, [isMobile]);

  return {onAnimationEnd,onAnimationStart,onAnimationUpdate}
};
