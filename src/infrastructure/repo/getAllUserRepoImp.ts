import { UserMapper } from "../database/sequelize/mappers/userMapper";
import { UserModel } from "../database/sequelize/models/userModel";
import { IGetAllUserRepo } from "../../domain/interfaces/repos/getAllUserRepo";

export class GetAllUserRepo implements IGetAllUserRepo {
  async getAllUser(): Promise<{ name: string; id: number }[]> {
    const users = await UserModel.findAll();
    const res = UserMapper.toDomain(users);
    return res;
  }
}
