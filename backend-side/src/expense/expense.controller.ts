import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Expense } from '@prisma/client';
import { ExpenseCreateInput, ExpenseUpdateInput } from 'src/interface/interface';
import { ExpenseService } from './expense.service';


@Controller('expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  async create(@Body() expense: ExpenseCreateInput, @Req() req): Promise<Expense> {
  return this.expenseService.create(expense, req.user.id);
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