import { useState } from "react";

import Box from "@mui/material/Box";

import { ClaimPass } from "../components/Pass";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ClaimPassModal } from "../components/Modal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
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
        <Sidebar />
        {/* Allows the cards to wrap without being stretched */}
        <Box>
          <Box
            sx={{
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row wrap",
            }}
          >
            <ClaimPassModal modalOpenStates={[openModal, setOpenModal]} />
            <ClaimPass
              name="Jalen Jones"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setOpenModal(true)}
            />
            <ClaimPass
              name="Nate Drogin"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setOpenModal(true)}
            />
            <ClaimPass
              name="Walker Dubrueil"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setOpenModal(true)}
            />
            <ClaimPass
              name="Christopher Florance"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setOpenModal(true)}
            />
            <ClaimPass
              name="Hugh Markham"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setOpenModal(true)}
            />
            <ClaimPass
              name="Jack Feise"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setOpenModal(true)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
