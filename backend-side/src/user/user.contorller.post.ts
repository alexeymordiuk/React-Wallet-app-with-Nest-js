import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto, LoginDto } from 'src/interface/interface';
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

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }
}