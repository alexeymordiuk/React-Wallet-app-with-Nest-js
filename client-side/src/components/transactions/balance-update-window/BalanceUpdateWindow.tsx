import { FC, FormEvent } from "react";
import { BalanceWindow } from "./BalanceUpdateWindow.styled";

interface IBalanceUpdateWindowProps {
  balanceUpdate: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const BalanceUpdateWindow: FC<IBalanceUpdateWindowProps> = ({
  balanceUpdate,
  inputValue,
  setInputValue,
}) => {
  return (
    <BalanceWindow>
      <form onSubmit={balanceUpdate}>
        <input
          type="text"
          placeholder="Enter amount"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Update Balance</button>
      </form>
    </BalanceWindow>
  );
};

export default BalanceUpdateWindow;
