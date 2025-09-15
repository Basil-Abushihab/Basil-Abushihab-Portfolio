import { Star } from "@/components/layout/stars-layer/components/Star";
import { cn } from "@/lib/utils";
import { useMemo, useRef, useLayoutEffect, useState } from "react";

type StarLayerProps = {
  className?: string;
  starCount?: number;
};

export const starAdventurePhrases: string[] = [
  "A new mission awaits among the stars…",
  "Beyond this point lies uncharted space.",
  "Every star is the beginning of a new story.",
  "The journey continues, one constellation at a time.",
  "Adventures grow brighter the further you travel.",
  "Another horizon… another opportunity.",
];

export const StarLayer = ({ className = "", starCount = 80 }: StarLayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const updateSize = () => {
      const rect = containerRef.current!.getBoundingClientRect();
      setBounds({ width: rect.width, height: rect.height });
    };

    updateSize();
    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * bounds.width,
      y: Math.random() * bounds.height+i,
      size: Math.random() *5 + 1,
      phrase:starAdventurePhrases[Math.floor(Math.random()*starAdventurePhrases.length)]
    }));
  }, [bounds.width,bounds.height]);

  return (
    
    <div ref={containerRef} className={cn("absolute inset-0 w-full h-full", className)}>
        {stars.map((star) => (
          <Star whileHover={{scale:1.2}} key={star.id} {...star} />
        ))}
    </div>
  );
};
