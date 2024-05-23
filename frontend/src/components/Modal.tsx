import { useState } from "react";
import {
  Box,
  Button as MuiButton,
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

import HelpIcon from "@mui/icons-material/Help";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  width: "500px",
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
        <Typography
          variant="h6"
          component="h2"
          sx={{
            mb: "10px",
          }}
        >
          New Trade Request
        </Typography>
        <FormGroup
          sx={{
            outline: "none !important",
          }}
        >
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
                <Checkbox
                  onChange={() => setTradeAwayChecked((prev) => !prev)}
                />
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
                <Checkbox
                  onChange={() => setTradeForChecked((prev) => !prev)}
                />
              }
              sx={{
                mr: "5px",
              }}
              label="Specific Date?"
            />
            <Tooltip title="Setting a date will help with notifying users when to add members to the list.">
              <HelpIcon color="primary" sx={{ mr: "15px" }} />
            </Tooltip>
            {tradeForChecked && <DatePicker />}
          </Box>
          <TextField
            fullWidth
            multiline
            label="Additional Note"
            variant="standard"
            inputProps={{
              style: {
                maxHeight: "200px",
              },
            }}
          />
          <Button
            sx={{ mt: "24px", fontSize: "18px" }}
            onClick={() => handleClose()}
          >
            Submit
          </Button>
        </FormGroup>
      </Box>
    </MuiModal>
  );
};

export default Modal;
