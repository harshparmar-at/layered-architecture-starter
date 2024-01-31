import { IAddUserDto } from "../domain/interfaces/dtos/addUser";
import { UserRepo } from "../infrastructure/repo/userRepoImp";
import { AddUser } from "../domain/useCases/addUser/addUser";
import { GetAllUsers } from "../domain/useCases/getUser/getAllUsers";

export class UserGateway {
  static async getAllUsers() {
    const iUserRepo = new UserRepo();
    const i = new GetAllUsers(iUserRepo);
    const res = await i.execute();

    console.log(res);
  }

  static async addUser(user: IAddUserDto) {
    const iUserRepo = new UserRepo();
    const i = new AddUser(iUserRepo);
    const res = await i.execute(user);
  }
}

UserGateway.getAllUsers();
// UserGateway.addUser({ name: "harsh", city: "Ahmadabad", birthDate: "2001-06-25" });
