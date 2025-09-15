import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import type { TimeLinePopupProps } from "@/main-page/sections/my-journey/components/timeline-popups/TimelinePopup";
import { returnAnimationVariant } from "@/utils/animation-utilities/animationUtilityFunctions";
import { AnimationVariants } from "@/utils/animation-utilities/animationVariants";
import clsx from "clsx";
import { motion } from "framer-motion";

export const TimelinePopupContent = (props: TimeLinePopupProps) => {
  const { nodeIndex,nodeContent,isLastNode } = props;
  const {sections}=nodeContent;
  const {getIsTimeLineNodeOpen}=useTimeLineNodes();
  const animationType=getIsTimeLineNodeOpen(nodeIndex) ? AnimationVariants.Popup : AnimationVariants.Popout;
  const animationVariant=returnAnimationVariant(animationType as AnimationVariants);

  return (
    <motion.div animate={animationVariant} className={clsx("flex flex-col w-full h-full overflow-y-scroll no-scrollbar gap-10 bg-white rounded-3xl p-10 text-black font-satoshi pointer-events-auto",{"max-h-[800px]":isLastNode,"lg:max-h-[500px] max-h-[460px]":!isLastNode})}>
      {sections?.map((extraSection,index)=>{
        const SectionComponent = extraSection.component;
        return <SectionComponent key={index} {...extraSection.props} sectionTitle={extraSection.sectionTitle} isLastNode={isLastNode}/>
      })}
    </motion.div>
  );
};
