import { UserMapper } from "../../../../infrastructure/database/sequelize/mappers/userMapper";
import { UserModel } from "../../../../infrastructure/database/sequelize/models/userModel";
import { IAddUserDto } from "../../dtos/addUser";
import { IAddUserRepo, IAddUserRepoDto } from "../addUserRepo";

export class AddUserRepo implements IAddUserRepo {
  async addUser(user: IAddUserRepoDto): Promise<void> {
    const data = UserMapper.toPersistence(user);

    await UserModel.create({
      name: data.name,
      birthDate: data.birthDate,
      city: data.city,
      age: data.age,
    });
  }
}
