import { FC, FormEvent, memo, useState } from "react";
import {
  TransactionAmount,
  TransactionTotal,
} from "../TransactionItems.styled";
import BalanceUpdateWindow from "../balance-update-window/BalanceUpdateWindow";
import TransactionWindow from "../transaction-window/TransactionWindow";
import OpenWindowButton from "../../ui/open-window-button/OpenWindowButton";
import { useResponsive } from "../../responsive/ResponsiveProvider";
import TransactionsMobileControls from "../transactions-mobile-controls/TransactionsMobileControls";

interface ITransactionControlsProps {
  balanceUpdate: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  inputValue: string;
  setInputValue: (value: string) => void;
  totalAmount: number;
  amount: number | string;
  setAmount: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const TransactionTotalControls: FC<ITransactionControlsProps> = ({
  balanceUpdate,
  inputValue,
  setInputValue,
  totalAmount,
  handleSubmit,
  amount,
  setAmount,
  category,
  setCategory,
  open,
  setOpen,
}) => {
  const [onShowWindow, setOnShowWindow] = useState(false);
  const { isSm } = useResponsive();

  return (
    <TransactionTotal>
      {onShowWindow && (
        <BalanceUpdateWindow
          balanceUpdate={balanceUpdate}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      )}
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
      {isSm ? (
        <TransactionsMobileControls
          setOnShowWindow={setOnShowWindow}
          open={open}
          setOpen={setOpen}
          onShowWindow={onShowWindow}
        />
      ) : (
        <>
          <TransactionAmount>Total: - {totalAmount} Uah</TransactionAmount>
          <OpenWindowButton
            title={"Update Balance"}
            onClick={() => setOnShowWindow(!onShowWindow)}
          />
          <OpenWindowButton
            title={"Add Transaction"}
            onClick={() => setOpen(!open)}
          />
        </>
      )}
    </TransactionTotal>
  );
};

export default memo(TransactionTotalControls);
