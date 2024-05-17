import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import MyPass from "./MyPass";

const Sidebar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: "#d9d9d9",
        height: "100vh",
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
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={true}
      />
      <MyPass
        event="Sunday Funday"
        from="Jalen Jones"
        guest="Andrei Iosivas"
        onList={true}
      />
    </Box>
  );
};

export default Sidebar;
