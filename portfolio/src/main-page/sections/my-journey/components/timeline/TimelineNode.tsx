import { motion } from "framer-motion";

type TimelineLogoProps = {
  imgSrc: string;
  label: string;
};

export const TimelineNode = ({ imgSrc, label }: TimelineLogoProps) => {
  return (
    <motion.div
      className="flex justify-center items-center rounded-full bg-icon w-[60px] h-[60px]"
      aria-label={label}
    >
      <motion.img
        src={imgSrc}
        className="w-[55px] h-[55px] rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
};
