import RocketImg from "@/assets/timeline-assets/Rocket.svg";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";

export type RocketParams = {
  className: string;
  width: string;
  height: string;
};


export const Rocket = (props: RocketParams) => {
  const { className, height, width } = props;
  const rocketRef=useRef<SVGSVGElement>(null);
  const w = parseInt(width.replace("px", ""));
  const h = parseInt(height.replace("px", ""));

  
  return (
    <>
      <svg
        width={w}
        height={h}
        ref={rocketRef}
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        className={cn("overflow-visible bg-transparent", className)}
      >
        <motion.image href={RocketImg} width={w} height={h}/>
      </svg>
    </>
  );
};
