import { IGetAllUserRepo } from "../../interfaces/repos/getAllUserRepo";

export class GetAllUsers {
  constructor(private userRepo: IGetAllUserRepo) {}

  public async execute() {
    return this.userRepo.getAllUser();
  }
}
