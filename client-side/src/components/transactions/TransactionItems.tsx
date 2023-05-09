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
  TransactionAmount,
  TransactionCategory,
  TransactionDates,
  TransactionDeleteBtn,
  TransactionItemsWrraper,
  TransactionTable,
  TransactionTableHeader,
  TransactionTitle,
} from "./TransactionItems.styled";
import { titles } from "../data/transactions.title.data";
import { BsFillTrashFill } from "react-icons/bs";
import { getAccountBalance, updateAccountBalance } from "../../api/expense.api";
import TransactionTotalControls from "./transactions-controls/TransactionTotalControls";

const TransactionItems: FC = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deletingExpenseId, setDeletingExpenseId] = useState<number | null>(
    null
  );
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [open, setOpen] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [inputValue, setInputValue] = useState("");
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const dispatch: any = useDispatch();
  const loggedInUser = localStorage.getItem("loggedInUser");
  const userId = loggedInUser ? JSON.parse(loggedInUser).id : null;

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
    console.log("userId:", userId);
    console.log("inputValue:", inputValue);
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

  useEffect(() => {
    const fetchBalance = async () => {
      if (userId) {
        try {
          const balance = await getAccountBalance(userId);
          setBalance(balance);
        } catch (error) {
          console.error("Failed to get balance:", error);
        }
      }
    };

    fetchBalance();
  }, [userId]);

  useEffect(() => {
    const userId = loggedInUser ? JSON.parse(loggedInUser).id : null;
    if (userId) {
      getExpense(userId).then((data) => {
        setExpenses(data);
      });
    }
  }, []);

  return (
    <>
      {loggedInUser ? (
        <TransactionItemsWrraper>
          <Card balance={balance} />
          <div>
            <TransactionTable>
              <TransactionTableHeader>
                {titles.map(({ id, title }) => (
                  <TransactionTitle key={id}>{title}</TransactionTitle>
                ))}
              </TransactionTableHeader>
              {expenses.map((expense) => (
                <TransactionDates key={expense.id}>
                  <TransactionAmount>{expense.createdAt}</TransactionAmount>
                  <TransactionCategory>{expense.category}</TransactionCategory>
                  <TransactionAmount>
                    - {expense.amount} Uah
                    <TransactionDeleteBtn
                      disabled={deletingExpenseId === expense.id}
                      onClick={() => handleDeleteExpense(expense.id)}
                    >
                      <BsFillTrashFill />
                    </TransactionDeleteBtn>
                  </TransactionAmount>
                </TransactionDates>
              ))}
            </TransactionTable>
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
