import orangePlanet from "@/assets/timeline-assets/planets/orangePlanet.png";
import firstMissionPlanet from "@/assets/timeline-assets/planets/FirstMissionPlanet.png";
import orangeLogo from "@/assets/timeline-assets/OrangeLogo.svg";
import basilAstronaut from "@/assets/timeline-assets/BasilAstronaut.png";
import projectsDebrief from "@/assets/timeline-assets/projectsDebriefSat.png";
import { PopoverTechStackSection } from "@/main-page/sections/my-journey/components/timelinePopups/popupsSections/TechStackSection";
import type { ComponentType } from "react";
import type { Variants } from "motion/react";
import { AnimationVariants } from "@/utils/animation-utilities/animationVariants";

//@TODO: Transform the content to be saved on the cloud using firebase for better scalability and easy access for updates.

type BaseSectionProps = {
  sectionTitle: string;
  sectionMedia: string | string[];
};

export type ExtraSection<P = {}> = BaseSectionProps & {
  component: ComponentType<P & BaseSectionProps>;
  props: P;
};

export type NodeContent = {
  title: string;
  description: { [key: string]: string } | string;
  nodeLogo?: string;
  extraSections?: ExtraSection[];
};

export type TimelineNode = {
  nodeImg: string;
  nodeLabel: string;
  nodeContent: NodeContent;
  nodeAnimationVariants:AnimationVariants;
  isLastNode: boolean;
  isOpen: boolean;
  isVisited: boolean;
};

export const timeLineNodes: TimelineNode[] = [
  {
    nodeImg: basilAstronaut,
    nodeAnimationVariants:AnimationVariants.MoveUpAndDown,
    nodeLabel: "Me",
    nodeContent: {
      title: "Who am I?",
      description: {
        firstParagraph:
          "I’m Basil Abushihab—welcome to a journey that grows every day with learning, innovation, and creativity.",
        secondParagraph:
          "I’ve wanted to be a software developer since I was a kid. I wrote my first lines of code in C++ in the 10th grade. I didn’t understand everything back then, but I was hooked—and I’ve been exploring this world ever since.",
        thirdParagraph:
          "I’m passionate about what I do—whether it’s coding or my other hobbies—and I’m always striving to improve. I don’t stop until I reach my goals and see them through.",
      },
      nodeLogo: basilAstronaut,
      extraSections: [
        {
          sectionTitle: "My Tech Stack",
          component: PopoverTechStackSection,
          sectionMedia: [],
          props: {},
        },
      ],
    },
    isLastNode: false,
    isOpen: true,
    isVisited: false,
  },
  {
    nodeImg: orangePlanet,
    nodeAnimationVariants:AnimationVariants.Spin,
    nodeLabel: "Orange Coding Academy",
    nodeContent: {
      title: "Orange Coding Academy",
      description: {
        firstParagraph:
          "Orange Coding Academy is where my journey truly took off. Over seven intense months, I learned under pressure and came out with the skills and mindset that keep driving my learning and innovation.",
        secondParagraph:
          "I trained with both the PERN and MERN stacks, building 10 projects individually and in teams while following an Agile process. Those projects taught me how to think like a developer and collaborate effectively—making the most of limited time and pushing for creative solutions.",
        thirdParagraph:
          "It’s also where my path began to take shape. That experience set me on my way to becoming the best version of myself—both as a developer and as a person.",
      },
      nodeLogo: orangeLogo,
      extraSections: [
        {
          sectionTitle: "Aqquired Skills",
          component: PopoverTechStackSection,
          sectionMedia: [],
          props: {},
        },
      ],
    },
    isLastNode: false,
    isOpen: false,
    isVisited: false,
  },
  {
    nodeAnimationVariants:AnimationVariants.Spin,
    nodeLabel: "My First Mission",
    nodeImg: firstMissionPlanet,
    nodeContent: {
      title: "My First Mission",
      description: {
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
      },
    },
    isLastNode: false,
    isOpen: false,
    isVisited: false,
  },
  {
    nodeAnimationVariants:AnimationVariants.MoveUpAndDown,
    nodeLabel: "Projects Debrief",
    nodeImg: projectsDebrief,
    nodeContent: {
      title: "Projects Debrief",
      description: {
        firstParagraph: "",
        secondParagraph: "",
        thirdParagraph: "",
      },
    },
    isLastNode: true,
    isOpen: false,
    isVisited: false,
  },
];
