import { Injectable } from "@nestjs/common";
import { Expense } from "@prisma/client";
import { ExpenseCreateInput, ExpenseUpdateInput } from "src/interface/interface";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class ExpenseService {
  constructor(private prisma: PrismaService) {}

  async create(expense: ExpenseCreateInput, userId?: string): Promise<Expense> {
    const data = userId
      ? {
          ...expense,
          user: {
            connect: {
              id: userId
            }
          }
        }
      : {
          ...expense,
          user: undefined
        };
  
    return this.prisma.expense.create({ data });
  }

  async findAll(): Promise<Expense[]> {
    return this.prisma.expense.findMany();
  }

  async findOne(id: number): Promise<Expense> {
    return this.prisma.expense.findUnique({ where: { id } });
  }

  async update(id: number, expense: ExpenseUpdateInput): Promise<Expense> {
    return this.prisma.expense.update({ where: { id }, data: expense });
  }

  async remove(id: number): Promise<Expense> {
    return this.prisma.expense.delete({ where: { id } });
  }
}