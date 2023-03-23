import { FC, useEffect, useState } from "react";
import { deleteExpense } from "../../api/expense.api";
import { addExpense, getExpense } from "../../api/user.api";
import { Expense } from "../../interface/user.interface";
import Card from "./card/Card";
import {
  TransactionAmount,
  TransactionCategory,
  TransactionDates,
  TransactionItemsWrraper,
  TransactionTable,
  TransactionTableHeader,
  TransactionTitle,
  TransactionTotal,
} from "./TransactionItems.styled";
import { titles } from "./transactions.title.data";
import TransactionWindow from "./TransactionWindow";

const TransactionItems: FC = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deletingExpenseId, setDeletingExpenseId] = useState<number | null>(null);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [open, setOpen] = useState(false);
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loggedInUser = localStorage.getItem("loggedInUser");
    const userId = loggedInUser ? JSON.parse(loggedInUser).id : null;
    if (userId === null) {
    } else {
      try {
        const expenseData: Expense = {
          amount: parseFloat(amount),
          category,
        };
        await addExpense(String(userId), expenseData);
        setAmount("");
        setCategory("");
        setOpen(!open);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDeleteExpense = async (id: number | undefined) => {
    if (!id) {
      return;
    }

    setDeletingExpenseId(id);
    try {
      await deleteExpense(id);
  
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense.id !== id)
      );
    } catch (error) {
      console.error(error);
    } finally {
      setDeletingExpenseId(null);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const userId = loggedInUser ? JSON.parse(loggedInUser).id : null;
    if (userId) {
      getExpense(userId).then((data) => {
        setExpenses(data);
      });
    }
  }, []);

  return (
    <TransactionItemsWrraper>
      <Card />
      <TransactionTable>
        <TransactionTableHeader>
          {titles.map(({ id, title }) => (
            <TransactionTitle key={id}>{title}</TransactionTitle>
          ))}
        </TransactionTableHeader>
        {expenses.map((expense) => (
          
          <TransactionDates key={expense.id}>
            <TransactionCategory>{expense.category}</TransactionCategory>
            <TransactionAmount> - {expense.amount} Uah</TransactionAmount>
            <button
            disabled={deletingExpenseId === expense.id}
            onClick={() => handleDeleteExpense(expense.id)}
          >
            {deletingExpenseId === expense.id ? 'Deleting...' : 'Delete'}
          </button>
          </TransactionDates>
        ))}
        <TransactionTotal>
          <div>Total: - {totalAmount} Uah</div>
          <div>
            <button onClick={() => setOpen(!open)}>+</button>
          </div>
        </TransactionTotal>
      </TransactionTable>
      {open && (
        <TransactionWindow
          handleSubmit={handleSubmit}
          amount={amount}
          category={category}
          setCategory={setCategory}
          setAmount={setAmount}
          open={open}
          setOpen={setOpen}
        />
      )}
    </TransactionItemsWrraper>
  );
};

export default TransactionItems;
