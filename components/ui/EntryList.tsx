import { List, Paper } from "@mui/material";
import { DragEvent, FC, useContext, useMemo } from "react";
import { EntriesContext } from "../../context/entries";
import { uiContext } from "../../context/ui";
import { EntryStatus } from "../../interfaces";
import { EntryCard } from "./";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  //-------------------Entries
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entrie) => entrie.status === status),
    [entries]
  );

  //---------------------Drag n Drop
  const { setIsDraggingEntry, setIsNotDraggingEntry, isDragging } =
    useContext(uiContext);

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("entryId");
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  //render
  return (
    <div
      className={isDragging ? styles.dragging : ""}
      onDrop={onDropEntry}
      onDragOver={allowDrop}
    >
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": { display: "none" },
          padding: "1px 5px",
        }}
      >
        <List sx={{ opacity: isDragging ? 0.25 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
