import { FC } from "react";
import { Text } from "recharts";

interface IRechartsLabelProps {
    x?: number;
    y?: number;
    value?: string | number;
}

const RechartsLabel: FC<IRechartsLabelProps> = ({ x, y, value }) => {
  return (
    <Text x={x} y={y} dy={-10} fill="#333" fontSize={12} textAnchor="middle">
      {value}
    </Text>
  );
};

export default RechartsLabel;
