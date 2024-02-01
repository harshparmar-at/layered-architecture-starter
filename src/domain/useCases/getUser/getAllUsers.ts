import { UserEntity } from "../../entities/userEntity";
import { IUserRepo } from "../../interfaces/repos/userRepo";

export class GetAllUsers {
  constructor(private userRepo: IUserRepo) {}

  public async execute(): Promise<UserEntity[]> {
    return this.userRepo.getAll();
  }
}
