import { GetAllUser } from "../../entities/getAllUser";
import { IGetAllUserRepo } from "../../interfaces/repos/getAllUserRepo";

export class GetAllUsers {
  constructor(private userRepo: IGetAllUserRepo) {}

  public async execute(): Promise<GetAllUser[]> {
    return this.userRepo.getAllUser();
  }
}
