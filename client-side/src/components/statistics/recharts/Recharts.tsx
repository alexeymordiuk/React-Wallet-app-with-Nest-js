import { FC, memo, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Label, Cell } from "recharts";
import { useTransactions } from "../../transactions/TransactionsContext";
import { RechartsWrapper } from "./Recharts.styled";
import DropDownList from "../../ui/drop-down-list/DropDownList";
import { monthOptions } from "../../data/monthOptionsLabels.data";
import RechartsCategoryList from "../recharts-category-list/RechartsCategoryList";
import LoginEmptyBlock from "../../ui/login-empty-block/LoginEmptyBlock";
import { useResponsive } from "../../responsive/ResponsiveProvider";
import RechartsLabel from "../recharts-label/RechartsLabel";

type ExpenseSummary = {
  category: string;
  amount: number;
};

const Recharts: FC = () => {
  const { expenses } = useTransactions();
  const today = new Date();
  const [month, setMonth] = useState(today.getMonth());
  const [dateRange, setDateRange] = useState({
    startDate: new Date(today.getFullYear(), month, 1),
    endDate: new Date(today.getFullYear(), month + 1, 0),
  });
  const { loggedInUser } = useTransactions();
  const { isSm } = useResponsive();

  const COLORS = [
    "#c9b087",
    "#2f425f",
    "#52667a",
    "#3e836e",
    "#3abc6f",
    "#8B0000",
    "#FFC300",
  ];

  const filteredExpenses = expenses.filter((expense) => {
    const expenseDate = expense.createdAt ? new Date(expense.createdAt) : null;
    return (
      expenseDate &&
      expenseDate >= dateRange.startDate &&
      expenseDate <= dateRange.endDate
    );
  });

  const totalSpend = filteredExpenses.reduce(
    (accumulator, current) => accumulator + current.amount,
    0
  );

  const data = filteredExpenses.reduce(
    (accumulator: ExpenseSummary[], current) => {
      const existingIndex = accumulator.findIndex(
        (entry) => entry.category === current.category
      );
      if (existingIndex >= 0) {
        accumulator[existingIndex].amount += current.amount;
      } else {
        accumulator.push({
          category: current.category,
          amount: current.amount,
        });
      }
      return accumulator;
    },
    []
  );

  const handleMonthSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMonth = parseInt(event.target.value, 10);
    setMonth(selectedMonth);
    setDateRange({
      startDate: new Date(today.getFullYear(), selectedMonth, 1),
      endDate: new Date(today.getFullYear(), selectedMonth + 1, 0),
    });
  };

  return (
    <>
      {loggedInUser ? (
        <RechartsWrapper>
          <DropDownList
            options={monthOptions}
            selectedOption={monthOptions[month]}
            handleMonthSelect={handleMonthSelect}
          />
          {data.length > 0 ? (
            <PieChart width={isSm ? 300 : 700} height={isSm ? 360 : 340}>
              <Pie
                dataKey="amount"
                data={data}
                nameKey="category"
                innerRadius={100}
                outerRadius={125}
                stroke={"0"}
                labelLine={false}
              >
                <Label
                  value={`Total Spend: 
                  UAH ${totalSpend}`}
                  position="center"
                  fill="#ffffff"
                />
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                content={(props) => {
                  const { payload } = props;
                  return <RechartsCategoryList payload={payload} />;
                }}
              />
            </PieChart>
          ) : (
            <p>No expenses found in the selected date range.</p>
          )}
        </RechartsWrapper>
      ) : (
        <LoginEmptyBlock title={"Need to login for this page"} />
      )}
    </>
  );
};

export default memo(Recharts);
