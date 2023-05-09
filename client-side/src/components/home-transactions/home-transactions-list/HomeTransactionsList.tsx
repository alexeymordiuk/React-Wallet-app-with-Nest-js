import { FC } from "react";
import { useTransactions } from "../../transactions/TransactionsContext";

const HomeTransactionsList: FC = () => {
  const { expenses } = useTransactions();

  return (
    <ul>
      {expenses.map((item) => (
        <div>{item.amount}</div>
      ))}
    </ul>
  );
};

export default HomeTransactionsList;
