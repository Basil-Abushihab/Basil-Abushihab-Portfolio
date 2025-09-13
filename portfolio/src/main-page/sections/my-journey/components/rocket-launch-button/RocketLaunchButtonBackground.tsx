import { motion } from "framer-motion";
import { useMemo } from "react";

type RocketLaunchButtonBackgroundProps = {
  width: string;
  height: string;
  isHovering: boolean;
  starCount?: number;
};

export const RocketLaunchButtonBackground = (props: RocketLaunchButtonBackgroundProps) => {
  const {height,isHovering,width,starCount=15}=props;
  const w = parseInt(width.replace("px", ""), 10);
  const h = parseInt(height.replace("px", ""), 10);
 const stars = useMemo(() => {
  return Array.from({ length: starCount }, (_, i) => {
    const distance = 20;
    return {
      id: i,
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      dx: distance,
      dy: distance, 
      duration: isHovering ? (Math.random() * 3 + 2)/10:(Math.random() * 3 + 2),
    };
  });
}, [w, h, starCount,isHovering]);


  return (
    <svg
      className="absolute rotate-90"
      height={height}
      width={width}
      viewBox={`0 0 ${w} ${h}`}
    >
      {stars.map((star) => (
        <motion.rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={star.size}
          height={star.size}
          rx={1}
          ry={1}
          fill={isHovering ? "#58afff" : "#3c7cb5"}
          initial={{ opacity: 0.6 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            x: [star.x, star.x + star.dx],
            y: [star.y, star.y + star.dy],
          }}
          transition={{
            duration:star.duration,
            repeat: Infinity,
            ease: "circInOut",
          }}
        />
      ))}
    </svg>
  );
};
