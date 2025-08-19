import { motion, type TargetAndTransition, type Variant } from "framer-motion";

type TimelineLogoProps = {
  imgSrc: string;
  label: string;
  nodeAnimationVariant: Variant;
};

export const TimelineNode = (props: TimelineLogoProps) => {
  const { imgSrc, label,nodeAnimationVariant } = props;
  return (
    <motion.div
      className="flex justify-center items-center rounded-full bg-icon w-[70px] h-[70px]"
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
