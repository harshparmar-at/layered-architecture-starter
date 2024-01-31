import { User } from "../../entities/user";
import { IUserRepo } from "../../interfaces/repos/userRepo";

export class GetAllUsers {
  constructor(private userRepo: IUserRepo) {}

  public async execute(): Promise<User[]> {
    return this.userRepo.getAll();
  }
}
