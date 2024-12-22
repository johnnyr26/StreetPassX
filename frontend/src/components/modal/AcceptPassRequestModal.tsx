import { Typography } from "@mui/material";

import Modal from "./Modal";
import Button from "../../elements/Button";
import { acceptPassRequest, PassRequest } from "../../api/PassRequest";
import React from "react";

const AcceptPassRequestModal = ({
  modalOpenStates,
  setPassRequests,
  passRequest,
}: {
  modalOpenStates: [
    open: boolean,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  ];
  setPassRequests: React.Dispatch<React.SetStateAction<PassRequest[]>>;
  passRequest?: PassRequest;
}) => {
  const [, setOpen] = modalOpenStates;

  const handleClose = () => {
    setOpen(false);
  };

  const handleAcceptPassRequest = async () => {
    try {
      if (passRequest === undefined) {
        throw Error("No pass request has been identified by the modal.");
      }

      const args = {
        _id: passRequest._id,
        email: "jr9845@princeton.edu",
        trade_for: passRequest.trade_for,
        trade_for_date: passRequest.trade_for_date,
        trade_away: passRequest.trade_away,
        trade_away_date: passRequest.trade_away_date,
        guests: passRequest.guests,
      };

      const response = await acceptPassRequest(args);
      console.log(response);

      alert("Pass has been created successfully.");
      setPassRequests(passRequests => passRequests.filter(currPassRequest => currPassRequest._id !== passRequest._id))
      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("An error occured when creating a new pass. Please try again.");
    }
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
        Accept Pass Exchange with {passRequest?.user.name}?
      </Typography>
      <Typography
        variant="body1"
        component="div"
        sx={{ textAlign: "center", color: "red", mt: "24px" }}
      >
        Once this action is done, it cannot be undone.
      </Typography>
      <Button
        sx={{ mt: "24px", fontSize: "18px" }}
        onClick={async () => {
          await handleAcceptPassRequest();
          handleClose();
        }}
      >
        Accept Pass Exchange with {passRequest?.user.name}
      </Button>
    </Modal>
  );
};

export default AcceptPassRequestModal;
