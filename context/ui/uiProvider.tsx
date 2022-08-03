import { FC, useReducer } from "react";
import { uiContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => dispatch({ type: "UI - Close Sidebar" });

  return (
    <uiContext.Provider
      value={{
        ...state,

        // Methods
        closeSideMenu,
        openSideMenu,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};
