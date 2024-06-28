import { Button, Typography } from "@mui/material";

const NewTradeRequest = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      sx={{
        display: "flex",
        backgroundColor: "transparent",
        border: "3px solid #d9d9d9",
        cursor: "pointer",
        borderStyle: "dashed",
        borderRadius: "15px",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "125px",
        width: "100%",
        padding: "10px",
      }}
      onClick={() => {
        setModalOpen(true);
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ textAlign: "center", color: "#a9a9a9" }}
      >
        New Trade Request
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ textAlign: "center", color: "#a9a9a9" }}
      >
        +
      </Typography>
    </Button>
  );
};

export default NewTradeRequest;