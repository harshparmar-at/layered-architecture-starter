import { User } from "../../entities/user";

export interface IGetAllUserRepo {
  getAllUser(): Promise<User[]>;
}
