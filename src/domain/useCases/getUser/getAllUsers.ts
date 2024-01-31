import { User } from "../../entities/user";
import { IGetAllUserRepo } from "../../interfaces/repos/getAllUserRepo";

export class GetAllUsers {
  constructor(private userRepo: IGetAllUserRepo) {}

  public async execute(): Promise<User[]> {
    return this.userRepo.getAllUser();
  }
}
