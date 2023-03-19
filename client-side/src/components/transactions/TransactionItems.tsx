import { FC, useEffect, useState } from "react";
import { addExpense, getExpense } from "../../api/user.api";
import { Expense } from "../../interface/user.interface";
import {
  TransactionDates,
  TransactionItemsWrraper,
  TransactionTable,
  TransactionTableHeader,
} from "./TransactionItems.styled";
import { titles } from "./transactions.title.data";

const TransactionItems: FC = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("")
  const [expenses, setExpenses] = useState<Expense[]>([]);

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
      } catch (error) {
        console.error(error);
      }
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
      <TransactionTable>
          <TransactionTableHeader>
            {titles.map(({ id, title }) => (
              <h2 key={id}>{title}</h2>
            ))}
          </TransactionTableHeader>
          {expenses.map((expense) => (
          <TransactionDates key={expense.id}>
            <div>{expense.category}</div>
            <div>{expense.amount} Uah</div>
          </TransactionDates>
          ))}
        </TransactionTable>
        <div style={{textAlign: 'right'}}>
        <button>+</button>
        </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </TransactionItemsWrraper>
  );
};

export default TransactionItems;
