import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { EntriesContext } from "../../context/entries/EntriesContext";
import { uiContext } from "../../context/ui/uiContext";

export const NewEntry = () => {
  //-------------------------------------------
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry, setIsNotAddingEntry } =
    useContext(uiContext);

  //-------------------------------------------
  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) {
      setTouched(true);
      return;
    }

    addNewEntry(inputValue);
    setTouched(false);
    setIsNotAddingEntry();
    setInputValue("");
  };

  const onCancel = () => {
    setTouched(false);
    setIsNotAddingEntry();
    setInputValue("");
  };
  //----------------------------------------------

  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 1,
      }}
    >
      {isAddingEntry ? (
        <>
          <TextField
            value={inputValue}
            onChange={onInputChange}
            label="New Entry"
            error={inputValue.trim().length <= 0 && touched}
            helperText={
              inputValue.trim().length <= 0 && touched
                ? "Please check your entry"
                : ""
            }
            onBlur={() => setTouched(true)}
            fullWidth
            autoFocus
            multiline
            sx={{
              marginTop: 2,
              marginBottom: 1,
            }}
          ></TextField>

          <Box display="flex" justifyContent="space-between">
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<CancelOutlinedIcon />}
              onClick={onCancel}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="secondary"
              startIcon={<SaveOutlinedIcon />}
              onClick={onSave}
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            startIcon={<AddOutlinedIcon />}
            onClick={setIsAddingEntry}
          >
            New Entry
          </Button>
        </>
      )}
    </Box>
  );
};
