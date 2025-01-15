import { useState } from "react";

import { Box, TextField, Typography } from "@mui/material";
import Button from "../elements/Button";
import NavBar from "../components/Navbar";

import { signup, logout } from "../api/Member";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleSignUp = async () => {
    try {
      const args = {
        name,
        phone_number: phoneNumber,
      };
      await signup(args);
      alert("Sign up was successful.");
      location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Error detected when attempting to sign up. Try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      alert("Log out was successful.");
    } catch (error) {
      console.error(error);
      alert("Error detected when attempting to log out. Try again.");
    }
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
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ textAlign: "center", margin: "30px", marginBottom: "120px" }}
        >
          Log In
        </Typography>
        <TextField
          onChange={(e) => setName(e.target.value)}
          label="Full Name"
          variant="standard"
          sx={{
            width: "640px",
          }}
          name="name"
        />
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
            height: "48px",
            width: "640px",
            mt: "24px",
          }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
        <Button
          sx={{
            height: "48px",
            width: "640px",
            mt: "24px",
          }}
          onClick={handleLogout}
        >
          Log out
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
