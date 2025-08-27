import { Button } from "@/components/ui/button"
import { useTimeLineNodes } from "@/context/timelineNodesContext";

export const TimelineTripControlSection = () => {
    const {setNextVisitedNode,visitedNodeNumber,setIsTimeLineNodeOpen}=useTimeLineNodes();
    const handleNextClick=()=>{
        setNextVisitedNode();
        setIsTimeLineNodeOpen(visitedNodeNumber,false);
        
    }
    return (<Button onClick={handleNextClick}>Next</Button>)
}