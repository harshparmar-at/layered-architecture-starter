import { UserEntity } from "../../entities/userEntity";
import { IAddUserDto } from "../../interfaces/dtos/addUserDto";
import { IUserRepo } from "../../interfaces/repos/userRepo";

export class AddUser {
  constructor(private repo: IUserRepo) {}

  public async execute(addUserDto: IAddUserDto) {
    const user = new UserEntity(addUserDto.name, addUserDto.city, addUserDto.birthDate);
    return this.repo.save(user);
  }
}
