import MuiCard, { CardProps } from "@mui/material/Card";
import { styled } from "@mui/material/styles";

const StyledCard = styled(MuiCard)<CardProps>(() => ({
    backgroundColor: "white",
    width: 'max-content',
    textAlign: 'left',
    borderRadius: 10
}));

type Props = {
  children: React.ReactNode;
} & CardProps;

const Card = ({ children, ...props }: Props) => {
  return (
      <StyledCard {...props}>
          {children}
    </StyledCard>
  );
};

export default Card;
