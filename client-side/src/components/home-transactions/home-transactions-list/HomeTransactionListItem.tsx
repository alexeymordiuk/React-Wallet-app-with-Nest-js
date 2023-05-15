import { FC } from "react";
import { Expense } from "../../../interface/user.interface";
import {
  HomeTransactionCategory,
  HomeTransactionCategoryBlock,
  HomeTransactionListDate,
  HomeTransactionListItemStyled,
} from "./HomeTransactionList.styled";
import { categoryIconMap } from "../../map/icons-map/icons.map";
import dayjs from "dayjs";

interface IHomeTransactionListItemProps {
  expense: Expense;
}

const HomeTransactionListItem: FC<IHomeTransactionListItemProps> = ({
  expense,
}) => {
  const icon = categoryIconMap[expense.category];
  const formatDate = dayjs(expense.createdAt).format('DD.MM') 

  return (
    <HomeTransactionListItemStyled>
      <HomeTransactionCategory variant="accent2" component='p'>
        <HomeTransactionCategoryBlock>
          {icon}
          <HomeTransactionListDate variant="text1" component="span">{formatDate}</HomeTransactionListDate>
        </HomeTransactionCategoryBlock>
      </HomeTransactionCategory>
      <HomeTransactionCategory>UAH {expense.amount}</HomeTransactionCategory>
    </HomeTransactionListItemStyled>
  );
};

export default HomeTransactionListItem;
