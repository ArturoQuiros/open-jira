import { EntriesState } from "./";
import { Entry } from "../../interfaces/entry";

type EntriesActionType =
  | { type: "addEntry"; payload: Entry }
  | { type: "updateEntry"; payload: Entry };

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

    case "updateEntry":
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    //-----------------------
    default:
      return state;
  }
};
