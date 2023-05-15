import HomeTransactionsList from "./home-transactions-list/HomeTransactionsList";
import { FC } from "react";
import { useTransactions } from "../transactions/TransactionsContext";
import Card from "../transactions/card/Card";
import { HomeTransactionWrapper } from "./home-transactions-list/HomeTransactionList.styled";
import LoginEmptyBlock from "../ui/login-empty-block/LoginEmptyBlock";

const HomeTransactions: FC = () => {
  const { balance, loggedInUser } = useTransactions();

  return (
    <>
      {loggedInUser ? (
        <HomeTransactionWrapper>
          <Card balance={balance} />
          <HomeTransactionsList />
        </HomeTransactionWrapper>
      ) : (
        <LoginEmptyBlock title={"Need to login for this page"} />
      )}
    </>
  );
};

export default HomeTransactions;
