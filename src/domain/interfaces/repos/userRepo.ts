import { User } from "../../entities/user";

export interface IUserRepo {
  save(user: User): Promise<void>;
  getAll(): Promise<User[]>;
}
