import { FC } from "react";
import { Expense } from "../../../interface/user.interface";
import {
  TransactioItemDeleteBtn,
  TransactionListItemStyled,
  TransactionListItemText,
} from "./TransactionList.styled";
import { BsFillTrashFill } from "react-icons/bs";

interface ITransactionListItemProps {
  expense: Expense;
  handleDeleteExpense: (id: number | undefined) => Promise<void>;
  deletingExpenseId: number | null;
}

const TransactionListItem: FC<ITransactionListItemProps> = ({
  expense,
  handleDeleteExpense,
  deletingExpenseId,
}) => {
  return (
    <TransactionListItemStyled>
      <TransactionListItemText>{expense.createdAt}</TransactionListItemText>
      <TransactionListItemText>{expense.category}</TransactionListItemText>
      <TransactionListItemText>
        $ {expense.amount}
        <TransactioItemDeleteBtn
          disabled={deletingExpenseId === expense.id}
          onClick={() => handleDeleteExpense(expense.id)}
        >
          <BsFillTrashFill />
        </TransactioItemDeleteBtn>
      </TransactionListItemText>
    </TransactionListItemStyled>
  );
};

export default TransactionListItem;
