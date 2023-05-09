import { FC } from "react";
import {
  Form,
  Input,
  SubmitButton,
  Window,
  WindowTitle,
} from "./TransactionWindow.styled";

interface TransactionWindow {
  amount: number | string;
  setAmount: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const TransactionWindow: FC<TransactionWindow> = ({
  handleSubmit,
  amount,
  setAmount,
  category,
  setCategory,
  open,
  setOpen,
}) => {
  return (
    <Window>
      <WindowTitle>Add Transaction</WindowTitle>
      <button onClick={() => setOpen(!open)}>close</button>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <SubmitButton type="submit">Add Expense</SubmitButton>
      </Form>
    </Window>
  );
};

export default TransactionWindow;
