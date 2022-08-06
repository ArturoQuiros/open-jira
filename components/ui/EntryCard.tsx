import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { DragEvent, FC, useContext } from "react";
import { uiContext } from "../../context/ui";
import { Entry } from "../../interfaces";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  //-----------------------------Dragging

  const { setIsDraggingEntry, setIsNotDraggingEntry, isDragging } =
    useContext(uiContext);

  const onDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("entryId", entry._id);
    setIsDraggingEntry();
  };

  const onDragEnd = (event: DragEvent<HTMLDivElement>) => {
    setIsNotDraggingEntry();
  };
  //-----------------------------

  return (
    <Card
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      sx={{ marginBottom: 1 }}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {entry.description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "end",
            paddingRight: 2,
          }}
        >
          <Typography variant="body2"> Hace 30 mins</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
