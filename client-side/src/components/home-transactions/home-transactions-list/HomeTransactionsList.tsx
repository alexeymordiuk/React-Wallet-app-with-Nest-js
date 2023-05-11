import { FC } from "react";
import { useTransactions } from "../../transactions/TransactionsContext";
import HomeTransactionListItem from "./HomeTransactionListItem";
import {
  HomeTransactionListStyled,
  HomeTransactionListTitle,
} from "./HomeTransactionList.styled";

const HomeTransactionsList: FC = () => {
  const { expenses } = useTransactions();
  const sortedExpenses = expenses.sort((a, b) => {
    if (a.createdAt && b.createdAt) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return 0;
  });

  return (
    <HomeTransactionListStyled>
      <HomeTransactionListTitle>Today</HomeTransactionListTitle>
      {sortedExpenses.map((expense) => (
        <HomeTransactionListItem key={expense.id} expense={expense} />
      ))}
    </HomeTransactionListStyled>
  );
};

export default HomeTransactionsList;
