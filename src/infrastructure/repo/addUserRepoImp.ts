import { UserMapper } from "../database/sequelize/mappers/userMapper";
import { UserModel } from "../database/sequelize/models/userModel";
import { IAddUserRepo, IAddUserRepoDto } from "../../domain/interfaces/repos/addUserRepo";

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
