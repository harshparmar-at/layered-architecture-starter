import { UserModel } from "../../../../infrastructure/database/sequelize/models/userModel";
import { IAddUserDto } from "../../dtos/addUser";
import { ISaveUserRepo } from "../saveUserRepo";

export class SaveUserRepo implements ISaveUserRepo {
  async saveUser(user: IAddUserDto): Promise<void> {
    const users = await UserModel.create({ name: user.name });
  }
}
