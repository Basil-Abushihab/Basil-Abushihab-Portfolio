import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export type TStar = {
  id: number;
  x: number;
  y: number;
  size: number;
  phrase: string;
};

export const StarComponent = (props: TStar) => {
  const { id, x, y, size,phrase } = props;
  return (
    <Tooltip>
      <svg
        width={size * 4}
        height={size * 4}
        style={{
          position: "absolute",
          left: x,
          top: y,
          pointerEvents: "auto",
        }}
      >
        <defs>
          <filter
            id={`glow-${id}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <TooltipTrigger asChild>
          <motion.rect
            key={id}
            className="cursor-pointer"
            x={size}
            y={size}
            width={size}
            height={size}
            rx={1}
            ry={1}
            fill="#3c7cb5"
            filter={`url(#glow-${id})`}
            initial={{ scale: 1, opacity: 0.8 }}
            whileHover={{
              scale: 1.5,
              opacity: 1,
              fill: "#58afff",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          />
        </TooltipTrigger>
      </svg>
      <TooltipContent className="bg-white text-black fill-white" side="top" align="center" >
        <p>✨ {phrase}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const Star = motion.create(StarComponent);
