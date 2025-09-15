export type TopbarSectionItems ={
  href: SectionTitles;
  label: string;
  delay:number;
}

export enum SectionTitles{
  MyJourney="MyJourney",
  MyMissions="MyMissions",
  JoinMe="JoinMe"
}

export const topbarSectionItems: TopbarSectionItems[] = [
  {
    href: SectionTitles.MyJourney,
    label: "My Journey",
    delay:0.25
  },
  {
    href: SectionTitles.MyMissions,
    label: "Completed Missions",
    delay:0.45
  },
  {
    href: SectionTitles.JoinMe,
    label: "Join My Journey",
    delay:0.65
  },
];