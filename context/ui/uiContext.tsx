import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
}

export const uiContext = createContext({} as ContextProps);
