export type TopbarSectionItems ={
  href: string;
  label: string;
  delay:number;
}

export const topbarSectionItems: TopbarSectionItems[] = [
  {
    href: "#experience",
    label: "My Story",
    delay:0.25
  },
  {
    href: "#projects",
    label: "What I’ve Built",
    delay:0.45
  },
  {
    href: "#contact",
    label: "Let’s Connect",
    delay:0.65
  },
];