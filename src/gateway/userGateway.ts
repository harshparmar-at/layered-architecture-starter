import { IAddUserDto } from "../domain/interfaces/dtos/addUser";
import { GetAllUserRepo } from "../domain/interfaces/repos/implementations/getAllUserRepoImp";
import { SaveUserRepo } from "../domain/interfaces/repos/implementations/saveUserRepoImp";
import { AddUser } from "../domain/useCases/addUser/addUser";
import { GetAllUsers } from "../domain/useCases/getUser/getAllUsers";

export class UserGateway {
  static async getAllUsers() {
    const iUserRepo = new GetAllUserRepo();
    const i = new GetAllUsers(iUserRepo);
    const res = await i.execute();

    console.log(res);
  }

  static async addUser(user: IAddUserDto) {
    const iUserRepo = new SaveUserRepo();
    const i = new AddUser(iUserRepo);
    const res = await i.execute(user);

    console.log(res);
  }
}

UserGateway.getAllUsers();
