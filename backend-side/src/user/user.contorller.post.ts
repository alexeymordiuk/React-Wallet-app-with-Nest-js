import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, Expense, ExpenseCreateInput, LoginDto } from 'src/interface/interface';
import { UserService } from './user.service';

@Controller('users')
export class UserControllerPost {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto);
  }

  @Get(':userId/isLoggedIn')
  async isLoggedIn(@Param('userId') userId: string) {
  if (!userId) {
    throw new BadRequestException('Invalid user ID');
  }
  return this.userService.isLoggedIn(userId);
  } 

  @Post(':userId/logout')
  async logout(@Param('userId') userId: string) {
  if (!userId) {
    throw new BadRequestException('Invalid user ID');
  }
  await this.userService.logout(userId);
  return { message: 'Logout successful' };
}

@Post(':userId/expenses')
async addExpense(@Param('userId') userId: string, @Body() expense: ExpenseCreateInput) {
  if (!userId) {
    throw new BadRequestException('Invalid user ID');
  }
  const user = await this.userService.addExpense(userId, expense);
  return user.expenses;
}

 @Get(':userId/expenses')
  async getUserExpenses(@Param('userId') userId: string) {
    if (!userId) {
      throw new BadRequestException('Invalid user ID');
    }
    return this.userService.getUserExpenses(userId);
  }

  @Get(':userId/balance')
  async getAccountBalance(@Param('userId') userId: string) {
    return this.userService.getAccountBalance(userId);
  }

  @Post(':userId/balance')
  async updateAccountBalance(
    @Param('userId') userId: string,
    @Body('amount') amount: number,
  ) {
    return this.userService.updateAccountBalance(userId, amount);
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }

}