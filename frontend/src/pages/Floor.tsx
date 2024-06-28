import { useState } from "react";

import { Box, Typography } from "@mui/material";

import { ClaimPass } from "../components/Pass";
import NavBar from "../components/Navbar";
import { TradeRequestModal } from "../components/Modal";
import NewTradeRequest from "../components/NewTradeRequest";

const Floor = () => {
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
            Trading Floor
          </Typography>
          <Box
            sx={{
              padding: "0 30px",
              paddingTop: "25px",
            }}
          >
            <NewTradeRequest setModalOpen={setModalOpen} />
          </Box>
          <Box
            sx={{
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row wrap",
            }}
          >
            <TradeRequestModal modalOpenStates={[modalOpen, setModalOpen]} />
            {[...new Array(10)].map((key, index) => (
              <ClaimPass
                name="1 Pass for Saturday, Sept 23"
                descriptions={[
                  "User: Nathan Drogin",
                  "For: Any Future Saturday Night Out",
                  "Guest: Charlie Palmer",
                ]}
                myPass={index === 0}
                key={key}
                modalOpen={setModalOpen}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Floor;
