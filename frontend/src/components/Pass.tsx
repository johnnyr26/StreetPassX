import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from "../elements/Button";
import Card from "../elements/Card";

const Pass = ({
  name,
  descriptions,
  buttonTitle,
  onPress,
}: {
  name: string;
  descriptions: string[];
  buttonTitle: string;
  onPress: () => void;
}) => {
  return (
    <Card
      sx={{
        height: "150px",
        minWidth: "225px",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5" component="div">
        {name}
      </Typography>
      <Box>
        {descriptions.map((description, index) => (
          <Typography
            variant="body1"
            component="div"
            key={`${description},${index}`}
          >
            {description}
          </Typography>
        ))}
      </Box>
      <Button sx={{ height: "42px", fontSize: "18px" }} onPress={onPress}>
        {buttonTitle}
      </Button>
    </Card>
  );
};

export const ClaimPass = ({
  name,
  descriptions,
}: {
  name: string;
  descriptions: string[];
}) => {
  return (
    <Pass
      name={name}
      descriptions={descriptions}
      buttonTitle={"Claim Pass"}
      onPress={() => {}}
    />
  );
};

export const EditPass = ({
  name,
  descriptions,
}: {
  name: string;
  descriptions: string[];
}) => {
  return (
    <Pass
      name={name}
      descriptions={descriptions}
      buttonTitle={"Edit Pass"}
      onPress={() => {}}
    />
  );
};
