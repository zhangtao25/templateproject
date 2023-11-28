import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './user.model';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({});
  }
}
