import { EntriesState } from "./";
import { Entry } from "../../interfaces/entry";

type EntriesActionType = { type: "addEntry"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    //-----------------------
    case "addEntry":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    //-----------------------
    default:
      return state;
  }
};
