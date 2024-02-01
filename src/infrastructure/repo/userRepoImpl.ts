import { UserMapper } from "../database/sequelize/mappers/userMapper";
import { UserModel } from "../database/sequelize/models/userModel";
import { IUserRepo } from "../../domain/interfaces/repos/userRepo";
import { UserEntity } from "../../domain/entities/userEntity";

export class UserRepo implements IUserRepo {
  async save(user: UserEntity): Promise<void> {
    const data = UserMapper.toPersistence(user);

    await UserModel.create(data);
  }

  async getAll(): Promise<UserEntity[]> {
    const users = await UserModel.findAll();
    const res = UserMapper.toDomain(users);
    return res;
  }
}
