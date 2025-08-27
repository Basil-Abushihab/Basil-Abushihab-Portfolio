import { Timeline } from "@/main-page/sections/my-journey/components/timeline/Timeline";
import { Rocket } from "@/main-page/sections/my-journey/components/rocket/Rocket";
import { returnAnimationVariant } from "@/utils/animation-utilities/animationUtilityFunctions";
import { useRocketJourneyEffects } from "@/main-page/sections/my-journey/hooks/useRocketJourneyEffects";
import { useRef } from "react";
import { useTimeLineNodes } from "@/context/timelineNodesContext";

export const MyJourney = () => {
  const timelineContainerRef = useRef<(HTMLDivElement | null)[]>([]);
  const { rocketOffset } = useRocketJourneyEffects(timelineContainerRef);
  const { timelineNodes,setIsRocketMoving} = useTimeLineNodes();

  return (
    <div className="relative flex flex-col items-center justify-center w-full mt-60 md:mt-40">
      <Rocket
        height="80px"
        width="80px"
        className="absolute z-50 rotate-180 translate-x-20 top-0"
        initial={{ y: 10 }}
        animate={{ y: -rocketOffset, transition: { duration: 3 } }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 18,
        }}
        onAnimationStart={() => {
          setIsRocketMoving(true);
        }}
        onAnimationComplete={() => {
          setIsRocketMoving(false);
        }}
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
            isVisited={node.isVisited}
            nodeContent={node.nodeContent}
            nodeIndex={index}
          />
        </div>
      ))}
    </div>
  );
};
