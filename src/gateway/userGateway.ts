import { IAddUserDto } from "../domain/interfaces/dtos/addUser";
import { GetAllUserRepo } from "../infrastructure/repo/getAllUserRepoImp";
import { AddUserRepo } from "../infrastructure/repo/addUserRepoImp";
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
    const iUserRepo = new AddUserRepo();
    const i = new AddUser(iUserRepo);
    const res = await i.execute(user);
  }
}

UserGateway.getAllUsers();
// UserGateway.addUser({ name: "dhruvil", city: "nadiad", birthDate: "2001-01-01" });
