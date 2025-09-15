import {
  SectionTitles,
  type TopbarSectionItems,
} from "@/components/layout/top-bar/components/topbar-sections/models/topBarSection";
import { setJourneyModeActive, setNodeOpen } from "@/context/actions";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";

export const useTopBarSections = (
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { dispatch, timelineNodes } = useTimeLineNodes();
  const applySectionSelection = (section: TopbarSectionItems) => {
    if (setOpen) setOpen(false);
    const index = getSectionsNodeIndex(section.href);
    if (index < 0) return;
    dispatch(setNodeOpen({ index: index, isOpen: true }));
    dispatch(setJourneyModeActive({ isActive: false }));

    setTimeout(() => {
      const el = document.getElementById(section.href);
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  };

  const getSectionsNodeIndex = (sectionId: SectionTitles) => {
    switch (sectionId) {
      case SectionTitles.MyJourney:
        return 0;
      case SectionTitles.MyMissions:
        return timelineNodes.length - 1;
      default:
        return -1;
    }
  };
  return { applySectionSelection };
};
