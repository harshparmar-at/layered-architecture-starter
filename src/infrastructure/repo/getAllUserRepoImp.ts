import { UserMapper } from "../database/sequelize/mappers/userMapper";
import { UserModel } from "../database/sequelize/models/userModel";
import { IGetAllUserRepo } from "../../domain/interfaces/repos/getAllUserRepo";
import { User } from "../../domain/entities/user";

export class GetAllUserRepo implements IGetAllUserRepo {
  async getAllUser(): Promise<User[]> {
    const users = await UserModel.findAll();
    const res = UserMapper.toDomain(users);
    return res;
  }
}
