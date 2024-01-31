import { User } from "../../../../domain/entities/user";
import { UserModel } from "../models/userModel";

export class UserMapper {
  static toDomain(usersFromDb: UserModel[]): User[] {
    const users: User[] = [];
    usersFromDb.forEach((data) => {
      const user = new User({
        name: data.dataValues.name,
        id: data.dataValues.id,
        city: data.dataValues.city,
        birthDate: data.dataValues.birthDate,
      });

      users.push(user);
    });

    return users;
  }

  static toPersistence(user: User) {
    const name = user.getName();
    const birthDate = user.getBirthDate();
    const city = user.getCity();

    return {
      name: name,
      birthDate: birthDate,
      city: city,
    };
  }
}
