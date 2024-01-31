import { User } from "../../entities/user";
import { IAddUserDto } from "../../interfaces/dtos/addUser";
import { IUserRepo } from "../../interfaces/repos/userRepo";

export class AddUser {
  constructor(private saveUserRepo: IUserRepo) {}

  public async execute(addUserDto: IAddUserDto) {
    const user = new User(addUserDto);
    return this.saveUserRepo.save(user);
  }
}
