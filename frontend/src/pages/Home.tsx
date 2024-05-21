import Box from "@mui/material/Box";

import Pass from "../components/Pass";
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
            <Pass
              name="Jalen Jones"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Nate Drogin"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Walker Dubrueil"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Christopher Florance"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Hugh Markham"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
            <Pass
              name="Jack Feise"
              passes={["1x Sunday Funday", "3x Saturday Night Out"]}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
