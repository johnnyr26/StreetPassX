import "./App.css";

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

import NavBar from "./components/Navbar";
import Button from "./elements/Button";
import Card from "./elements/Card";

const Pass = ({ name, passes }: { name: string, passes: string[] }) => {
  return (
    <Card
      sx={{
        height: "150px",
        width: "225px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Box>
        {passes.map((pass) => (
          <Typography variant="body1" component="div" key={pass}>
            {pass}
          </Typography>
        ))}
      </Box>

      <Button sx={{height: '42px', fontSize: '18px'}}>Claim Pass</Button>
    </Card>
  );
}

const App = () => {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Pass
          name="Jalen Jones"
          passes={["1x Sunday Funday", "3x Saturday Night Out"]}
        />
        <Pass
          name="Jalen Jones"
          passes={["1x Sunday Funday", "3x Saturday Night Out"]}
        />
        <Pass
          name="Jalen Jones"
          passes={["1x Sunday Funday", "3x Saturday Night Out"]}
        />
      </Box>
    </>
  );
};

export default App;
