import { FC, memo } from "react";
import {
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import {RechartsTooltipListStyled } from "./RechartsTooltip.styled";
import RechartsTooltipItem from "./RechartsTooltipItem";

interface IRechartsTooltipProps {
  payload: Payload<ValueType, string | number>[] | undefined;
}

const RechartsTooltip: FC<IRechartsTooltipProps> = ({ payload }) => {
  
  return (
    <RechartsTooltipListStyled>
      {payload?.map((entry, index) => (
        <RechartsTooltipItem key={`item-${index}`} entry={entry}/>
      ))}
    </RechartsTooltipListStyled>
  );
};

export default memo(RechartsTooltip);
