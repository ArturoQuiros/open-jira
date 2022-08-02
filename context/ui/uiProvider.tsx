import { FC, PropsWithChildren, useReducer } from "react";
import { uiContext, uiReducer } from "./";

export interface uiState {
  sideMenuOpen: boolean;
}

const initalState: uiState = {
  sideMenuOpen: false,
};

export const uiProvider: FC<PropsWithChildren<uiState>> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initalState);

  return (
    <uiContext.Provider
      value={{
        sideMenuOpen: false,
      }}
    ></uiContext.Provider>
  );
};
