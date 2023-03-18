import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserControllerPost } from './user.contorller.post';
import { UserControllerGet } from './user.controller.get';
import { UserService } from './user.service';

@Module({
    controllers: [UserControllerGet, UserControllerPost],
    providers: [PrismaService, UserService],
})
export class UserModule {}