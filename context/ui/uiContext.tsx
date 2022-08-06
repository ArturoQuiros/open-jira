import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
  setIsAddingEntry: () => void;
  setIsNotAddingEntry: () => void;
}

export const uiContext = createContext({} as ContextProps);
