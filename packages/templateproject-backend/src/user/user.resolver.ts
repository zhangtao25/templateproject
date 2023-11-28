import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.model';

import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], {
    description: 'list all user',
  })
  getUsers() {
    return this.userService.getUsers();
  }
}
