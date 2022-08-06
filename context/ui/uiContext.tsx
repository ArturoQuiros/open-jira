import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
  setIsAddingEntry: () => void;
  setIsNotAddingEntry: () => void;
  setIsDraggingEntry: () => void;
  setIsNotDraggingEntry: () => void;
}

export const uiContext = createContext({} as ContextProps);
