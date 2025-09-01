import { Button } from "@/components/ui/button"
import { nextNode, setNodeOpen } from "@/context/actions";
import { useTimeLineNodes } from "@/context/TimelineNodesContext";

export const TimelineTripControlSection = () => {
    const {visitedNodeNumber,dispatch}=useTimeLineNodes();
    const handleNextClick=()=>{
        dispatch(nextNode());
        dispatch(setNodeOpen({index:visitedNodeNumber,isOpen:false}));
        
    }
    return (<Button onClick={handleNextClick}>Next</Button>)
}