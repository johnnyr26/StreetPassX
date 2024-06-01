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
import Button from "../elements/Button";
import NumberInput from "../elements/NumberInput";

import HelpIcon from "@mui/icons-material/Help";

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
        Fulfill Exchange with Jalen Jones
      </Typography>
      <Typography variant="body1" component="div" sx={{ textAlign: "center" }}>
        Do you want to confirm the fulfillment of the pass exchange with Jalen
        Jones? Once this action is done, it cannot be undone.
      </Typography>
      <Typography variant="body1" component="div" sx={{ textAlign: "center", color: 'red', mt: '10px' }}>
        Note that by fulfilling a pass exchange, you are confirming that you have added their guest to your list.
      </Typography>
      <Button sx={{ mt: "24px", fontSize: "18px" }} onClick={() => {}}>
        Confirm
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
  const [, setOpen] = modalOpenStates;

  const handleClose = () => {
    setOpen(false);
    setTradeAwayChecked(false);
    setTradeForChecked(false);
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
        New Trade Request
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
            label="Specific Date?"
          />
          <Tooltip title="Setting a date will help notify users when to add members to the list.">
            <HelpIcon color="primary" sx={{ mr: "15px" }} />
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
            label="Specific Date?"
          />
          <Tooltip title="Setting a date will help with notifying users when to add members to the list.">
            <HelpIcon color="primary" sx={{ mr: "15px" }} />
          </Tooltip>
          {tradeAwayChecked && <DatePicker />}
        </Box>
        <TextField fullWidth label="Guest?" variant="standard" />{" "}
        <TextField
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
        />
        <Button sx={{ mt: "24px", fontSize: "18px" }} onClick={() => {}}>
          Submit
        </Button>
      </FormGroup>
    </Modal>
  );
};
