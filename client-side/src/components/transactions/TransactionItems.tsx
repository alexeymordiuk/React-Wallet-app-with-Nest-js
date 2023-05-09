import { FC, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getExpense } from "../../api/user.api";
import { Expense } from "../../interface/user.interface";
import {
  addExpenseAsync,
  deleteExpenseAsync,
} from "../../store/api/expenses.api";
import Card from "./card/Card";
import {
  TransactionItemsWrraper,
  TransactionTableHeader,
  TransactionTitle,
} from "./TransactionItems.styled";
import { updateAccountBalance } from "../../api/expense.api";
import TransactionTotalControls from "./transactions-controls/TransactionTotalControls";
import { titles } from "../data/transactions.title.data";
import { useTransactions } from "./TransactionsContext";
import TransactionList from "./transactions-list/TransactionList";

const TransactionItems: FC = () => {
  const {
    balance,
    setBalance,
    expenses,
    setExpenses,
    category,
    setCategory,
    setAmount,
    amount,
    inputValue,
    setInputValue,
    deletingExpenseId,
    setDeletingExpenseId,
    userId,
    loggedInUser,
  } = useTransactions();

  const [open, setOpen] = useState(false);
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const dispatch: any = useDispatch();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    if (userId === null) {
      return;
    }
    const expenseData: Expense = {
      amount: parseFloat(amount),
      category,
      userId,
    };
    try {
      const resultAction = await dispatch(
        addExpenseAsync({ userId: String(userId), expenseData })
      );
      setAmount("");
      setCategory("");
      setOpen(!open);
    } catch (error) {
      console.error("Failed to add expense:", error);
    }
  };

  const handleDeleteExpense = async (id: number | undefined) => {
    if (!id) {
      return;
    }
    setDeletingExpenseId(id);
    try {
      await dispatch(deleteExpenseAsync(id));
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== id)
      );
    } catch (error) {
      console.error(error);
    } finally {
      setDeletingExpenseId(null);
    }
  };

  const balanceUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const newBalance = await updateAccountBalance(
        userId,
        parseInt(inputValue)
      );
      setBalance(newBalance);
      setInputValue("");
    } catch (error) {
      console.error("Failed to update balance:", error);
    }
  };

  return (
    <>
      {loggedInUser ? (
        <TransactionItemsWrraper>
          <Card balance={balance} />
          <div>
            <div>
              <TransactionTableHeader>
                {titles.map(({ id, title }) => (
                  <TransactionTitle key={id}>{title}</TransactionTitle>
                ))}
              </TransactionTableHeader>
              <TransactionList
                expenses={expenses}
                handleDeleteExpense={handleDeleteExpense}
                deletingExpenseId={deletingExpenseId}
              />
            </div>
            <TransactionTotalControls
              balanceUpdate={balanceUpdate}
              handleSubmit={handleSubmit}
              open={open}
              setOpen={setOpen}
              amount={amount}
              setAmount={setAmount}
              setCategory={setCategory}
              category={category}
              inputValue={inputValue}
              setInputValue={setInputValue}
              totalAmount={totalAmount}
            />
          </div>
        </TransactionItemsWrraper>
      ) : (
        <div>You need to Login for this page</div>
      )}
    </>
  );
};

export default TransactionItems;
