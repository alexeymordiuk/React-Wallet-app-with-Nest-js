import { FC } from "react";
import { useTransactions } from "../../transactions/TransactionsContext";
import HomeTransactionListItem from "./HomeTransactionListItem";
import {
  HomeTransactionListStyled,
  HomeTransactionListTitle,
} from "./HomeTransactionList.styled";

const HomeTransactionsList: FC = () => {
  const { expenses } = useTransactions();

  return (
    <HomeTransactionListStyled>
      <HomeTransactionListTitle>Today</HomeTransactionListTitle>
      {expenses.map((expense) => (
        <HomeTransactionListItem key={expense.id} expense={expense} />
      ))}
    </HomeTransactionListStyled>
  );
};

export default HomeTransactionsList;
