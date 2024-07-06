import AppBar from "@mui/material/AppBar";

import { Box, Link, Toolbar, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ width: "100%", position: "sticky", top: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Link
            href="/floor"
            color="inherit"
            sx={{ flexGrow: 1, textDecoration: "none" }}
          >
            <Typography variant="h5" component="div">
              StreetPassX
            </Typography>
          </Link>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
