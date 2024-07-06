import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Button from "../../elements/Button";
import Card from "../../elements/Card";

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
        height: "max-content",
        minWidth: "225px",
        padding: "10px",
        margin: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        component="div"
        style={{
          position: "relative",
          top: "0px",
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "10px 0",
        }}
      >
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
      <Button sx={{ height: "42px", fontSize: "18px" }} onClick={onPress}>
        {buttonTitle}
      </Button>
    </Card>
  );
};

export default Pass;