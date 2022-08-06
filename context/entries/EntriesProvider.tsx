import { FC, PropsWithChildren, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const initalState: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Terminar el cuso de Next",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Terminar el cuso de React Avanzado",
      status: "in-progress",
      createdAt: Date.now() - 1,
    },
    {
      _id: uuidv4(),
      description: "Terminar el cuso de Node",
      status: "finished",
      createdAt: Date.now() - 2,
    },
  ],
};

export const EntriesProvider: FC = ({ children }) => {
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
