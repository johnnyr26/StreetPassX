import Pass from "./Pass";

const ClaimPass = ({
  name,
  descriptions,
  myPass = false,
  modalOpen,
}: {
  name: string;
  descriptions: string[];
  myPass?: boolean;
  modalOpen: () => void;
}) => {
  return (
    <Pass
      name={name}
      descriptions={descriptions}
      buttonTitle={myPass ? "Edit Pass" : "Accept Pass Request"}
      onPress={modalOpen}
    />
  );
};

export default ClaimPass;
