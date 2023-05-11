import { FC } from "react";
import { Expense } from "../../../interface/user.interface";
import {
  HomeTransactionCategory,
  HomeTransactionCategoryBlock,
  HomeTransactionListItemStyled,
} from "./HomeTransactionList.styled";
import { categoryIconMap } from "../../map/icons-map/icons.map";

interface IHomeTransactionListItemProps {
  expense: Expense;
}

const HomeTransactionListItem: FC<IHomeTransactionListItemProps> = ({
  expense,
}) => {
  const icon = categoryIconMap[expense.category];
  const formatDate = (dateString: string): string => {
    const [month, day, year] = dateString.split("/");
    return `${month.padStart(2, "0")}.${day.padStart(2, "0")}`;
  };

  return (
    <HomeTransactionListItemStyled>
      <HomeTransactionCategory>
        <HomeTransactionCategoryBlock>
          {icon}
          <p>{expense.createdAt ? formatDate(expense.createdAt) : ""}</p>
        </HomeTransactionCategoryBlock>
      </HomeTransactionCategory>
      <HomeTransactionCategory>UAH {expense.amount}</HomeTransactionCategory>
    </HomeTransactionListItemStyled>
  );
};

export default HomeTransactionListItem;
