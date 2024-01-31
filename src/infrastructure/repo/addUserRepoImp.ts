import { UserMapper } from "../database/sequelize/mappers/userMapper";
import { UserModel } from "../database/sequelize/models/userModel";
import { ISaveUserRepo } from "../../domain/interfaces/repos/addUserRepo";
import { User } from "../../domain/entities/user";

export class saveUserRepo implements ISaveUserRepo {
  async saveUser(user: User): Promise<void> {
    const data = UserMapper.toPersistence(user);

    await UserModel.create(data);
  }
}
