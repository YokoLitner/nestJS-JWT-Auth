import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      name: 'Yoko',
      password: 'qwerty123',
    },
    {
      userId: 2,
      name: 'NoName',
      password: 'test123',
    }
  ]

  async findOne(userName: string): Promise<User | undefined> {
    return this.users.find(user => user.name === userName);
  }

}
