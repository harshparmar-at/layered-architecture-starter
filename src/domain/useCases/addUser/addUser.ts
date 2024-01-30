import { IAddUserDto } from "../../interfaces/dtos/addUser";
import { ISaveUserRepo } from "../../interfaces/repos/saveUserRepo";

export class AddUser {
  constructor(private addUserRepo: ISaveUserRepo) {}

  public async execute(user: IAddUserDto) {
    return this.addUserRepo.saveUser(user);
  }
}
