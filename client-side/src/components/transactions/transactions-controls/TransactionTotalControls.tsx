import { FC, FormEvent, memo } from "react";
import {
  AddTransactionBtn,
  TransactionAmount,
  TransactionTotal,
} from "../TransactionItems.styled";
import { BsPlus } from "react-icons/bs";

interface ITransactionControlsProps {
  balanceUpdate: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  inputValue: string;
  setInputValue: (value: string) => void;
  totalAmount: number;
  setOpen: (value: boolean) => void;
  open: boolean;
}

const TransactionTotalControls: FC<ITransactionControlsProps> = ({
  balanceUpdate,
  inputValue,
  setInputValue,
  totalAmount,
  setOpen,
  open,
}) => {
  return (
    <TransactionTotal>
      <form onSubmit={balanceUpdate}>
        <input
          type="text"
          placeholder="Enter amount"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Update Balance</button>
      </form>
      <TransactionAmount>Total: - {totalAmount} Uah</TransactionAmount>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <TransactionAmount>Add Transaction</TransactionAmount>
        <AddTransactionBtn onClick={() => setOpen(!open)}>
          <BsPlus />
        </AddTransactionBtn>
      </div>
    </TransactionTotal>
  );
};

export default memo(TransactionTotalControls);
