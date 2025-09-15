
export enum ActionType {
  SET_NODE_OPEN = "SET_NODE_OPEN",
  NEXT_NODE = "NEXT_NODE",
  SET_TRIP_STARTED = "SET_TRIP_STARTED",
  SET_ROCKET_MOVING = "SET_ROCKET_MOVING",
  SET_TRIP_ENDED = "SET_TRIP_ENDED",
  SET_JORUENY_MODE_ACTIVE="SET_JORUENY_MODE_ACTIVE",
}

type ActionPayloads = {
  [ActionType.SET_NODE_OPEN]: { index: number; isOpen: boolean };
  [ActionType.NEXT_NODE]: void;
  [ActionType.SET_TRIP_STARTED]: { isStarted: boolean };
  [ActionType.SET_ROCKET_MOVING]: { isMoving: boolean };
  [ActionType.SET_TRIP_ENDED]:{isEnded:boolean};
  [ActionType.SET_JORUENY_MODE_ACTIVE]:{isActive:boolean};
};

export type Action = {
  [T in keyof ActionPayloads]: ActionPayloads[T] extends void
    ? { type: T }
    : { type: T; payload: ActionPayloads[T] };
}[keyof ActionPayloads];
 
export const setNodeOpen = (payload:ActionPayloads[ActionType.SET_NODE_OPEN]): Action => ({
  type: ActionType.SET_NODE_OPEN,
  payload
});

export const nextNode = (): Action => ({
  type: ActionType.NEXT_NODE,
});

export const setTripStarted = (payload:ActionPayloads[ActionType.SET_TRIP_STARTED]): Action => ({
  type: ActionType.SET_TRIP_STARTED,
  payload
});

export const setRocketMoving = (payload:ActionPayloads[ActionType.SET_ROCKET_MOVING]): Action => ({
  type: ActionType.SET_ROCKET_MOVING,
  payload
});

export const setTripEnded = (payload:ActionPayloads[ActionType.SET_TRIP_ENDED]): Action => ({
  type:ActionType.SET_TRIP_ENDED,
  payload
})

export const setJourneyModeActive = (payload:ActionPayloads[ActionType.SET_JORUENY_MODE_ACTIVE]): Action => ({
  type:ActionType.SET_JORUENY_MODE_ACTIVE,
  payload
})
