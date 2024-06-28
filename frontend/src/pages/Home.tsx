import { useState } from "react";

import Box from "@mui/material/Box";

import { EditPass } from "../components/Pass";
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
            {[...new Array(6)].map((key) => (
              <EditPass
                name="Nathan Drogin"
                descriptions={["Event: Sunday Funday", "Guest: Charlie Palmer", "Date: 09/15/2024"]}
                key={key}
                modalOpen={() => setOpenModal(true)}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
