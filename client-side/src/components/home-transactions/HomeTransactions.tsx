import HomeTransactionsList from "./home-transactions-list/HomeTransactionsList";
import { FC } from "react";
import { TransactionProvider, useTransactions } from "../transactions/TransactionsContext";
import Card from "../transactions/card/Card";
import { HomeTransactionWrapper } from "./home-transactions-list/HomeTransactionList.styled";

const HomeTransactions: FC = () => {
  const { balance } = useTransactions()

  return (
    <TransactionProvider>
      <HomeTransactionWrapper>
      <Card balance={balance}/>
      <HomeTransactionsList />
      </HomeTransactionWrapper>
    </TransactionProvider>
  );
};

export default HomeTransactions;
