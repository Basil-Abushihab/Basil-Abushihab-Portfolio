import { Timeline } from "@/main-page/sections/my-journey/components/timeline/Timeline";
import { Rocket } from "@/main-page/sections/my-journey/components/rocket/Rocket";
import { returnAnimationVariant } from "@/utils/animation-utilities/animationUtilityFunctions";
import { useRocketJourneyEffects } from "@/main-page/sections/my-journey/hooks/useRocketJourneyEffects";
import {  useEffect, useRef } from "react";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { useWindowBreakpointValue } from "@/hooks/windowUtilityHooks";
import { useJourneyAnimationHandlers } from "@/main-page/sections/my-journey/hooks/useJourneyAnimationHandlers";

export const MyJourney = () => {
  const windowScrollAlignment=useWindowBreakpointValue<ScrollLogicalPosition>({base:"start",lg:"center"});
  const timelineContainerRef = useRef<(HTMLDivElement | null)[]>([]);
  const { timelineNodes,isTripStarted} = useTimeLineNodes();
  const rocketRef = useRef<SVGSVGElement | null>(null);
  const { rocketOffset } = useRocketJourneyEffects(timelineContainerRef);
  const {onAnimationEnd,onAnimationStart,onAnimationUpdate}=useJourneyAnimationHandlers(rocketRef);


  useEffect(()=>{
    if(isTripStarted)
    rocketRef.current?.scrollIntoView({ block: windowScrollAlignment, behavior: "smooth" });
  },[isTripStarted])

  return (
    <div className={cn("flex flex-col items-center justify-center w-full mt-60  md:mt-70",clsx({"hidden":!isTripStarted,"relative":isTripStarted}))}>
      <Rocket
        ref={rocketRef}
        height="80px"
        width="80px"
        debrisOffsetX={-10}
        debrisOffsetY={40}
        className="absolute z-50 rotate-180 translate-x-20 top-0"
        initial={{ y: 10 }}
        animate={{ y: -rocketOffset, transition: { duration: 3 } }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 18,
        }}
        onAnimationStart={onAnimationStart}
        onAnimationComplete={onAnimationEnd}
        onUpdate={onAnimationUpdate}
      />
      {timelineNodes.map((node, index) => (
        <div
          key={index}
          ref={(el) => {
            timelineContainerRef.current[index] = el;
          }}
          className="w-full"
        >
          <Timeline
            key={index}
            nodeAnimationVariant={returnAnimationVariant(
              node.nodeAnimationVariants
            )}
            nodeSrc={node.nodeImg}
            nodeLabel={node.nodeLabel}
            isLastNode={node.isLastNode}
            isOpen={node.isOpen}
            nodeContent={node.nodeContent}
            nodeIndex={index}
          />
        </div>
      ))}
    </div>
  );
};
