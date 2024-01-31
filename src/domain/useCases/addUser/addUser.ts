import { User } from "../../entities/user";
import { IAddUserDto } from "../../interfaces/dtos/addUser";
import { ISaveUserRepo } from "../../interfaces/repos/addUserRepo";

export class AddUser {
  constructor(private saveUserRepo: ISaveUserRepo) {}

  public async execute(addUserDto: IAddUserDto) {
    const user = new User(addUserDto);
    return this.saveUserRepo.saveUser(user);
  }
}
