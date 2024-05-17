import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
    return (
      <Box sx={{ flexGrow: 1, width: '100%' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              StreetPassX
            </Typography>
            <Button color="inherit">My Passes</Button>
            <Button color="inherit">Trade Passes</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default NavBar;
