
export interface User {
  id: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  expenses?: Expense[];
}

export interface Expense {
  id?: number;
  amount: number;
  category: string;
  user?: User[];
}

export class LoginDto {
  email: string;
  password: string;
}

export interface ExpenseCreateInput {
  amount: number;
  category: string;
}

export interface ExpenseUpdateInput {
  amount?: number;
  category?: string;
}


export type CreateUserDto = Omit<User, 'id'>;