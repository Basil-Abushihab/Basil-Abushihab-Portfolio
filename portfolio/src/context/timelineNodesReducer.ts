import {timeLineNodes,type TimelineNode} from "@/content/timelineNodes/TimelineNodes";
import { ActionType, type Action } from "@/context/actions";

type State = {
  timelineNodes: TimelineNode[];
  visitedNodeNumber: number;
  isTripStarted: boolean;
  isRocketMoving: boolean;
  isTripFinished:boolean
};

export const initialState: State = {
  timelineNodes: timeLineNodes.map((node) => ({ ...node })),
  visitedNodeNumber: 0,
  isRocketMoving: false,
  isTripStarted: false,
  isTripFinished:false
};

export type TimeLineNodesContextType = State & {
  dispatch: React.Dispatch<Action>;
};

const Reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.SET_NODE_OPEN: {
      const {index,isOpen}=action.payload;
      const updated = [...state.timelineNodes];
      updated[index].isOpen = isOpen;
      return { ...state, timelineNodes: updated };
    }
    case ActionType.SET_NODE_VISITED: {
      const {index,isVisited}=action.payload;
      const updated = [...state.timelineNodes];
      updated[index].isVisited = isVisited;
      return { ...state, timelineNodes: updated };
    }
    case ActionType.NEXT_NODE: {
      const next = state.visitedNodeNumber + 1;
      return {
        ...state,
        visitedNodeNumber: next,
      };
    }
    case ActionType.SET_TRIP_STARTED:{
      const {isStarted}=action.payload;
      return { ...state, isTripStarted: isStarted };
    }
    case ActionType.SET_ROCKET_MOVING:{
      const {isMoving} = action.payload;
      return { ...state, isRocketMoving: isMoving };
    }
    case ActionType.SET_TRIP_ENDED:{
      const {isEnded}=action.payload;
      return {...state,isTripFinished:isEnded};
    }
    default:
      return state;
  }
};

export default Reducer;
