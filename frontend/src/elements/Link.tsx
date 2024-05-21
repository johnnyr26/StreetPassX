import MuiLink, { LinkProps } from "@mui/material/Link";
import { styled } from "@mui/material/styles";

const Button = styled(MuiLink)<LinkProps>(() => ({
  textDecoration: "none",
}));

export default Button;
