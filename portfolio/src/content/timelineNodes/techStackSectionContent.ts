import type { PopoverTechStackSectionProps } from "@/main-page/sections/my-journey/components/timelinePopups/popupsSections/TechStackSection";
import ReactLogo from "@/assets/tech-logos/front-end/React.svg";
import NextLogo from "@/assets/tech-logos/front-end/NextJs.svg";
import TailwindLogo from "@/assets/tech-logos/front-end/TailwindCss.svg";
import ReduxLogo from "@/assets/tech-logos/front-end/Redux.svg";
import TypeScript from "@/assets/tech-logos/front-end/TypeScript.svg";
import ExpressLogo from "@/assets/tech-logos/back-end/Express.svg";
import MongoDBLogo from "@/assets/tech-logos/back-end/MongoDB.svg";
import NestLogo from "@/assets/tech-logos/back-end/Nest.svg";
import NodeJsLogo from "@/assets/tech-logos/back-end/NodeJs.svg";
import PostgreSQLLogo from "@/assets/tech-logos/back-end/PostgreSQL.svg";
import PrismaLogo from "@/assets/tech-logos/back-end/Prisma.svg";
import BashLogo from "@/assets/tech-logos/devops/Bash.svg";
import DockerLogo from "@/assets/tech-logos/devops/Docker.svg";
import GitLogo from "@/assets/tech-logos/devops/Git.svg";
import GitHubLogo from "@/assets/tech-logos/devops/GitHub.svg";
import PowerShellLogo from "@/assets/tech-logos/devops/PowerShell.svg";
import GitLabLogo from "@/assets/tech-logos/devops/GitLab.svg";
import ASPNETLogo from "@/assets/tech-logos/back-end/ASPNETLogo.svg"

export enum TechSectionGroups {
  FrontEnd = "Front-End",
  BackEnd = "Back-End",
  DevOps = "DevOps",
}

export enum TimelineNodeNames {
  AboutMe = "AboutMe",
  OrangeCodingAcademy = "OrangeCodingAcademy",
  FirstJob = "FirstJob",
}

type TechStackSection = Partial<
  Record<TimelineNodeNames, PopoverTechStackSectionProps>
>;

export const techStackSections: TechStackSection = {
  [TimelineNodeNames.AboutMe]: {
    techStackGroups: {
      [TechSectionGroups.FrontEnd]: [
        {
          experienceUnit: "Years",
          techTitle: "React",
          experience: 1.5,
          techMedia: ReactLogo,
        },
        {
          experienceUnit: "months",
          techTitle: "Next.Js",
          experience: 7,
          techMedia: NextLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "Typescript",
          experience: 1.5,
          techMedia: TypeScript,
        },
        {
          experienceUnit: "Years",
          techTitle: "TailwindCSS",
          experience: 1.5,
          techMedia: TailwindLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "Redux",
          experience: 1.5,
          techMedia: ReduxLogo,
        },
      ],
      [TechSectionGroups.BackEnd]: [
        {
          experienceUnit: "Years",
          techTitle: "Node.Js",
          experience: 1.5,
          techMedia: NodeJsLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "Express.Js",
          experience: 1,
          techMedia: ExpressLogo,
        },
        {
          experienceUnit: "Months",
          techTitle: "Nest.Js",
          experience: 6,
          techMedia: NestLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "Typescript",
          experience: 1.5,
          techMedia: TypeScript,
        },
        {
          experienceUnit: "Months",
          techTitle: "Prisma",
          experience: 6,
          techMedia: PrismaLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "PostgreSQL",
          experience: 1.5,
          techMedia: PostgreSQLLogo,
        },
        {
          experienceUnit: "months",
          techTitle: "MongoDB",
          experience: 6,
          techMedia: MongoDBLogo,
        },
      ],
      [TechSectionGroups.DevOps]: [
        {
          experienceUnit: "Months",
          techTitle: "Docker",
          experience: 4,
          techMedia: DockerLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "Bash",
          experience: 1,
          techMedia: BashLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "PowerShell",
          experience: 1,
          techMedia: PowerShellLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "Git",
          experience: 2,
          techMedia: GitLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "GitLab",
          experience: 1,
          techMedia: GitLabLogo,
        },
        {
          experienceUnit: "Years",
          techTitle: "GitHub",
          experience: 1,
          techMedia: GitHubLogo,
        },
      ],
    },
  },
  [TimelineNodeNames.OrangeCodingAcademy]: {
    techStackGroups: {
      [TechSectionGroups.FrontEnd]: [
        { techTitle: "React", techMedia: ReactLogo },
        { techTitle: "Next.Js", techMedia: NextLogo },
        { techTitle: "Typescript", techMedia: TypeScript },
        { techTitle: "TailwindCSS", techMedia: TailwindLogo },
        { techTitle: "Redux", techMedia: ReduxLogo },
      ],
      [TechSectionGroups.BackEnd]: [
        { techTitle: "Node.Js", techMedia: NodeJsLogo },
        { techTitle: "Express.Js", techMedia: ExpressLogo },
        { techTitle: "PostgreSQL", techMedia: PostgreSQLLogo },
        { techTitle: "MongoDB", techMedia: MongoDBLogo },
      ],
      [TechSectionGroups.DevOps]: [
        { techTitle: "Git", techMedia: GitLogo },
        { techTitle: "GitHub", techMedia: GitHubLogo },
      ],
    },
  },
  [TimelineNodeNames.FirstJob]: { techStackGroups: {
      [TechSectionGroups.FrontEnd]: [
        { techTitle: "React", techMedia: ReactLogo },
        { techTitle: "Typescript", techMedia: TypeScript },
        { techTitle: "TailwindCSS", techMedia: TailwindLogo },
        { techTitle: "Redux", techMedia: ReduxLogo },
      ],
      [TechSectionGroups.BackEnd]: [
        { techTitle: "ASP.NET", techMedia: ASPNETLogo },
        { techTitle: "PostgreSQL", techMedia: PostgreSQLLogo },
      ],
      [TechSectionGroups.DevOps]: [
        { techTitle: "Git", techMedia: GitLogo },
        { techTitle: "GitLab", techMedia: GitLabLogo },
      ],
    } },
};
