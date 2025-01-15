import Pass from "./Pass";

const CompletePass = ({
  name,
  descriptions,
  modalOpen,
}: {
  name: string;
  descriptions: string[];
  modalOpen: () => void;
}) => {
  return (
    <Pass
      name={`${name}`}
      descriptions={descriptions}
      buttonTitle={"Complete Pass"}
      onPress={modalOpen}
    />
  );
};

export default CompletePass;
