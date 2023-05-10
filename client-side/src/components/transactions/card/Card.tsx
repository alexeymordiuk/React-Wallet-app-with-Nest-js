import { FC } from "react";
import {
  CardBalanceNumber,
  CardBalanceSubTitle,
  CardBottom,
  CardStyled,
  CardTitleBlock,
  CardVisaTitle,
} from "./Card.styled";
import nfc from "../../../assets/nfc.png";

const Card: FC<{ balance: number | null }> = ({ balance }) => {
  return (
    <CardStyled>
      <CardTitleBlock>
        <CardVisaTitle>VISA</CardVisaTitle>
        <img src={nfc} alt="nfc" />
      </CardTitleBlock>
      <CardBalanceSubTitle>Balance:</CardBalanceSubTitle>
      {balance && <CardBalanceNumber>$ {balance}</CardBalanceNumber>}
      <CardBottom>
        <span>1234 5689 5789 6899 6799</span>
      </CardBottom>
    </CardStyled>
  );
};

export default Card;
