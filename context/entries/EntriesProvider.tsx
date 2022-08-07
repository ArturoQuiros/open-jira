import { FC, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";
import { entriesAPI } from "../../apis";

export interface EntriesState {
  entries: Entry[];
}

const initalState: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, initalState);

  //initial state
  useEffect(() => {
    refreshEntries();
  }, []);

  //-----------------------Get
  const refreshEntries = async () => {
    const { data } = await entriesAPI.get<Entry[]>("/entries");
    dispatch({ type: "loadEntry", payload: data });
  };

  //-----------------------Add
  const addNewEntry = async (description: string) => {
    const { data } = await entriesAPI.post<Entry>("/entries", { description });
    dispatch({ type: "addEntry", payload: data });
  };

  //-----------------------Update
  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesAPI.put<Entry>(`/entries/${_id}`, {
        description: description,
        status: status,
      });

      dispatch({ type: "updateEntry", payload: data });
    } catch (error) {
      console.log({ error });
    }
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
