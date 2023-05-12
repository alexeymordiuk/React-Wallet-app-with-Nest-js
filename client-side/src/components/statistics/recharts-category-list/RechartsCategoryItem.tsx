import { FC } from "react";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import { RechartsCategotyItemtStyled } from "./RechartsCategory.styled";

interface IRechartsCategoryItemProps {
  entry: Payload;
}

const RechartsCategoryItem: FC<IRechartsCategoryItemProps> = ({ entry }) => {
  return (
    <RechartsCategotyItemtStyled entry={entry}><div></div>{`${entry.value} UAH ${entry.payload?.amount}`}</RechartsCategotyItemtStyled>
  );
};

export default RechartsCategoryItem;
