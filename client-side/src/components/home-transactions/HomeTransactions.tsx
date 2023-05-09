import HomeTransactionsList from "./home-transactions-list/HomeTransactionsList";
import { FC } from "react";
import { TransactionProvider, useTransactions } from "../transactions/TransactionsContext";
import Card from "../transactions/card/Card";

const HomeTransactions: FC = () => {
  const { balance } = useTransactions()

  return (
    <TransactionProvider>
      <Card balance={balance}/>
      <HomeTransactionsList />
    </TransactionProvider>
  );
};

export default HomeTransactions;
