import { useCallback, useEffect, useState } from "react";

import {
  Box,
  Grid,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";

// api imports
import { Pass, getPendingPasses } from "../api/Pass";
import { User } from "../api/User";

// util imports
import { login } from "../api/User";

// component imports
import EditPass from "../components/pass/EditPass";
import NavBar from "../components/Navbar";
import CompletePassModal from "../components/modal/CompletePassModal";



const Home = () => {
  const [user, setUser] = useState<User | undefined>();
  const [openModal, setOpenModal] = useState(false);
  const [passes, setPasses] = useState<Pass[]>([]);
  const [myPasses, setMyPasses] = useState<Pass[]>([]);
  const [selectedPass, setSelectedPass] = useState<Pass>();
  const [passType, setPassType] = useState<string>("Incoming Passes");

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newPassType: string
  ) => {
    console.log(newPassType);
    setPassType(newPassType);
    filterPasses();
  };

  const getUser = useCallback(async () => {
    try {
      setUser(await login());
    } catch (error) {
      console.error(error);
      alert("An error has occured. Please try again.");
    }
  }, []);

  const filterPasses = useCallback(() => {
    const myPasses = passes.filter(
      (pass: Pass) =>
        pass.user.phone_number === user?.phone_number && passType === "Incoming Passes"
    );
    setMyPasses(myPasses);
  }, [passType, passes, user?.phone_number]);

  const getPasses = useCallback(async () => {
    try {
      await getUser();
      setPasses(await getPendingPasses());
      filterPasses();
    } catch (error) {
      console.error(error);
      alert("Error detected when attempting to fetch passes. Try again.");
    }
  }, [filterPasses, getUser]);

  useEffect(() => {
    getPasses();
  }, []);

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
              value={passType}
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
