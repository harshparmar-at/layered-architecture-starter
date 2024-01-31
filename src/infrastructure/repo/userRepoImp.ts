import { UserMapper } from "../database/sequelize/mappers/userMapper";
import { UserModel } from "../database/sequelize/models/userModel";
import { IUserRepo } from "../../domain/interfaces/repos/userRepo";
import { User } from "../../domain/entities/user";

export class UserRepo implements IUserRepo {
  async save(user: User): Promise<void> {
    const data = UserMapper.toPersistence(user);

    await UserModel.create(data);
  }

  async getAll(): Promise<User[]> {
    const users = await UserModel.findAll();
    const res = UserMapper.toDomain(users);
    return res;
  }
}
