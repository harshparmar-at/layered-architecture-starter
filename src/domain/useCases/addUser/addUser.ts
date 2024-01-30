import { User } from "../../entities/user";
import { IAddUserDto } from "../../interfaces/dtos/addUser";
import { IAddUserRepo } from "../../interfaces/repos/addUserRepo";

export class AddUser {
  constructor(private addUserRepo: IAddUserRepo) {}

  public async execute(user: IAddUserDto) {
    const iUser = new User(user);
    return this.addUserRepo.addUser(iUser.getUserInfo());
  }
}
