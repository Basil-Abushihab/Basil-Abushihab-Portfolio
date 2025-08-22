import type { NodeContent } from "@/content/timelineNodes/TimelineNodes";
import { motion } from "framer-motion";
export const TimelinePopupContent = (props: NodeContent) => {
  const { description, title, nodeLogo } = props;
  return (
    <motion.div className="flex flex-col w-full gap-4 bg-white rounded-3xl p-10 text-black font-satoshi">
      <img src={nodeLogo} className="w-[50px] h-[50px]" />
      <h3 className="text-lg font-bold mb-2">
        {title}
      </h3>
      {Object.values(description).map((desc, index) => (
        <p key={index} className="mb-2">
          {desc}
        </p>
      ))}
    </motion.div>
  );
};
