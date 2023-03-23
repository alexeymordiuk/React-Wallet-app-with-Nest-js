import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';

@Module({
    controllers: [ExpenseController],
    providers: [PrismaService, ExpenseService],
})
export class ExpensesModule {}