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
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
              flexFlow: "row wrap",
            }}
          >
            <TradeRequestModal modalOpenStates={[modalOpen, setModalOpen]} />
            <NewTradeRequest setModalOpen={setModalOpen} />
            <ClaimPass
              name="1 Pass for Saturday, Sept 23"
              descriptions={[
                "For: Any Future Saturday Night Out",
                "Guest: Jalen Jones",
              ]}
              modalOpen={setModalOpen}
            />
            <ClaimPass
              name="1 Pass for Saturday, Sept 23"
              descriptions={[
                "For: Any Future Saturday Night Out",
                "Guest: Jalen Jones",
              ]}
              modalOpen={setModalOpen}
            />
            <ClaimPass
              name="1 Pass for Saturday, Sept 23"
              descriptions={[
                "For: Any Future Saturday Night Out",
                "Guest: Jalen Jones",
              ]}
              modalOpen={setModalOpen}
            />
            <ClaimPass
              name="1 Pass for Saturday, Sept 23"
              descriptions={[
                "For: Any Future Saturday Night Out",
                "Guest: Jalen Jones",
              ]}
              modalOpen={setModalOpen}
            />
            <ClaimPass
              name="1 Pass for Saturday, Sept 23"
              descriptions={[
                "For: Any Future Saturday Night Out",
                "Guest: Jalen Jones",
              ]}
              modalOpen={setModalOpen}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Floor;
