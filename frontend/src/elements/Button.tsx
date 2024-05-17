import MuiButton, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  textAlign: "left",
  color: "white",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default Button;
