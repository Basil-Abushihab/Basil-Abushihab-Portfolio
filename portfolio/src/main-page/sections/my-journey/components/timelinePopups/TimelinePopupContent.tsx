import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { PopoverArticleSection } from "@/main-page/sections/my-journey/components/timelinePopups/popupsSections/ArticleSection";
import type { TimeLinePopupProps } from "@/main-page/sections/my-journey/components/timelinePopups/TimelinePopup";
import { returnAnimationVariant } from "@/utils/animation-utilities/animationUtilityFunctions";
import { AnimationVariants } from "@/utils/animation-utilities/animationVariants";
import { motion } from "framer-motion";

export const TimelinePopupContent = (props: TimeLinePopupProps) => {
  const { description, title, nodeLogo,nodeIndex,extraSections,dates } = props;
  const {getIsTimeLineNodeOpen}=useTimeLineNodes();
  const animationType=getIsTimeLineNodeOpen(nodeIndex) ? AnimationVariants.Popup : AnimationVariants.Popout;
  const animationVariant=returnAnimationVariant(animationType as AnimationVariants);

  return (
    <motion.div animate={animationVariant} className="flex flex-col w-full h-full max-h-[460px] no-scrollbar overflow-y-scroll gap-10 bg-white rounded-3xl p-10 text-black font-satoshi lg:max-h-[500px]">
      <PopoverArticleSection description={description} sectionTitle={title} nodeLogo={nodeLogo??""} dates={dates}/>
      {extraSections?.map((extraSection,index)=>{
        const SectionComponent = extraSection.component;
        return <SectionComponent key={index} {...extraSection.props} sectionTitle={extraSection.sectionTitle}/>
      })}
    </motion.div>
  );
};
