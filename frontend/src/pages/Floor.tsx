import { useState } from "react";

import { Box, Grid, Typography } from "@mui/material";

import ClaimPass from "../components/pass/ClaimPass";
import NavBar from "../components/Navbar";
import TradeRequestModal from "../components/modal/TradeRequestModal";
import AcceptPassRequestModal from "../components/modal/AcceptPassRequestModal";
import NewTradeRequest from "../components/NewTradeRequest";

const Floor = () => {
  const [tradeRequestModalOpen, setTradeRequestModalOpen] = useState(false);
  const [acceptPassModalOpen, setAcceptPassModalOpen] = useState(false);

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
          <TradeRequestModal
            modalOpenStates={[tradeRequestModalOpen, setTradeRequestModalOpen]}
          />
          <AcceptPassRequestModal
            modalOpenStates={[acceptPassModalOpen, setAcceptPassModalOpen]}
          />
          <Typography
            variant="h3"
            sx={{ paddingTop: "30px", textAlign: "center" }}
          >
            My Passes
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            columns={{ xs: 4, sm: 8, md: 14 }}
          >
            <Grid item xs={1} sm={2} md={3}>
              <NewTradeRequest setModalOpen={setTradeRequestModalOpen} />
            </Grid>
            {[...new Array(3)].map((key) => (
              <Grid item xs={1} sm={2} md={3} key={key}>
                <ClaimPass
                  name="1 Pass for Saturday, Sept 23"
                  descriptions={[
                    "User: Nathan Drogin",
                    "For: Any Future Saturday Night Out",
                    "Guest: Charlie Palmer",
                  ]}
                  myPass={true}
                  key={key}
                  modalOpen={() => {
                    setTradeRequestModalOpen(true);
                  }}
                />
              </Grid>
            ))}
          </Grid>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginTop: "30px" }}
          >
            Trading Floor
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            columns={{ xs: 4, sm: 8, md: 13 }}
          >
            {[...new Array(12)].map((key) => (
              <Grid item xs={1} sm={2} md={4}>
                <ClaimPass
                  name="1 Pass for Saturday, Sept 23"
                  descriptions={[
                    "User: Nathan Drogin",
                    "For: Any Future Saturday Night Out",
                    "Guest: Charlie Palmer",
                  ]}
                  key={key}
                  modalOpen={() => {
                    setAcceptPassModalOpen(true);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Floor;
