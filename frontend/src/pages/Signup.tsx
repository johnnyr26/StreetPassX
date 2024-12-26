import { useState } from "react";

import { Box, TextField } from "@mui/material";
import Button from "../elements/Button";
import NavBar from "../components/Navbar";

const Signup = () => {
  const [, setPhoneNumber] = useState<string>();

const handleSignUp = async () => {
      
  };

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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="Phone Number"
          variant="standard"
          sx={{
            width: "640px",
          }}
          name="phone"
        />
        <Button
          sx={{
            width: "640px",
            mt: "24px",
          }}
          onClick={handleSignUp()}
        >
          Sign UP
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
