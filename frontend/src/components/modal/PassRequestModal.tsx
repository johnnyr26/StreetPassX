import { useState } from "react";
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import HelpIcon from "@mui/icons-material/Help";

import Modal from "./Modal";
import Button from "../../elements/Button";
import { PassRequest, createPassRequest } from "../../api/PassRequest";

const PassRequestModal = ({
  modalOpenStates,
  setPassRequests,
}: {
  modalOpenStates: [
    open: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
  setPassRequests: React.Dispatch<React.SetStateAction<PassRequest[]>>
}) => {
  const [tradeFor, setTradeFor] = useState<string>("");
  const [tradeForChecked, setTradeForChecked] = useState<boolean>(false);
  const [tradeForDate, setTradeForDate] = useState<Date>();
  const [tradeAway, setTradeAway] = useState<string>("");
  const [tradeAwayChecked, setTradeAwayChecked] = useState<boolean>(false);
  const [tradeAwayDate, setTradeAwayDate] = useState<Date>();
  const [guestChecked, setGuestChecked] = useState<boolean>(false);
  const [guests, setGuests] = useState<string>("");
  const [, setOpen] = modalOpenStates;

  const handleClose = () => {
    setOpen(false);
    setTradeAwayChecked(false);
    setTradeForChecked(false);
    setGuestChecked(false);
  };

  const handleCreatePassRequest = async () => {
    try {
      const args = {
        email: "jr9845@princeton.edu",
        trade_for: tradeFor,
        trade_for_date: tradeForDate?.toISOString(),
        trade_away: tradeAway,
        trade_away_date: tradeAwayDate?.toISOString(),
        guests: guests,
      };
      const response = await createPassRequest(args);
      alert("Pass request has been created successfully.");
      const newPassRequest: PassRequest = response;
      setPassRequests((passRequests) => [...passRequests, newPassRequest]);
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert(
        "An error occured when creating a new pass request. Please try again."
      );
    }
  };

  return (
    <Modal modalOpenStates={modalOpenStates} handleClose={handleClose}>
      <Typography
        variant="h6"
        component="h2"
        sx={{
          mb: "10px",
        }}
      >
        New Pass Exchange Request
      </Typography>
      <FormGroup>
        <TextField
          fullWidth
          label="Trading For"
          variant="standard"
          sx={{
            mr: "10px",
          }}
          onChange={(e) => {
            setTradeFor(e.target.value);
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox onChange={() => setTradeForChecked((prev) => !prev)} />
            }
            sx={{
              mr: "5px",
            }}
            label="Date of event?"
          />
          <Tooltip title="Setting a date will assist in notifying users about when to add members to the list.">
            <HelpIcon color="primary" sx={{ mr: "10px" }} />
          </Tooltip>
          {tradeForChecked && (
            <DatePicker
              onChange={(newDate) => setTradeForDate(newDate?.toDate())}
            />
          )}
        </Box>
        <TextField
          fullWidth
          label="Trading Away"
          variant="standard"
          onChange={(e) => {
            setTradeAway(e.target.value);
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox onChange={() => setTradeAwayChecked((prev) => !prev)} />
            }
            sx={{
              mr: "5px",
            }}
            label="Date of event?"
          />
          <Tooltip title="Setting a date will assist in notifying users about when to add members to the list.">
            <HelpIcon color="primary" sx={{ mr: "10px" }} />
          </Tooltip>
          {tradeAwayChecked && (
            <DatePicker
              onChange={(newDate) => setTradeAwayDate(newDate?.toDate())}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox onChange={() => setGuestChecked((prev) => !prev)} />
            }
            sx={{
              mr: "5px",
            }}
            label="Guests?"
          />
          <Tooltip title="Guests can be added or modified after creating a pass exchange request.">
            <HelpIcon color="primary" sx={{ mr: "10px" }} />
          </Tooltip>
        </Box>
        {guestChecked && (
          <TextField
            fullWidth
            label="Names"
            variant="standard"
            onChange={(e) => setGuests(e.target.value)}
          />
        )}
        <Button
          sx={{ mt: "24px", fontSize: "18px" }}
          onClick={handleCreatePassRequest}
        >
          Submit
        </Button>
      </FormGroup>
    </Modal>
  );
};

export default PassRequestModal;
