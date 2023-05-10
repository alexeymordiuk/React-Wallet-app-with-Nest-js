import { FC } from "react";
import { Expense } from "../../../interface/user.interface";
import {
  HomeTransactionCategory,
  HomeTransactionListItemStyled,
} from "./HomeTransactionList.styled";
import { categoryIconMap } from "../../map/icons-map/icons.map";


interface IHomeTransactionListItemProps {
  expense: Expense;
}


const HomeTransactionListItem: FC<IHomeTransactionListItemProps> = ({
  expense,
}) => {
  const icon = categoryIconMap[expense.category];
  
  return (
    <HomeTransactionListItemStyled>
      <HomeTransactionCategory>{icon}</HomeTransactionCategory>
      <HomeTransactionCategory>$ {expense.amount}</HomeTransactionCategory>
    </HomeTransactionListItemStyled>
  );
};

export default HomeTransactionListItem;
