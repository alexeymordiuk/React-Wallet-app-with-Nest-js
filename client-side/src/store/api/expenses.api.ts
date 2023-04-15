import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteExpense } from "../../api/expense.api";
import { addExpense } from "../../api/user.api";
import { Expense } from "../../interface/user.interface";

export const addExpenseAsync = createAsyncThunk(
  'expenses/addExpenseAsync',
  async ({ userId, expenseData }: { userId: string, expenseData: Expense }) => {
    const response = await addExpense(userId, expenseData);
    return response.data;
  }
);
  
export const deleteExpenseAsync = createAsyncThunk(
  'expenses/deleteExpense',
  async (id: number) => {
    await deleteExpense(id);
    return id;
  }
);