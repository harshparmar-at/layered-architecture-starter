import { IAddUserDto } from "../../interfaces/dtos/addUser";
import { IAddUserRepo } from "../../interfaces/repos/addUserRepo";

export class AddUser {
  constructor(private addUserRepo: IAddUserRepo) {}

  public async execute(user: IAddUserDto) {
    return this.addUserRepo.addUser(user);
  }
}
