import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { TimelineTripControlSection } from "@/main-page/sections/my-journey/components/timelinePopups/popupsSections/TimelineTripControlSection";
import type { TimeLinePopupProps } from "@/main-page/sections/my-journey/components/timelinePopups/TimelinePopup";
import { returnAnimationVariant } from "@/utils/animation-utilities/animationUtilityFunctions";
import { AnimationVariants } from "@/utils/animation-utilities/animationVariants";
import { motion } from "framer-motion";

export const TimelinePopupContent = (props: TimeLinePopupProps) => {
  const { description, title, nodeLogo,nodeIndex } = props;
  const {getIsTimeLineNodeOpen}=useTimeLineNodes();
  const animationType=getIsTimeLineNodeOpen(nodeIndex) ? AnimationVariants.Popup : AnimationVariants.Popout;
  const animationVariant=returnAnimationVariant(animationType as AnimationVariants);

  return (
    <motion.div animate={animationVariant} className="flex flex-col w-full gap-4 bg-white rounded-3xl p-10 text-black font-satoshi">
      <div className="flex flex-row items-end gap-4">
      <img src={nodeLogo} className="w-[50px] h-[50px]" />
      <h3 className="text-lg font-bold mb-2">
        {title}
      </h3>
      </div>
      {Object.values(description).map((desc, index) => (
        <p key={index} className="mb-2">
          {desc}
        </p>
      ))}
      <TimelineTripControlSection/>
    </motion.div>
  );
};
