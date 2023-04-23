import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { Expense, ExpenseCreateInput, LoginDto, User, UserUpdateInput } from 'src/interface/interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  userRepository: any;
  constructor(private prisma: PrismaService) {}

  async create(user: Omit<User, 'id'>) {
    const expenses: Expense[] = [{ amount: 0, category: '' }];
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return this.prisma.user.create({
      data: {
        ...user,
        id: uuidv4(),
        password: hashedPassword,
        expenses: {
          create: expenses,
        },
      },
    });
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });
    if (!user) {
      return null; 
    }
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      return null;
    }
    await this.prisma.user.update({
      where: { id: user.id },
      data: { isLoggedIn: true },
    });
    return user;
  }

  async isLoggedIn(userId: string) {
    console.log("Received user ID:", userId);
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    console.log("User found:", user);
    return Boolean(user);
  }

  async logout(userId: string): Promise<void> {
    if (!userId) {
      throw new Error('Invalid user ID');
    }
      await this.prisma.user.update({
      where: { id: userId },
      data: { isLoggedIn: false },
    });
  }

  async addExpense(userId: string, expense: ExpenseCreateInput) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { expenses: true },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    const newExpense = await this.prisma.expense.create({
      data: {
        ...expense,
        userId: user.id,
      },
    });
    return this.prisma.user.update({
      where: { id: userId },
      data: { expenses: { connect: { id: newExpense.id } } },
      include: { expenses: true },
    });
  }

  async getUserExpenses(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { expenses: true },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return user.expenses;
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { expenses: true },
    });
  }

  async findOne(id: string | number): Promise<User> {
    return this.prisma.user.findUnique({
      where: { id: typeof id === 'string' ? id : id.toString() },
    });
  }

  async updateAccountBalance(id: string, amount: number): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        balance: {
          increment: amount,
        },
      },
    });
  }

  async getAccountBalance(id: string): Promise<number> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    const expenses = await this.prisma.expense.findMany({
      where: {
        userId: id,
      },
    });
    const totalExpenses = expenses.reduce(
      (total, expense) => total + expense.amount,
      0,
    );
    return user.balance - totalExpenses;
  }
}