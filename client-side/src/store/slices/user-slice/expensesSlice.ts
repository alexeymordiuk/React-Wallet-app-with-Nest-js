import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Expense } from '../../../interface/user.interface';
import { deleteExpenseAsync } from '../../api/expenses.api';

interface ExpensesSliceState {
    expenses: Expense[];
  }

  const initialState: ExpensesSliceState = {
    expenses: [],
  };

  export const expenseSlice = createSlice({
    name: 'expenses',
    initialState,
    reducers: {
      addExpense: (state, action) => {
        state.expenses.push(action.payload);
      },
      deleteExpense: (state, action) => {
        const index = state.expenses.findIndex((expense) => expense.id === action.payload);
        if (index !== -1) {
          state.expenses.splice(index, 1);
        }
      },
      setExpenses: (state, action) => {
        state.expenses = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(deleteExpenseAsync.pending, (state, action) => {
      });
      builder.addCase(deleteExpenseAsync.fulfilled, (state, action) => {
        state.expenses = state.expenses.filter(
          (expense) => expense.id !== action.payload
        );
      });
      builder.addCase(deleteExpenseAsync.rejected, (state, action) => {
      });
    },
  });
  