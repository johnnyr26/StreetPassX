import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from "../elements/Button";
import Card from "../elements/Card";

type Props = {
  event: string;
  from: string;
  guest: string;
  onList: boolean;
};

const Pass = ({ event, from, guest, onList }: Props) => {
  return (
    <Card
      sx={{
        boxSizing: "border-box !important",

        width: "100%",
        padding: "10px",
        margin: "10px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5" component="div">
        {event}
      </Typography>
      <Box>
        <Typography variant="body1" component="div">
          From: {from}
        </Typography>
        <Typography variant="body1" component="div">
          Guest: {guest}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          color={onList ? "secondary" : "primary"}
        >
          {onList ? "Status: On List" : "Status: Not Confirmed On List"}
        </Typography>
      </Box>
    </Card>
  );
};

export default Pass;
