export interface User {
  id: string;
  email: string;
  password: string;
  isLoggedIn?: boolean;
  expenses: Expense[];
}

export interface Expense {
  id?: string;
  amount: number;
  category: string;
  userId?: number;
  user?: User;
}

export class LoginDto {
  email: string;
  password: string;
}

export type CreateUserDto = Omit<User, 'id'>;