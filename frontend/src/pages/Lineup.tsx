import { useState } from "react";

import { Box, Button, Typography } from "@mui/material";

import Pass from "../components/Pass";
import NavBar from "../components/Navbar";
import Modal from "../components/Modal";

const AddNewEvent = ({
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
        height: "150px",
        width: "225px",
        padding: "10px",
        margin: "10px",
      }}
      onClick={() => {
        setModalOpen(true);
      }}
    >
      <Typography
        variant="h5"
        component="div"
        sx={{ textAlign: "center", color: "#a9a9a9" }}
      >
        Add new Event
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

const Lineup = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {/* Allows the cards to wrap without being stretched */}
        <Box>
          <Typography
            variant="h2"
            sx={{ paddingTop: "30px", textAlign: "center" }}
          >
            My Lineup
          </Typography>
          <Box
            sx={{
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row wrap",
            }}
          >
            <Modal modalOpenStates={[modalOpen, setModalOpen]} />
            <AddNewEvent setModalOpen={setModalOpen} />
            <Pass
              name="Jalen Jones"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Nate Drogin"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Walker Dubrueil"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Christopher Florance"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Hugh Markham"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Jack Feise"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Lineup;
