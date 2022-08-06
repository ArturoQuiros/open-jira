import { UIState } from "./";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "Entry - isAdding" }
  | { type: "Entry - isNotAdding" }
  | { type: "Entry - isDragging" }
  | { type: "Entry - isNotDragging" };

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

    case "Entry - isDragging":
      return {
        ...state,
        isDragging: true,
      };

    case "Entry - isNotDragging":
      return {
        ...state,
        isDragging: false,
      };

    default:
      return state;
  }
};
