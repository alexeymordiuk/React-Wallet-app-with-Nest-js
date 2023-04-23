import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ExpenseController } from './expense.controller';
import { ExpenseService } from './expense.service';
import { UserService } from 'src/user/user.service';

@Module({
    controllers: [ExpenseController],
    providers: [PrismaService, ExpenseService, UserService],
})
export class ExpensesModule {}