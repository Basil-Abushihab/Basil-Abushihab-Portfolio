import { useTimeLineNodes } from "@/context/TimelineNodesContext"
import clsx from "clsx";

export const Contact=()=>{
    const {isTripStarted}=useTimeLineNodes();
    return <div className={clsx("mt-[1200px]",{"hidden":!isTripStarted,})}></div>
}