import orangePlanet from "@/assets/timeline-assets/planets/orangePlanet.png";
import firstMissionPlanet from "@/assets/timeline-assets/planets/FirstMissionPlanet.png";
import orangeLogo from "@/assets/timeline-assets/OrangeLogo.svg";
import basilAstronaut from "@/assets/timeline-assets/BasilAstronaut.png";
import projectsDebrief from "@/assets/timeline-assets/projectsDebriefSat.png";
import utilNetLogo from "@/assets/timeline-assets/UtilNetLogo.png";
import {
  PopoverTechStackSection,
  type PopoverTechStackSectionProps,
} from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/TechStackSection";
import type { ComponentType } from "react";
import { AnimationVariants } from "@/utils/animation-utilities/animationVariants";
import { techStackSections } from "@/content/timelineNodes/techStackSectionContent";
import {
  AdventureHighlightSection,
  type AdventureHighlightSectionProps,
} from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/AdventureHighlightSection";
import {
  PopoverArticleSection,
  type Dates,
  type PopoverArticleSectionProps,
} from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/ArticleSection";
import {
  ProjectsSection,
  type ProjectsSectionProps,
} from "@/main-page/sections/my-journey/components/timeline-popups/popups-sections/projects-section/ProjectsSection";
import { projectsCollection } from "@/content/timelineNodes/projectsCollection";
import { SectionTitles } from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection";

//@TODO: Transform the content to be saved on the cloud using firebase for better scalability and easy access for updates.

export type BaseSectionProps = {
  sectionTitle: string;
};

export type ExtraSection<P = {}> = BaseSectionProps & {
  component: ComponentType<P & BaseSectionProps>;
  props: P;
};

export type NodeContent = {
  dates?: Dates;
  nodeLogo?: string;
  sections?: ExtraSection<any>[];
};

export type TimelineNode = {
  nodeImg: string;
  nodeLabel: string;
  nodeContent: NodeContent;
  nodeAnimationVariants: AnimationVariants;
  isLastNode: boolean;
  isOpen: boolean;
  id?:SectionTitles
};

