import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Auth from "./utils/Auth.tsx";
import Floor from "./pages/Floor.tsx";
import Signup from "./pages/Signup.tsx";

import { theme } from "../style/theme.ts";
import { ThemeProvider } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/floor",
    element: <Floor />,
  },
  {
    path: "/register",
    element: <Signup />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </LocalizationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
