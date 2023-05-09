import { FC } from "react";
import TransactionItems from "./TransactionItems";
import { TransactionProvider } from "./TransactionsContext";

const TransactionTable: FC = () => {
  return (
    <TransactionProvider>
      <TransactionItems />
    </TransactionProvider>
  );
};

export default TransactionTable;
