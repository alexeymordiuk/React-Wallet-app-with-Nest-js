import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Expense } from '@prisma/client';
import { ExpenseCreateInput, ExpenseUpdateInput } from 'src/interface/interface';
import { ExpenseService } from './expense.service';
import { UserService } from 'src/user/user.service';


@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService, 
    private readonly userService: UserService) {}

    async create(@Body() expense: ExpenseCreateInput, @Req() req): Promise<Expense> {
      const user = await this.userService.findOne(req.user.id);
    
      if (!user) {
        // Handle user not found error
      }
    
      const balance = await this.userService.getAccountBalance(req.user.id);
    
      if (balance < expense.amount) {
        // Handle insufficient balance error
      }
    
      const createdExpense = await this.expenseService.create(expense, req.user.id);
      await this.userService.updateAccountBalance(req.user.id, -createdExpense.amount);
    
      return createdExpense;
    }

  @Get()
  async findAll(): Promise<Expense[]> {
    return this.expenseService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Expense> {
    return this.expenseService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() expense: ExpenseUpdateInput,
  ): Promise<Expense> {
    return this.expenseService.update(+id, expense);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Expense> {
    return this.expenseService.remove(id);
  }
}