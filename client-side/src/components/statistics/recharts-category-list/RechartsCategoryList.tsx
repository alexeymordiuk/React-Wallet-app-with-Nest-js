import { FC } from "react";
import RechartsCategoryItem from "./RechartsCategoryItem";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import { RechartsCategotyListStyled } from "./RechartsCategory.styled";

interface IRechartsCategoryListProps {
  payload: Payload[] | undefined;
}

const RechartsCategoryList: FC<IRechartsCategoryListProps> = ({ payload }) => {
  return (
    <RechartsCategotyListStyled>
      {payload?.map((entry, index) => (
        <RechartsCategoryItem key={`item-${index}`} entry={entry}/>
      ))}
    </RechartsCategotyListStyled>
  );
};

export default RechartsCategoryList;
