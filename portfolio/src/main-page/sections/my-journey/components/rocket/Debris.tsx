import { motion, type ValueKeyframesDefinition } from "framer-motion";

type Debris = {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  yAxisKeyFrames: ValueKeyframesDefinition;
  duration: number;
  delay?: number;
};

const debris: Debris[] = [
  { x: 48, y: 10, width: 5, height: 5, fill: "#FF9933", yAxisKeyFrames: [10, 80], delay: 0, duration: 1.5 },
  { x: 52, y: 20, width: 5, height: 5, fill: "#FF5E00", yAxisKeyFrames: [10, 90], delay: 0, duration: 1.7 },
  { x: 46, y: 25, width: 5, height: 5, fill: "#FFA500", yAxisKeyFrames: [10, 70], delay: 0, duration: 1.8 },
  { x: 50, y: 30, width: 5, height: 5, fill: "#FF7F50", yAxisKeyFrames: [10, 100], delay: 0, duration: 1.9 },
  { x: 54, y: 35, width: 5, height: 5, fill: "#FFD700", yAxisKeyFrames: [10, 85], delay: 0, duration: 2 },
  { x: 47, y: 40, width: 5, height: 5, fill: "#FF8C00", yAxisKeyFrames: [10, 95], delay: 0, duration: 2.2 },
];

export type DebrisParams = {
  width: number;
  height: number;
  offsetX: number;
  offsetY: number;
};

export const Debris = ({ width, height, offsetX, offsetY }: DebrisParams) => {
  const debrisScaler = 0.05;
  const debrisSize = Math.min(width, height) * debrisScaler;

  return (
    <g>
      <svg
      transform={`translate(${offsetX} ${offsetY})`}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <g>
          {debris.map((debrisItem, index) => (
            <motion.rect
              key={index}
              x={debrisItem.x}
              y={debrisItem.y}
              width={debrisSize}
              height={debrisSize}
              fill={debrisItem.fill}
              animate={{
                y: debrisItem.yAxisKeyFrames,
                scale: [1, 0.5],
              }}
              transition={{
                duration: debrisItem.duration,
                repeat: Infinity,
                ease: "easeOut",
                delay: debrisItem.delay ?? 0,
              }}
            />
          ))}
        </g>
      </svg>
    </g>
  );
};
