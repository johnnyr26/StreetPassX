import Box from "@mui/material/Box";

import { ClaimPass } from "../components/Pass";
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
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
            <ClaimPass
              name="Jalen Jones"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <ClaimPass
              name="Nate Drogin"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <ClaimPass
              name="Walker Dubrueil"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <ClaimPass
              name="Christopher Florance"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <ClaimPass
              name="Hugh Markham"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <ClaimPass
              name="Jack Feise"
              descriptions={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
