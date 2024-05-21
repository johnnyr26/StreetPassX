import { useState } from "react";
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Modal as MuiModal,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "../elements/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const Modal = ({
  modalOpenStates,
}: {
  modalOpenStates: [
    open: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
}) => {
  const [open, setOpen] = modalOpenStates;
  const handleClose = () => {
    setTradeAwayChecked(false);
    setTradeForChecked(false);
    setOpen(false);
  };

  const [tradeAwayChecked, setTradeAwayChecked] = useState(false);
  const [tradeForChecked, setTradeForChecked] = useState(false);

  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Add New Event
        </Typography>
        <FormGroup>
          <TextField
            fullWidth
            id="standard-basic"
            label="Trading Away"
            variant="standard"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: "20px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setTradeAwayChecked((prev) => !prev)}
                />
              }
              label="Specific Date?"
            />
            {tradeAwayChecked && <DatePicker />}
          </Box>
          <TextField
            fullWidth
            id="standard-basic"
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
              mt: "20px",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  onChange={() => setTradeForChecked((prev) => !prev)}
                />
              }
              label="Specific Date?"
            />
            {tradeForChecked && <DatePicker />}
          </Box>
          <Button sx={{ mt: "14px", fontSize: "18px" }}>Submit</Button>
        </FormGroup>
      </Box>
    </MuiModal>
  );
};

export default Modal;
