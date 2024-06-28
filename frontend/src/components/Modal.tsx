import { useState } from "react";
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Modal as MuiModal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import HelpIcon from "@mui/icons-material/Help";

import Button from "../elements/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  outline: "none",
  borderRadius: "15px",
  boxShadow: 24,
  width: "500px",
  p: 4,
};

const Modal = ({
  modalOpenStates,
  handleClose,
  children,
}: {
  modalOpenStates: [
    open: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
  handleClose: () => void;
  children?: React.ReactNode;
}) => {
  const [open] = modalOpenStates;

  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box sx={style}>{children}</Box>
    </MuiModal>
  );
};

export const ClaimPassModal = ({
  modalOpenStates,
}: {
  modalOpenStates: [
    open: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
}) => {
  const [, setOpen] = modalOpenStates;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal modalOpenStates={modalOpenStates} handleClose={handleClose}>
      <Typography
        variant="h4"
        component="div"
        sx={{
          textAlign: "center",
          mb: "10px",
        }}
      >
        Complete Exchange with Nathan Drogin?
      </Typography>
      <Typography variant="body1" component="div" sx={{ textAlign: "center" }}>
        By fulfilling a pass exchange, you are confirming that you have added
        Nathan Drogin's guest to your list.
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ textAlign: "center", color: "red", mt: "10px" }}
      >
        Once this action is done, it cannot be undone.
      </Typography>
      <Button sx={{ mt: "24px", fontSize: "18px" }} onClick={() => {}}>
        I have added Nathan Drogin's guest to the list
      </Button>
    </Modal>
  );
};

export const TradeRequestModal = ({
  modalOpenStates,
}: {
  modalOpenStates: [
    open: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
}) => {
  const [tradeAwayChecked, setTradeAwayChecked] = useState(false);
  const [tradeForChecked, setTradeForChecked] = useState(false);
  const [guestChecked, setGuestChecked] = useState(false);
  const [, setOpen] = modalOpenStates;

  const handleClose = () => {
    setOpen(false);
    setTradeAwayChecked(false);
    setTradeForChecked(false);
    setGuestChecked(false);
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
          {tradeForChecked && <DatePicker />}
        </Box>
        <TextField fullWidth label="Trading Away" variant="standard" />
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
          {tradeAwayChecked && <DatePicker />}
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
          <TextField fullWidth label="Names" variant="standard" />
        )}
        {/* <TextField
          fullWidth
          multiline
          label="Additional Note"
          variant="standard"
          sx={{
            mt: "30px",
          }}
          inputProps={{
            style: {
              maxHeight: "200px",
            },
          }}
        /> */}
        <Button sx={{ mt: "24px", fontSize: "18px" }} onClick={() => {}}>
          Submit
        </Button>
      </FormGroup>
    </Modal>
  );
};
