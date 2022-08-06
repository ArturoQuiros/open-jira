import { FC, PropsWithChildren, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: [];
}

const initalState: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<PropsWithChildren<EntriesState>> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(entriesReducer, initalState);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
