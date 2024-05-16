import MuiCard, { CardProps } from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const StyledCard = styled(MuiCard)<CardProps>(() => ({
  backgroundColor: "white",
}));

type Props = {
  children: React.ReactNode;
} & CardProps;

const Card = ({ children, ...props }: Props) => {
  return (
    <StyledCard {...props}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

export default Card;
