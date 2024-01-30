import { UserMapper } from "../../../../infrastructure/database/sequelize/mappers/userMapper";
import { UserModel } from "../../../../infrastructure/database/sequelize/models/userModel";
import { IGetAllUserRepo } from "../getAllUserRepo";

export class GetAllUserRepo implements IGetAllUserRepo {
  async getAllUser(): Promise<{ name: string; id: number }[]> {
    const users = await UserModel.findAll();
    const res = UserMapper.toDomain(users);
    return res;
  }
}
