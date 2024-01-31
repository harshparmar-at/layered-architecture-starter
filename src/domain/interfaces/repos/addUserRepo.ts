import { User } from "../../entities/user";

export interface ISaveUserRepo {
  saveUser(user: User): Promise<void>;
}
