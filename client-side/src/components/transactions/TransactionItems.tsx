import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Expense } from "../../interface/user.interface";
import {
  addExpenseAsync,
  deleteExpenseAsync,
} from "../../store/api/expenses.api";
import Card from "./card/Card";
import {
  TransactionItemsWrraper,
  TransactionTableHeader,
  TransactionTableHeaderWrapper,
  TransactionTitle,
} from "./TransactionItems.styled";
import { updateAccountBalance } from "../../api/expense.api";
import TransactionTotalControls from "./transactions-controls/TransactionTotalControls";
import { titles } from "../data/transactions.title.data";
import { useTransactions } from "./TransactionsContext";
import TransactionList from "./transactions-list/TransactionList";
import { addExpense } from "../../api/user.api";
import LoginEmptyBlock from "../ui/login-empty-block/LoginEmptyBlock";

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
    totalAmount
  } = useTransactions();

  const [open, setOpen] = useState(false);
  const dispatch: any = useDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
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
      const newExpense = await addExpense(userId, expenseData);
      setExpenses([...expenses, newExpense]);
      setAmount("");
      setCategory("");
      setOpen(!open);
      if (balance !== null) {
        const newBalance = balance - newExpense.amount;
        setBalance(newBalance);
        await updateAccountBalance(userId, newBalance);
      }
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
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <TransactionTableHeaderWrapper>
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
            </TransactionTableHeaderWrapper>
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
        <LoginEmptyBlock title={'Need to login for this page'}/>
      )}
    </>
  );
};

export default TransactionItems;
