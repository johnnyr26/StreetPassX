import { useCallback, useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { Pass, getPendingPasses } from "../api/Pass";

import EditPass from "../components/pass/EditPass";
import NavBar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import ClaimPassModal from "../components/modal/ClaimPassModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [myPasses, setMyPasses] = useState<Pass[]>([]);

  const getPasses = useCallback(async () => {
    try {
      const passes = await getPendingPasses();
      const myPasses = passes.filter(pass => pass.user.name === 'Johnny Ramirez');
      setMyPasses(myPasses)
    } catch (error) {
      console.error(error)
      alert("Error detected when attempting to fetch passes. Try again.")
    }
  }, []);

  useEffect(() => {
    getPasses();
  }, [getPasses]);


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
        {/* <Sidebar /> */}
        {/* Allows the cards to wrap without being stretched */}
        <Box>
          <ClaimPassModal modalOpenStates={[openModal, setOpenModal]} />
          <Typography variant="h3" sx={{ textAlign: "center", margin: "30px" }}>
            My Passes
          </Typography>
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
            {myPasses.map((pass, index) => (
              <Grid item xs={1} sm={2} md={4} key={`${pass},${index}`}>
                <EditPass
                  name={pass.user.name}
                  descriptions={[
                    `Event: ${pass.event}`,
                    `Guest: ${pass.guests || 'To be determined'}`,
                    pass.date ? `Date: ${pass.date}` : '',
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
