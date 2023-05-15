import { FC } from "react";
import { LogOutButton, LogoutBlockStyled, LogoutBlockTitle } from "./LogoutBlock.styled";

interface ILogoutBlockProps {
  title: string;
  titleBtn: string;
  onClick: () => Promise<void>;
  email: string | null;
}

const LogoutBlock: FC<ILogoutBlockProps> = ({ title, titleBtn, onClick, email }) => {
  return (
    <LogoutBlockStyled>
      <LogoutBlockTitle variant="accent3" component="h2">{title} {email}</LogoutBlockTitle>
      <LogOutButton onClick={onClick}>{titleBtn}</LogOutButton>
    </LogoutBlockStyled>
  );
};

export default LogoutBlock;
