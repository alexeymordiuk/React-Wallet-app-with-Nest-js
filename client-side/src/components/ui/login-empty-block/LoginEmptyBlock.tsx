import { FC } from "react";
import {
  LoginEmptyBlockLink,
  LoginEmptyBlockStyled,
  LoginEmptyBlockTitle,
} from "./LoginEmptyBlock.styled";

interface ILoginEmptyBlockProps {
  title: string;
}

const LoginEmptyBlock: FC<ILoginEmptyBlockProps> = ({ title }) => {
  return (
    <LoginEmptyBlockStyled>
      <LoginEmptyBlockTitle variant="accent3" component="h2">
        {title}
      </LoginEmptyBlockTitle>
      <LoginEmptyBlockLink to={'/registration'}>
        Login
      </LoginEmptyBlockLink>
    </LoginEmptyBlockStyled>
  );
};

export default LoginEmptyBlock;
