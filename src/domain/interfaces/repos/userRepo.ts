import { UserEntity } from "../../entities/userEntity";

export interface IUserRepo {
  save(user: UserEntity): Promise<void>;
  getAll(): Promise<UserEntity[]>;
}
