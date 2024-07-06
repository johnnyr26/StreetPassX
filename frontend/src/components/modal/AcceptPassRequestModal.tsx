import { Typography } from "@mui/material";

import Modal from "./Modal";
import Button from "../../elements/Button";

const AcceptPassRequestModal = ({
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
        Accept Pass Exchange with Nathan Drogin?
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ textAlign: "center", color: "red", mt: "24px" }}
      >
        Once this action is done, it cannot be undone.
      </Typography>
      <Button sx={{ mt: "24px", fontSize: "18px" }} onClick={() => {}}>
        Accept Pass Exchange with Nathan Drogin
      </Button>
    </Modal>
  );
};

export default AcceptPassRequestModal;
