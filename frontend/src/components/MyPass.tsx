import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Card from "../elements/Card";
import CancelPassModal from "./modal/CancelPassModal";
import TradeRequestModal from "./modal/TradeRequestModal";

type PassProps = {
  event: string;
  member: string;
  guests: string;
  onList: boolean;
};

const Pass = ({ event, member, guests, onList }: PassProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const openMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const handleCancelModalOpen = () => {
    setCancelModalOpen(true);
    handleClose();
  };

  const [tradeRequestModalOpen, setTradeRequestModalOpen] = useState(false);
  const handleTradeRequestModalOpen = () => {
    setTradeRequestModalOpen(true);
    handleClose();
  };

  return (
    <>
      <CancelPassModal
        modalOpenStates={[cancelModalOpen, setCancelModalOpen]}
      />
      <TradeRequestModal
        modalOpenStates={[tradeRequestModalOpen, setTradeRequestModalOpen]}
      />
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            component="div"
            fontStyle={{ textDecoration: onList ? "line-through" : "initial" }}
          >
            {event}
          </Typography>
          <>
            <IconButton sx={{ margin: 0, padding: 0 }} onClick={openMenu}>
              <MoreVertIcon color="primary" />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleTradeRequestModalOpen}>
                Edit Guest
              </MenuItem>
              <MenuItem onClick={handleCancelModalOpen}>Cancel Pass</MenuItem>
            </Menu>
          </>
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="div"
            fontStyle={{ textDecoration: onList ? "line-through" : "initial" }}
          >
            Member: {member}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            fontStyle={{ textDecoration: onList ? "line-through" : "initial" }}
          >
            Guest: {guests}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            color={onList ? "secondary" : "primary"}
            fontStyle={{ textDecoration: onList ? "line-through" : "initial" }}
          >
            {onList ? "Status: On List" : "Status: Not Confirmed On List"}
          </Typography>
        </Box>
      </Card>
    </>
  );
};

export default Pass;
