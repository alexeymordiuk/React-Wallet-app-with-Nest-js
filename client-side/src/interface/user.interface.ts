export interface User {
    id: string;
    email: string;
    password: string;
    expenses: Expense[];
    userId: string;
  }
  
  export interface Expense {
    id?: number;
    amount: number;
    category: string;
    userId?: number;
    user?: User;
    createdAt?: string;
  }
  
  export type CreateUserDto = Omit<User, 'id'>;