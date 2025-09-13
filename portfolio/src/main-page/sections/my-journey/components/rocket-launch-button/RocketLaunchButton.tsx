import { nextNode, setNodeOpen } from "@/context/actions";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { Rocket } from "@/main-page/sections/my-journey/components/rocket/Rocket";
import { RocketLaunchButtonBackground } from "@/main-page/sections/my-journey/components/rocket-launch-button/RocketLaunchButtonBackground";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export const RocketLaunchButton = () => {
  const { dispatch, visitedNodeNumber,isRocketMoving,isTripStarted,isTripFinished } = useTimeLineNodes();
  const [isHovering,setIsHovering]=useState<boolean>(false);
  const shouldDisplayButton=!isRocketMoving && isTripStarted && !isTripFinished;
  const handleNextClick = () => {
    dispatch(nextNode());
    dispatch(setNodeOpen({ index: visitedNodeNumber, isOpen: false }));
  };

  return (
    <motion.button
      className={clsx("sticky flex justify-center items-center bottom-2 left-11/12 rounded-full w-18 h-18 lg:bottom-20 lg:w-20 lg:h-20 bg-main font-satoshi shadow-[0_0_12px_rgba(88,175,255,0.35),_inset_0_0_12px_rgba(88,175,255,0.12)] ring-2 ring-blue-400 hover:ring-4 hover:ring-blue-300 transition-all duration-300 ease-in-out overflow-clip cursor-pointer",{hidden:!isTripStarted})}
      onClick={handleNextClick}
      animate={{scale:shouldDisplayButton?1:0}}
      whileHover={{scale:isRocketMoving?0:1.3}}
      onHoverStart={()=>setIsHovering(true)}
      onHoverEnd={()=>setIsHovering(false)}
    >
      <RocketLaunchButtonBackground height="100px" width="100px" isHovering={isHovering} starCount={100}/>
      <Rocket
        height="50px"
        width="50px"
        debrisOffsetX={-23}
        debrisOffsetY={20}
        className="rotate-45"
      />
    </motion.button>
  );
};
