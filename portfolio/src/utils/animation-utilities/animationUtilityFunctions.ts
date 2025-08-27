import { AnimationVariants,animationVariants } from "@/utils/animation-utilities/animationVariants";
import type { TargetAndTransition } from "motion/react";

export const returnAnimationVariant=(animationVariant:AnimationVariants)=>{
    return animationVariants[animationVariant] as TargetAndTransition;
}