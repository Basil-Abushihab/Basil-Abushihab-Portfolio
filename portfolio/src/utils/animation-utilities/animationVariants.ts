import type { Variants } from "motion/react";

export enum AnimationVariants {
  Spin = "spin",
  MoveUpAndDown = "moveUpAndDown",
  Popup = "popup",
  Popout = "popout",
}

export const animationVariants: Variants = {
  [AnimationVariants.Spin]: {
    rotate: 360,
    transition: { duration: 20, repeat: Infinity, ease: "linear" },
  },
  [AnimationVariants.MoveUpAndDown]: {
    y: [0, -2, 0],
    transition: { duration: 1, repeat: Infinity, ease: "linear" },
  },
  [AnimationVariants.Popup]: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1,type:"spring",stiffness:100,damping:20 },
  },
  [AnimationVariants.Popout]: {
    scale: [1, 0],
    opacity: [1, 0],
    transition: { duration: 1,type:"spring",stiffness:100,damping:20 },
  },

};
