import { FC } from "react";
import OpenWindowButton from "../../ui/open-window-button/OpenWindowButton";
import { TransactionMobileControlsInner } from "./TransactionsMobieControls.styled";

interface ITransactionsMobileControls {
  setOpen: (value: boolean) => void;
  open: boolean;
  onShowWindow: boolean;
  setOnShowWindow: (value: boolean) => void;
}

const TransactionsMobileControls: FC<ITransactionsMobileControls> = ({
  setOnShowWindow,
  onShowWindow,
  setOpen,
  open
}) => {
  return (
    <TransactionMobileControlsInner>
      <OpenWindowButton
        title={"Update Balance"}
        onClick={() => setOnShowWindow(!onShowWindow)}
      />
      <OpenWindowButton
        title={"Add Transaction"}
        onClick={() => setOpen(!open)}
      />
    </TransactionMobileControlsInner>
  );
};

export default TransactionsMobileControls;
