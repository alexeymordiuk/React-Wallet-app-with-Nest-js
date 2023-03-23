import { Module } from '@nestjs/common';
import { ExpensesModule } from './expense/expense.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, ExpensesModule],
  controllers: [],
})
export class AppModule {}
