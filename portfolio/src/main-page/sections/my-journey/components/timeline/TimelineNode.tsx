import { setNodeOpen } from "@/context/actions";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import clsx from "clsx";
import { motion, type TargetAndTransition, type Variant } from "framer-motion";

type TimelineLogoProps = {
  imgSrc: string;
  label: string;
  nodeAnimationVariant: Variant;
  isOpen:boolean;
  nodeIndex:number;
};

export const TimelineNode = (props: TimelineLogoProps) => {
  const { imgSrc, label,nodeAnimationVariant,isOpen,nodeIndex } = props;
  const {isJoruenyModeActive,isTripFinished,dispatch}=useTimeLineNodes();
  const handleNodeClick=()=>{
    if(isJoruenyModeActive && !isTripFinished){
      return;
    }
    dispatch(setNodeOpen({index:nodeIndex,isOpen:!isOpen}));
  }

  return (
    <motion.div
      className={clsx("flex justify-center items-center rounded-full bg-icon w-[70px] h-[70px] pointer-events-auto shadow-[0_0_12px_rgba(88,175,255,0.35),_inset_0_0_12px_rgba(88,175,255,0.12)] ring-2 ring-blue-400 ",{"cursor-pointer hover:ring-4 hover:ring-blue-300 transition-all duration-300 ease-in-out":!isJoruenyModeActive || isTripFinished})}
      onClick={handleNodeClick}
      role="img"
      whileHover={{ scale: isJoruenyModeActive ? 1 : 1.1 }}
      aria-label={label}
    >
      <motion.img
        src={imgSrc}
        className="w-[65px] h-[65px] rounded-full"
        animate={nodeAnimationVariant as TargetAndTransition}
      />
    </motion.div>
  );
};
