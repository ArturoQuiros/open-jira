import { uiState } from "./";

type uiActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" };

export const uiReducer = (state: uiState, action: uiActionType): uiState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };

    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };

    default:
      return state;
  }
};
