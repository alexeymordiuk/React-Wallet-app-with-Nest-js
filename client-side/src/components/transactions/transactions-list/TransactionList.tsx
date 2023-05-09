import { FC } from "react";
import TransactionListItem from "./TransactionListItem";
import { Expense } from "../../../interface/user.interface";
import { TransactionTableList } from "./TransactionList.styled";

interface ITransactionListProps {
  expenses: Expense[];
  handleDeleteExpense: (id: number | undefined) => Promise<void>;
  deletingExpenseId: number | null;
}

const TransactionList: FC<ITransactionListProps> = ({
  expenses,
  handleDeleteExpense,
  deletingExpenseId,
}) => {
  return (
    <TransactionTableList>
      {expenses.map((expense) => (
        <TransactionListItem
          key={expense.id}
          expense={expense}
          handleDeleteExpense={handleDeleteExpense}
          deletingExpenseId={deletingExpenseId}
        />
      ))}
    </TransactionTableList>
  );
};

export default TransactionList;
