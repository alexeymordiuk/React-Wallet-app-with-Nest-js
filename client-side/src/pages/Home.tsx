import { FC } from "react";
import HomeTransactions from "../components/home-transactions/HomeTransactions";
import { TransactionProvider } from "../components/transactions/TransactionsContext";

const Home: FC = () => {
  return (
    <TransactionProvider>
      <HomeTransactions />
    </TransactionProvider>
  );
};

export default Home;
