import { FC, useReducer } from "react";
import { uiContext, uiReducer } from "./";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
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

  //----------------------------dragging

  const setIsDraggingEntry = () => {
    dispatch({ type: "Entry - isDragging" });
  };

  const setIsNotDraggingEntry = () => {
    dispatch({ type: "Entry - isNotDragging" });
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
        setIsDraggingEntry,
        setIsNotDraggingEntry,
      }}
    >
      {children}
    </uiContext.Provider>
  );
};
