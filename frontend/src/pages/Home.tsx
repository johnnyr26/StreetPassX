import { useState } from "react";

import { Box, Grid } from "@mui/material";

import EditPass from "../components/pass/EditPass";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ClaimPassModal from "../components/modal/ClaimPassModal";

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
          <ClaimPassModal modalOpenStates={[openModal, setOpenModal]} />
          <Grid
            container
            spacing={3}
            columns={{ xs: 4, sm: 8, md: 13 }}
            sx={{
              boxSizing: "border-box",
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {[...new Array(6)].map((key) => (
              <Grid item xs={1} sm={2} md={4} key={key}>
                <EditPass
                  name="Nathan Drogin"
                  descriptions={[
                    "Event: Sunday Funday",
                    "Guest: Charlie Palmer",
                    "Date: 09/15/2024",
                  ]}
                  modalOpen={() => setOpenModal(true)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
