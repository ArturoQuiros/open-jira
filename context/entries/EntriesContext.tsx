import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];

  //methods
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
