import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import Lineup from './pages/Lineup.tsx';

import { theme } from '../style/theme.ts'
import { ThemeProvider } from '@mui/material'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/lineup",
    element: <Lineup />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
