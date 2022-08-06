import { UIState } from "./";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "Entry - isAdding" }
  | { type: "Entry - isNotAdding" };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sidemenuOpen: true,
      };

    case "UI - Close Sidebar":
      return {
        ...state,
        sidemenuOpen: false,
      };

    case "Entry - isAdding":
      return {
        ...state,
        isAddingEntry: true,
      };

    case "Entry - isNotAdding":
      return {
        ...state,
        isAddingEntry: false,
      };

    default:
      return state;
  }
};
