import { useCallback, useEffect, useState } from "react";

import {
  Box,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";

import { Pass, getPendingPasses } from "../api/Pass";

import EditPass from "../components/pass/EditPass";
import NavBar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import CompletePassModal from "../components/modal/CompletePassModal";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [myPasses, setMyPasses] = useState<Pass[]>([]);
  const [selectedPass, setSelectedPass] = useState<Pass>();
  const [alignment, setAlignment] = useState<string>("Incoming Passes");

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const getPasses = useCallback(async () => {
    try {
      const passes = await getPendingPasses();
      const myPasses = passes.filter(
        (pass: Pass) => pass.user.name === "Johnny Ramirez"
      );
      setMyPasses(myPasses);
    } catch (error) {
      console.error(error);
      alert("Error detected when attempting to fetch passes. Try again.");
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
        <Box
          sx={{
            boxSizing: "border-box",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <CompletePassModal
            modalOpenStates={[openModal, setOpenModal]}
            setPasses={setMyPasses}
            pass={selectedPass}
          />
          <Typography variant="h3" sx={{ textAlign: "center", margin: "30px" }}>
            My Passes
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
          >
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="Incoming Passes">
                Incoming Passes
              </ToggleButton>
              <ToggleButton value="Outgoing Passes">
                Outgoing Passes
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Grid
            container
            spacing={3}
            columns={{ xs: 4, sm: 8, md: 13 }}
            sx={{
              boxSizing: "border-box",
              paddingTop: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {myPasses.map((pass, index) => (
              <Grid item xs={1} sm={2} md={3} key={`${pass},${index}`}>
                <EditPass
                  name={pass.user.name}
                  descriptions={[
                    `Event: ${pass.event}`,
                    `Guest: ${pass.guests || "To be determined"}`,
                    pass.date ? `Date: ${pass.date}` : "",
                  ]}
                  modalOpen={() => {
                    setSelectedPass(pass);
                    setOpenModal(true);
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

export default Home;