export const timeLineNodes: TimelineNode[] = [
  {
    nodeImg: basilAstronaut,
    id:SectionTitles.MyJourney,
    nodeAnimationVariants: AnimationVariants.MoveUpAndDown,
    nodeLabel: "Me",
    nodeContent: {
      sections: [
        {
          sectionTitle: "Who am I?",
          component: PopoverArticleSection,
          props: {
            description: [
              "I’m Basil Abushihab—welcome to a journey that grows every day with learning, innovation, and creativity.",
              "I’ve wanted to be a software developer since I was a kid. I wrote my first lines of code in C++ in the 10th grade. I didn’t understand everything back then, but I was hooked and I’ve been exploring this world ever since.",
              "I’m passionate about what I do—whether it’s coding or my other hobbies—and I’m always striving to improve. I don’t stop until I reach my goals and see them through.",
            ],
            nodeLogo: basilAstronaut,
          },
        } satisfies ExtraSection<PopoverArticleSectionProps>,
        {
          sectionTitle: "Education",
          component: PopoverArticleSection,
          props: {
            description: [
              "To prepare for the long journey toward my dream, I set my course to become a software engineer. My launchpad was The Hashemite University — the place where I took my very first step toward achieving that dream. There, I laid the foundation for the mission ahead.",
              "Over four years of study, I kept my hands busy and my mind sharp — coding every chance I got, refining my problem-solving skills, and exploring my creativity. I took part in problem-solving contests, deepening my understanding of the fascinating universe of algorithms and data structures.",
              "After graduation, I set my sights on the horizon and kept moving forward — never slowing, never stopping — determined to reach my goals and bring my dream into reality.",
            ],
            dates: { min: 2020, max: 2024 },
          },
        } satisfies ExtraSection<PopoverArticleSectionProps>,
        {
          sectionTitle: "My Tech Stack",
          component: PopoverTechStackSection,
          props: {
            techStackGroups: techStackSections.AboutMe?.techStackGroups ?? {},
          },
        } satisfies ExtraSection<PopoverTechStackSectionProps>,
      ],
    },
    isLastNode: false,
    isOpen: true,
  },
  {
    nodeImg: orangePlanet,
    nodeAnimationVariants: AnimationVariants.Spin,
    nodeLabel: "Orange Coding Academy",
    nodeContent: {
      sections: [
        {
          sectionTitle: "Orange Coding Academy",
          component: PopoverArticleSection,
          props: {
            dates: { min: "May 2024", max: "Nov 2024" },
            description: [
              "Orange Coding Academy is where my journey truly took off. Over seven intense months, I learned under pressure and came out with the skills and mindset that keep driving my learning and innovation.",
              "I trained with both the PERN and MERN stacks, building 10 projects individually and in teams while following an Agile process. Those projects taught me how to think like a developer and collaborate effectively—making the most of limited time and pushing for creative solutions.",
              "It’s also where my path began to take shape. That experience set me on my way to becoming the best version of myself—both as a developer and as a person.",
            ],
            nodeLogo: orangeLogo,
          },
        } satisfies ExtraSection<PopoverArticleSectionProps>,
        {
          sectionTitle: "Adventure Highlight",
          component: AdventureHighlightSection,
          props: {
            highlightBulletPoints: [
              "Served as Scrum Master for one of the 10 projects, taking on a leadership role where I guided the crew, steered our course through organized meetings and task management, and ensured our codebase remained clean, scalable, and mission-ready. ",
              "Worked across a broad spectrum of technologies and features in the 10 web applications I helped launch — an experience that made me more agile, adaptable, and quick to respond to ever-changing mission conditions.",
              "Adapted quickly to high-pressure scenarios, applying problem-solving skills that kept our projects on track and our missions successful.",
            ],
          },
        } satisfies ExtraSection<AdventureHighlightSectionProps>,
        {
          sectionTitle: "Aqquired Skills",
          component: PopoverTechStackSection,
          props: {
            techStackGroups:
              techStackSections.OrangeCodingAcademy?.techStackGroups ?? {},
          },
        } satisfies ExtraSection<PopoverTechStackSectionProps>,
      ],
    },
    isLastNode: false,
    isOpen: false,
  },
  {
    nodeAnimationVariants: AnimationVariants.Spin,
    nodeLabel: "My First Adventure",
    nodeImg: firstMissionPlanet,
    nodeContent: {
      sections: [
        {
          sectionTitle: "My First Adventure",
          component: PopoverArticleSection,
          props: {
            dates: { min: "Oct 2024", max: "Present" },
            nodeLogo: utilNetLogo,
            description: [
              "Utilnet — the first destination in my journey. A place filled with ups and downs, where I gained invaluable experience and learned how to perform under tremendous pressure. It was here that my mindset was sharpened, teaching me how to push through challenges and emerge stronger.",
              "My adventure included working on a Network Inventory Management system called ISP — a CAD-based platform for telecommunications companies, used to design and map telecom equipment across building floors. This required a great deal of attention to detail, writing clean, maintainable code, and ensuring high performance at all times.",
              "Safe to say, this experience elevated me to the next level, bringing me one step closer to achieving my childhood dream.",
            ],
          },
        } satisfies ExtraSection<PopoverArticleSectionProps>,
        {
          sectionTitle: "Adventure Highlight",
          component: AdventureHighlightSection,
          props: {
            highlightBulletPoints: [
              "Engineered a suite of high-precision, mission-critical features, including a snapping system for flawless alignment of equipment on the floor view, a symbology tool empowering users to mark and customize components with colors and visual identifiers, and additional high-performance capabilities to ensure the system remained responsive and accurate under demanding operational conditions.",

              "Spearheaded the navigation from a legacy Redux codebase to Redux Toolkit, charting a new course for state management that boosted scalability, simplified maintenance, and positioned the application’s architecture for future missions.",

              "Enhanced the codebase’s readability, maintainability, and usability, while also proposing and advocating for key frontend security upgrades to safeguard the mission’s systems and ensure a stable flight path for future deployments.",
            ],
          },
        } satisfies ExtraSection<AdventureHighlightSectionProps>,
        {
          sectionTitle: "Aqquired Skills",
          component: PopoverTechStackSection,
          props: {
            techStackGroups: techStackSections.FirstJob?.techStackGroups ?? {},
          },
        } satisfies ExtraSection<PopoverTechStackSectionProps>,
      ],
    },
    isLastNode: false,
    isOpen: false,
  },
  {
    nodeAnimationVariants: AnimationVariants.MoveUpAndDown,
    nodeLabel: "Projects Debrief",
    id:SectionTitles.MyMissions,
    nodeImg: projectsDebrief,
    nodeContent: {
      sections: [
        {
          component: PopoverArticleSection,
          props: {
            description: [
              "And so, we’ve reached the last waypoint of my adventures… for now.",
              "Here lies the mission log — a collection of all my projects and expeditions, both completed and in progress, each one documented and ready for you to explore. But the journey doesn’t truly end here. Beyond this point awaits the final transmission — my last words in this voyage, and your open invitation to connect as we chart the next course together."
            ],
          },
          sectionTitle: "Projects Debrief",
        } satisfies ExtraSection<PopoverArticleSectionProps>,
        {
          component: ProjectsSection,
          props: { projects: projectsCollection },
          sectionTitle: "My Projects",
        } satisfies ExtraSection<ProjectsSectionProps>,
      ],
    },
    isLastNode: true,
    isOpen: false,
  },
];
