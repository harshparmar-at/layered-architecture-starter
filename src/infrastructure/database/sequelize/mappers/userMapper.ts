import { UserEntity } from "../../../../domain/entities/userEntity";
import { UserModel } from "../models/userModel";

export class UserMapper {
  static toDomain(usersFromDb: UserModel[]): UserEntity[] {
    const users: UserEntity[] = [];
    usersFromDb.forEach((data) => {
      const user = new UserEntity(
        data.dataValues.name,
        data.dataValues.city,
        data.dataValues.birthDate,
        data.dataValues.id
      );

      users.push(user);
    });

    return users;
  }

  static toPersistence(user: UserEntity) {
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
