import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('get/users')
export class UserControllerGet {
  constructor(private readonly userService: UserService) {}

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.findOneByEmail(email);
  }
}