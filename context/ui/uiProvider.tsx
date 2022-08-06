import { FC, useReducer } from "react";
import { uiContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  //------------------------------sidebar

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => dispatch({ type: "UI - Close Sidebar" });

  //-------------------------------entrys
  const setIsAddingEntry = () => {
    dispatch({ type: "Entry - isAdding" });
  };

  const setIsNotAddingEntry = () => {
    dispatch({ type: "Entry - isNotAdding" });
  };

  return (
    <uiContext.Provider
      value={{
        ...state,

        // Methods
        closeSideMenu,
        openSideMenu,
        setIsAddingEntry,
        setIsNotAddingEntry,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};
