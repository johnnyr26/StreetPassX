import { Button, Typography } from "@mui/material";

const NewTradeRequest = ({
  setModalOpen,
}: {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Button
      sx={{
        backgroundColor: "transparent",
        border: "3px solid #d9d9d9",
        cursor: "pointer",
        borderStyle: "dashed",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "170px",
        width: "245px",
        padding: "10px",
        margin: "10px",
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