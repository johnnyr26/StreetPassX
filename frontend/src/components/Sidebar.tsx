import { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import MyPass from "./MyPass";

const Sidebar = () => {
  const [windowHeight, setWindowHeight] = useState(
    `${window.innerHeight - 64}px`
  );

  useEffect(() => {
    const handleWindowResize = () => {
      console.log(`${window.innerHeight - 64}px`);
      setWindowHeight(`${window.innerHeight - 64}px`);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Box
      sx={{
        flex: 1,
        boxSizing: "border-box !important",
        height: `${windowHeight}`,
        backgroundColor: "#d9d9d9",
        minWidth: "350px",
        padding: "12px 24px",
        overflow: "scroll",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ flexGrow: 1, fontWeight: "bold" }}
      >
        My Passes
      </Typography>

      <MyPass
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={false}
      />
      <MyPass
        event="Saturday Night Out"
        from="Walker Dubreuil"
        guest="Charlie Palmer"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="James Cross"
        guest="James McGibbons"
        onList={false}
      />
      <MyPass
        event="Sunday Funday"
        from="Charlotte Myers"
        guest="Sofia Michaelides"
        onList={false}
      />
      <MyPass
        event="Sunday Funday"
        from="Liv Bobby"
        guest="Samantha Handwerk"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="Charlotte Myers"
        guest="Sofia Michaelides"
        onList={false}
      />
      <MyPass
        event="Sunday Funday"
        from="Liv Bobby"
        guest="Samantha Handwerk"
        onList={true}
      />
    </Box>
  );
};

export default Sidebar;
