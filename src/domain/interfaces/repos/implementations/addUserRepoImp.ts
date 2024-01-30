import { UserModel } from "../../../../infrastructure/database/sequelize/models/userModel";
import { IAddUserDto } from "../../dtos/addUser";
import { IAddUserRepo } from "../addUserRepo";

export class AddUserRepo implements IAddUserRepo {
  async addUser(user: IAddUserDto): Promise<void> {
    const users = await UserModel.create({ name: user.name });
  }
}
