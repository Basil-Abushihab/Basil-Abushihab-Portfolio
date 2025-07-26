export type TopbarSectionItems ={
  href: string;
  label: string;
  delay:number;
}

export const topbarSectionItems: TopbarSectionItems[] = [
  {
    href: "#my-journey",
    label: "My Journey",
    delay:0.25
  },
  {
    href: "#my-missions",
    label: "Completed Missions",
    delay:0.45
  },
  {
    href: "#join-me",
    label: "Join My journey",
    delay:0.65
  },
];