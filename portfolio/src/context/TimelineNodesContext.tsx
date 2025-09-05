import type { TimeLineNodesContextType } from "@/context/timelineNodesReducer";
import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import TimelineNodesReducer,{initialState} from "@/context/timelineNodesReducer";

export const TimeLineNodesContext = createContext<TimeLineNodesContextType | undefined>(undefined);

type TimelineNodesProviderProps = {
  children?: ReactNode;
};


export const TimelineNodesProvider = ({children}: TimelineNodesProviderProps) => {
  const [state,dispatch] = useReducer(TimelineNodesReducer,initialState);

  return (
    <TimeLineNodesContext.Provider
      value={{...state,dispatch}}
    >
      {children}
    </TimeLineNodesContext.Provider>
  );
};

const useTimeLineNodesEffect=(ctx: TimeLineNodesContextType)=>{
  const {isTripFinished,isTripStarted}=ctx
  useEffect(()=>{
   if(!isTripFinished && isTripStarted){
    document.body.style.overflow="hidden";
   }
   else{
    document.body.style.overflow="";
   }

   return ()=>{
    document.body.style.overflow="";
   }
  },[isTripFinished,isTripStarted])
}

export const useTimeLineNodes = () => {
  const ctx = useContext(TimeLineNodesContext);
  if (!ctx) throw new Error("useTimeLineNodes must be used within a TimelineNodesProvider");
  useTimeLineNodesEffect(ctx);
  const {timelineNodes}=ctx;
  const getIsTimeLineNodeOpen = (index:number)=>{
   return timelineNodes[index]?.isOpen;
  }
  return {...ctx,getIsTimeLineNodeOpen};
};