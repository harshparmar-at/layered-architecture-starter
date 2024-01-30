import { IAddUserDto } from "../dtos/addUser";

export interface ISaveUserRepo {
  saveUser(user: IAddUserDto): Promise<void>;
}
