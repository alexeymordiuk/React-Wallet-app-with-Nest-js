import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { Expense, LoginDto, User } from 'src/interface/interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  userRepository: any;
  constructor(private prisma: PrismaService) {}

  async create(user: Omit<User, 'id'>) {
    const expenses: Expense[] = [{ amount: 0, category: '' }];
    const hashedPassword = await bcrypt.hash(user.password, 10);
    return this.prisma.user.create({
      data: {
        ...user,
        id: uuidv4(),
        password: hashedPassword,
        expenses: {
          create: expenses,
        },
      },
    });
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });
    if (!user) {
      return null; // or throw an error with a custom message if you prefer
    }
    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      return null; // or throw an error with a custom message if you prefer
    }
    // Set the isLoggedIn field of the user to true
    await this.prisma.user.update({
      where: { id: user.id },
      data: { isLoggedIn: true },
    });
    return user;
  }

  async isLoggedIn(userId: string) {
    console.log("Received user ID:", userId);
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    console.log("User found:", user);
    return Boolean(user);
  }

  async logout(userId: string): Promise<void> {
    if (!userId) {
      throw new Error('Invalid user ID');
    }
      await this.prisma.user.update({
      where: { id: userId },
      data: { isLoggedIn: false },
    });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { expenses: true },
    });
  }
}