import { FC, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Label, Cell } from "recharts";
import { useTransactions } from "../../transactions/TransactionsContext";
import { RechartsWrapper } from "./Recharts.styled";
import DropDownList from "../../ui/drop-down-list/DropDownList";
import { monthOptions } from "../../data/monthOptionsLabels.data";

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
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF1919",
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
    <RechartsWrapper>
      <div>
        <DropDownList
          options={monthOptions}
          selectedOption={monthOptions[month]}
          handleMonthSelect={handleMonthSelect}
        />
        {data.length > 0 ? (
          <PieChart width={600} height={300}>
            <Pie
              dataKey="amount"
              data={data}
              nameKey="category"
              innerRadius={100}
              outerRadius={130}
              stroke={"0"}
              labelLine={false}
            >
              <Label
                value={`Total Spend: ${totalSpend}`}
                position="center"
                fill="#8884d8"
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
                return (
                  <ul>
                    {payload?.map((entry, index) => (
                      <li key={`item-${index}`} style={{ color: entry.color }}>
                        {`${entry.value} ${entry.payload?.amount}`}
                      </li>
                    ))}
                  </ul>
                );
              }}
            />
          </PieChart>
        ) : (
          <p>No expenses found in the selected date range.</p>
        )}
      </div>
    </RechartsWrapper>
  );
};

export default Recharts;
