import { IAddUserRepoDto } from "../../../../domain/interfaces/repos/addUserRepo";
import { UserModel } from "../models/userModel";

export class UserMapper {
  static toDomain(usersFromDb: UserModel[]) {
    const users: any[] = [];
    usersFromDb.forEach((data) => {
      const user = {
        name: data.dataValues.name,
        id: data.dataValues.id,
        city: data.dataValues.city,
        birthDate: data.dataValues.birthDate,
        age: data.dataValues.age,
      };
      users.push(user);
    });

    return users;
  }

  static toPersistence(user: IAddUserRepoDto) {
    return {
      name: user.name,
      birthDate: user.birthDate,
      city: user.city,
      age: user.age,
    };
  }
}
