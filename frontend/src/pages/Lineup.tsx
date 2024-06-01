import { useState } from "react";

import { Box, Typography } from "@mui/material";

import { EditPass } from "../components/Pass";
import NavBar from "../components/Navbar";
import { ClaimPassModal, TradeRequestModal } from "../components/Modal";
import NewTradeRequest from "../components/NewTradeRequest";

const Lineup = () => {
  const [claimPassModalOpen, setClaimPassModalOpen] = useState(false);
  const [tradeRequestModalOpen, setTradeRequestModalOpen] = useState(false);

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
            <TradeRequestModal
              modalOpenStates={[
                tradeRequestModalOpen,
                setTradeRequestModalOpen,
              ]}
            />
            <ClaimPassModal
              modalOpenStates={[claimPassModalOpen, setClaimPassModalOpen]}
            />
            <NewTradeRequest setModalOpen={setTradeRequestModalOpen} />
            <EditPass
              name="Jalen Jones"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setClaimPassModalOpen(true)}
            />
            <EditPass
              name="Nate Drogin"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setClaimPassModalOpen(true)}
            />
            <EditPass
              name="Walker Dubrueil"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setClaimPassModalOpen(true)}
            />
            <EditPass
              name="Christopher Florance"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setClaimPassModalOpen(true)}
            />
            <EditPass
              name="Hugh Markham"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setClaimPassModalOpen(true)}
            />
            <EditPass
              name="Jack Feise"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
              modalOpen={() => setClaimPassModalOpen(true)}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Lineup;
