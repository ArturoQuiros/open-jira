import { FC, PropsWithChildren, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";
import { NewEntry } from "../../components/ui/NewEntry";

export interface EntriesState {
  entries: Entry[];
}

const initalState: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, initalState);

  //-----------------------Add
  const addNewEntry = (description: string) => {
    const NewEntry: Entry = {
      _id: uuidv4(),
      description: description,
      status: "pending",
      createdAt: Date.now(),
    };

    dispatch({ type: "addEntry", payload: NewEntry });
  };

  //-----------------------Update
  const updateEntry = (entry: Entry) => {
    dispatch({ type: "updateEntry", payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //props

        //methonds
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
