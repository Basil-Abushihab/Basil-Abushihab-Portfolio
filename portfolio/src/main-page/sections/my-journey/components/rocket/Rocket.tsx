import RocketImg from "@/assets/timeline-assets/Rocket.svg";
import { cn } from "@/lib/utils";
import { Debris } from "@/main-page/sections/my-journey/components/rocket/Debris";
import { motion } from "framer-motion";

export type RocketParams = {
  width: string;
  className?: string;
  height: string;
  ref?: React.Ref<SVGSVGElement>;
};


const RocketComponent = (props: RocketParams) => {
  const { className, height, width,ref } = props;
  const w = parseInt(width.replace("px", ""));
  const h = parseInt(height.replace("px", ""));

  
  return (
    <>
      <svg
        width={w}
        height={h}
        ref={ref}
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        className={cn("overflow-visible bg-transparent", className)}
      >
        <Debris height={h} width={w} offsetX={-10} offsetY={40}/>
        <motion.image href={RocketImg} width={w} height={h}/>
      </svg>
    </>
  );
};

export const Rocket = motion.create(RocketComponent);
