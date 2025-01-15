import { Typography } from "@mui/material";

import { Pass, completePass } from "../../api/Pass";

import Modal from "./Modal";
import Button from "../../elements/Button";
import React from "react";

const CompletePassModal = ({
  modalOpenStates,
  setPasses,
  pass,
}: {
  modalOpenStates: [
    open: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
  setPasses: React.Dispatch<React.SetStateAction<Pass[]>>;
  pass?: Pass;
}) => {
  const [, setOpen] = modalOpenStates;

  const handleCompletePass = async () => {
    try {
      if (pass === undefined) {
        throw Error("No pass request has been identified by the modal.");
      }

      await completePass(pass);

      alert("Pass has been completed successfully.");
      setPasses(passes => passes.filter(currPass => currPass !== pass))
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred when attempting to complete the pass. Please try again."
      );
    }
  };

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
        Complete Exchange with {pass?.added_by_user.name}
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ textAlign: "center", mt: "18px" }}
      >
        By fulfilling a pass exchange, you are confirming that you have added
        {pass?.added_by_user.name}'s guest to your list.
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ fontSize: "20px", textAlign: "center", color: "red", mt: "18px" }}
      >
        Once this action is done, it cannot be undone.
      </Typography>
      <Button
        sx={{ mt: "18px", fontSize: "18px" }}
        onClick={async () => await handleCompletePass()}
      >
        I have added {pass?.added_by_user.name}'s guest to the list
      </Button>
    </Modal>
  );
};

export default CompletePassModal;
