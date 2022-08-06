import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const NewEntry = () => {
  return (
    <Box
      sx={{
        marginBottom: 2,
        paddingX: 1,
      }}
    >
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        startIcon={<AddOutlinedIcon />}
      >
        New Entry
      </Button>

      <TextField
        label="New Entry"
        helperText="Check the Entry"
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
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
