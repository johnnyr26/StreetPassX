import MuiButton, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,

  color: "white",
}));

export default Button;
