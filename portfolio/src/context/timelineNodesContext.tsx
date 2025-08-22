import { timeLineNodes, type TimelineNode } from "@/content/timelineNodes/TimelineNodes";
import { createContext, useContext, useState, type ReactNode } from "react";

export type TimeLineNodesContextType = {
    getIsTimeLineNodeVisited: (index:number) => boolean;
    getIsTimeLineNodeOpen: (index:number) => boolean;
    setIsTimeLineNodeOpen: (index:number,isOpen:boolean) => void;
    setIsTimeLineNodeVisited: (index:number,isVisited:boolean) => void;
    timelineNodes:TimelineNode[]
}

export const TimeLineNodesContext = createContext<TimeLineNodesContextType | undefined>(undefined);

type TimelineNodesProviderProps = {
  children?: ReactNode;
};


export const TimelineNodesProvider = ({
  children,
}: TimelineNodesProviderProps) => {
  const [timelineNodes,setTimelineNodes] = useState<TimelineNode[]>(timeLineNodes.map((node) => node));

  const getIsTimeLineNodeVisited = (index:number) => {
    return timelineNodes[index].isVisited;
  };

  const getIsTimeLineNodeOpen = (index:number) => {
    return timelineNodes[index].isOpen;
  };

  const setIsTimeLineNodeOpen = (index:number,isOpen:boolean) => {
    const updatedNodes = [...timelineNodes];
    updatedNodes[index].isOpen = isOpen;
    setTimelineNodes(updatedNodes);
  };

  const setIsTimeLineNodeVisited = (index:number,isVisited:boolean) => {
    const updatedNodes = [...timelineNodes];
    updatedNodes[index].isVisited = isVisited;
    setTimelineNodes(updatedNodes);
  };

  return (
    <TimeLineNodesContext.Provider value={{getIsTimeLineNodeOpen,setIsTimeLineNodeOpen,getIsTimeLineNodeVisited,setIsTimeLineNodeVisited,timelineNodes}}>
      {children}
    </TimeLineNodesContext.Provider>
  );
};


export const useTimeLineNodes = () => {
  const ctx = useContext(TimeLineNodesContext);
  if (!ctx) throw new Error("useTimeLineNodes must be used within a TimelineNodesProvider");
  return ctx;
};