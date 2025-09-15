import { setTripStarted } from "@/context/actions";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";
import { returnAnimationVariant } from "@/utils/animation-utilities/animationUtilityFunctions";
import { AnimationVariants } from "@/utils/animation-utilities/animationVariants";
import arrowDownImage from "@/assets/ArrowDown.png";
import { motion } from "framer-motion";
import clsx from "clsx";
import { cn } from "@/lib/utils";

type ScrollingCallToActionButtonProps = {
  isVisible:boolean;
  className?:string;
  ref?: React.Ref<HTMLButtonElement>;
};
const ScrollingCallToActionButton = (
  props: ScrollingCallToActionButtonProps
) => {
  const { ref,className,isVisible } = props;
  const { dispatch, isTripStarted } = useTimeLineNodes();
  const callToActionAnimationVariant = returnAnimationVariant(
    AnimationVariants.Bounce
  );
  const {isJoruenyModeActive}=useTimeLineNodes();
  
  const scrollDownOnClick = () => {
    if(isVisible)
    dispatch(setTripStarted({ isStarted: true }));
  };
  return (
    <button className={cn(clsx(className,{"hidden":!isJoruenyModeActive}))} ref={ref} onClick={scrollDownOnClick}>
      <motion.img
        animate={callToActionAnimationVariant}
        src={arrowDownImage}
        alt="ArrowDown"
        className={clsx("w-10", {
          hidden: isTripStarted,
          block: !isTripStarted,
        })}
      />
    </button>
  );
};


export const ScrollingButton=motion.create(ScrollingCallToActionButton);