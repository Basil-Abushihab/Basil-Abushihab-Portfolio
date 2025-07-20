import { useTransform, useAnimationFrame, useMotionValue, motion } from "motion/react";
import { useRef } from "react";

export type OrbitingLogoParams = {
  radius: number;
  cx: number;
  cy: number;
  size: number;
  imageSrc: string;
  duration?: number;
  index: number; 
  totalCount: number; 
};

export const OrbitingLogo = (params: OrbitingLogoParams) => {
  const {
    radius = 50,
    cx = 50,
    cy = 50,
    size = 20,
    duration = 4,
    imageSrc,
    index,
    totalCount,
  } = params;

  const imageRef = useRef<SVGImageElement>(null);
  const angle = useMotionValue(0);

  useAnimationFrame((time) => {
    const theta = ((time / 1000) * (360 / duration)) % 360;
    angle.set(theta);
  });

  const angleOffset = (360 / totalCount) * index;

  const x = useTransform(angle, (a) =>
    cx + radius * Math.cos(((a + angleOffset) * Math.PI) / 180) - size / 2
  );
  const y = useTransform(angle, (a) =>
    cy + radius * Math.sin(((a + angleOffset) * Math.PI) / 180) - size / 2
  );

  return (
    <>
      {/* Orbiting logo */}
      <motion.image
        ref={imageRef}
        href={imageSrc}
        width={size}
        height={size}
        style={{ x, y }}
        className="rounded-full"
        clipPath={`circle(${size/2}px)`}
      />
    </>
  );
};
