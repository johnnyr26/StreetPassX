import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <Box sx={{ width: "100%", position: "sticky", top: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            StreetPassX
          </Typography>
          <Button color="inherit">
            <Typography variant="body1" component="div">
              My Passes
            </Typography>
          </Button>
          <Button color="inherit">
            <Typography variant="body1" component="div">
              Trade Passes
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
