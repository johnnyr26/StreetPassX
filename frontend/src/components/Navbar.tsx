import AppBar from "@mui/material/AppBar";

import { Box, Link, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ width: "100%", position: "sticky", top: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            StreetPassX
          </Typography>
          <Link
            href="/floor"
            color="inherit"
            sx={{ textDecoration: "none", ml: "36px" }}
          >
            <Typography variant="h6" component="div">
              Trading Floor
            </Typography>
          </Link>
          <Link
            href="/"
            color="inherit"
            sx={{ textDecoration: "none", ml: "36px" }}
          >
            <Typography variant="h6" component="div">
              My Passes
            </Typography>
          </Link>
          <Link
            href="/lineup"
            color="inherit"
            sx={{ textDecoration: "none", ml: "36px" }}
          >
            <Typography variant="h6" component="div">
              My Lineup
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
