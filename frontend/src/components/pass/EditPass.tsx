import Pass from "./Pass";

const EditPass = ({
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
      buttonTitle={"Complete Exchange"}
      onPress={modalOpen}
    />
  );
};

export default EditPass;