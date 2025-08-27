import { useTimeLineNodes } from "@/context/timelineNodesContext";
import { useEffect, useLayoutEffect, useState } from "react";

export const useRocketJourneyEffects = ( myJourneyContainerRef: React.RefObject<(HTMLDivElement | null)[]>) => {
  const { timelineNodes, visitedNodeNumber,setIsTimeLineNodeOpen,isRocketMoving } = useTimeLineNodes();
  const [rocketOffset, setRocketOffset] = useState(0);

  useLayoutEffect(() => {
    const el = myJourneyContainerRef.current;
    if (!el) return;

    const recalc = () => {
      const perStep = el[0]?.offsetHeight || 0;
      const ROCKET_HALF = 40;
      const NODE_CENTER_ADJUST = 35;
      setRocketOffset(perStep * visitedNodeNumber - ROCKET_HALF + NODE_CENTER_ADJUST);
    };

    recalc();
  }, [visitedNodeNumber, timelineNodes.length, myJourneyContainerRef]);

  useEffect(()=>{
    if(isRocketMoving)return;
   setIsTimeLineNodeOpen(visitedNodeNumber,!isRocketMoving);
  },[isRocketMoving]);

  return { rocketOffset };
};
