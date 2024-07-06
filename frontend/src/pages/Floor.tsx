import { useState } from "react";

import { Box, Typography } from "@mui/material";

import ClaimPass from "../components/pass/ClaimPass";
import NavBar from "../components/Navbar";
import TradeRequestModal from "../components/modal/TradeRequestModal";
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
          width: "100%",
        }}
      >
        {/* Allows the cards to wrap without being stretched */}
        <Box sx={{ width: "100%" }}>
          <TradeRequestModal modalOpenStates={[modalOpen, setModalOpen]} />
          <Typography
            variant="h3"
            sx={{ paddingTop: "30px", textAlign: "center" }}
          >
            My Passes
          </Typography>
          <Box
            sx={{
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row wrap",
            }}
          >
            <NewTradeRequest setModalOpen={setModalOpen} />
            {[...new Array(3)].map((key) => (
              <ClaimPass
                name="1 Pass for Saturday, Sept 23"
                descriptions={[
                  "User: Nathan Drogin",
                  "For: Any Future Saturday Night Out",
                  "Guest: Charlie Palmer",
                ]}
                myPass={true}
                key={key}
                modalOpen={() => setModalOpen}
              />
            ))}
          </Box>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Trading Floor
          </Typography>
          <Box
            sx={{
              padding: "30px",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row wrap",
            }}
          >
            {[...new Array(12)].map((key) => (
              <ClaimPass
                name="1 Pass for Saturday, Sept 23"
                descriptions={[
                  "User: Nathan Drogin",
                  "For: Any Future Saturday Night Out",
                  "Guest: Charlie Palmer",
                ]}
                key={key}
                modalOpen={() => setModalOpen}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Floor;
