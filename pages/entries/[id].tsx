import { GetServerSideProps } from "next";

import {
  Button,
  capitalize,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Layout } from "../../components/layouts";
import { Entry, EntryStatus } from "../../interfaces";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { ChangeEvent, FC, useContext, useMemo, useState } from "react";
import { dbEntries } from "../../database";
import { EntriesContext } from "../../context/entries";
import { getFormatDateToNow } from "../../helpers";

const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"];

interface Props {
  entry: Entry;
}

export const EntryPage: FC<Props> = ({ entry }) => {
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const { updateEntry, deleteEntry } = useContext(EntriesContext);

  const isNotValid = useMemo(
    () => inputValue.trim().length <= 0 && touched,
    [inputValue, touched]
  );

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;
    const updatedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    };
    updateEntry(updatedEntry, true);

    setTouched(true);
  };

  const onDelete = () => {
    const deletedEntry: Entry = {
      ...entry,
      status,
      description: inputValue,
    };
    deleteEntry(deletedEntry, true);

    setTouched(true);
  };

  return (
    <Layout title={`My Entry`}>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader
              title={`Entry #${entry._id}`}
              subheader={getFormatDateToNow(entry.createdAt) + " ago"}
            ></CardHeader>
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="New Entry"
                autoFocus
                multiline
                label="Description"
                value={inputValue}
                onChange={onTextFieldChanged}
                helperText={isNotValid && "Ingrese un valor"}
                error={isNotValid}
                onBlur={() => setTouched(true)}
              />

              <FormControl>
                <FormLabel> Status</FormLabel>
                <RadioGroup
                  row={true}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  value={status}
                  onChange={onStatusChanged}
                >
                  {validStatus.map((status) => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.trim().length <= 0}
              >
                Save
              </Button>

              <Button
                startIcon={<DeleteForeverOutlinedIcon />}
                variant="outlined"
                fullWidth
                onClick={onDelete}
                disabled={isNotValid}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };

  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  return {
    props: {
      entry,
    },
  };
};

export default EntryPage;
