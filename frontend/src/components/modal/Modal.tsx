import { Box, Modal as MuiModal } from "@mui/material";

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

export default Modal;
