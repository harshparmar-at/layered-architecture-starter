import { UserModel } from "../models/userModel";

export class UserMapper {
  static toDomain(usersFromDb: UserModel[]) {
    const users: any[] = [];
    usersFromDb.forEach((data) => {
      const user = {
        name: data.dataValues.name,
        id: data.dataValues.id,
      };
      users.push(user);
    });

    return users;
  }
}
