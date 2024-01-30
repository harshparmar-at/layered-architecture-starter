import { IAddUserDto } from "../dtos/addUser";

export interface IAddUserRepoDto {
  name: string;
  birthDate: string;
  city: string;
  age: number;
}

export interface IAddUserRepo {
  addUser(user: IAddUserRepoDto): Promise<void>;
}
