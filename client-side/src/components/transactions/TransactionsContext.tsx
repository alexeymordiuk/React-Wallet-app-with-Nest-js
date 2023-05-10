import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Expense } from "../../interface/user.interface";
import { getExpense } from "../../api/user.api";
import { getAccountBalance } from "../../api/expense.api";

interface TransactionContextType {
  expenses: Array<Expense>;
  balance: number | null;
  setExpenses: Dispatch<SetStateAction<Expense[]>>;
  setBalance: Dispatch<SetStateAction<number | null>>;
  amount: string;
  category: string;
  inputValue: string;
  setAmount: (value: string) => void;
  setCategory: (value: string) => void;
  setInputValue: (value: string) => void;
  deletingExpenseId: number | null;
  setDeletingExpenseId: Dispatch<SetStateAction<number | null>>;
  userId: any;
  loggedInUser: string | null;
  totalAmount: number;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionContext = createContext<TransactionContextType>({
  expenses: [],
  balance: null,
  setExpenses: () => {},
  setBalance: () => {},
  amount: "",
  category: "",
  inputValue: "",
  setCategory: () => {},
  setInputValue: () => {},
  setAmount: () => {},
  deletingExpenseId: null,
  setDeletingExpenseId: () => {},
  userId: null,
  loggedInUser: "",
  totalAmount: 1
});

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [balance, setBalance] = useState<number | null>(null);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [deletingExpenseId, setDeletingExpenseId] = useState<number | null>(
    null
  );
  const loggedInUser = localStorage.getItem("loggedInUser");
  const userId = loggedInUser ? JSON.parse(loggedInUser).id : null;
  const totalAmount = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  useEffect(() => {
    const userId = loggedInUser ? JSON.parse(loggedInUser).id : null;
    if (userId) {
      getExpense(userId).then((data) => {
        setExpenses(data);
      });
    }
  }, [expenses]);

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

  const value: TransactionContextType = {
    expenses,
    balance,
    setExpenses,
    setBalance,
    amount,
    category,
    inputValue,
    setCategory,
    setInputValue,
    setAmount,
    deletingExpenseId,
    setDeletingExpenseId,
    userId,
    loggedInUser,
    totalAmount
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export function useTransactions() {
  return useContext(TransactionContext);
}
