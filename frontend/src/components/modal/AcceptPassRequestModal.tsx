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

export default AcceptPassRequestModal;
