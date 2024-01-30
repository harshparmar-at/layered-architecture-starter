import { IAddUserDto } from "../dtos/addUser";

export interface IAddUserRepo {
  addUser(user: IAddUserDto): Promise<void>;
}
