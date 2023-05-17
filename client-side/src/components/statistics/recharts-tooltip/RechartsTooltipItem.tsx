import { FC } from "react";
import {
  NameType,
  Payload,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { categoryIconMap } from "../../map/icons-map/icons.map";
import {
  RechartsTooltipCategory,
  RechartsTooltipListItemStyled,
} from "./RechartsTooltip.styled";

interface IRechartsTooltipItemProps {
  entry: Payload<ValueType, NameType>;
}

const RechartsTooltipItem: FC<IRechartsTooltipItemProps> = ({ entry }) => {
  const icon = categoryIconMap[entry.name as string];

  return (
    <RechartsTooltipListItemStyled entry={entry}>
      <RechartsTooltipCategory variant="text1" component="span">{icon}</RechartsTooltipCategory>
      <RechartsTooltipCategory variant="text1" component="p">
        UAH {entry.value}
      </RechartsTooltipCategory>
    </RechartsTooltipListItemStyled>
  );
};

export default RechartsTooltipItem;
