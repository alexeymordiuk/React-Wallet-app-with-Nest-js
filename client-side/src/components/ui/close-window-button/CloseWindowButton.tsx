import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { CloseWindowButtonStyled } from "./CloseWindowButton.styled";


const CloseWindowButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <CloseWindowButtonStyled onClick={onClick}>
      <IoMdClose />
    </CloseWindowButtonStyled>
  );
};

export default CloseWindowButton;
