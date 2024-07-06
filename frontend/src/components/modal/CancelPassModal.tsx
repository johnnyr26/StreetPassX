import { Typography } from "@mui/material";

import Modal from "./Modal";
import Button from "../../elements/Button";

const CancelPassModal = ({
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
        Cancel Pass Exchange with Nathan Drogin?
      </Typography>
      {/* <Typography variant="body1" component="div" sx={{ textAlign: "center" }}>
        By cancelling this pass exchange, you are confirming that you have added
        Nathan Drogin's guest to your list.
      </Typography> */}
      <Typography
        variant="body1"
        component="div"
        sx={{ fontSize: "20px", textAlign: "center", color: "red", mt: "24px" }}
      >
        Once this action is done, it cannot be undone.
      </Typography>
      <Button sx={{ mt: "24px", fontSize: "18px" }} onClick={() => {}}>
        Cancel Pass Exchange
      </Button>
    </Modal>
  );
};

export default CancelPassModal;
