import MuiButton, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Button = styled(MuiButton)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  textAlign: 'left',
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default Button;
