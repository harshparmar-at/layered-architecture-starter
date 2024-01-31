import { IAddUserDto } from "../domain/interfaces/dtos/addUser";
import { UserRepo } from "../infrastructure/repo/userRepoImp";
import { AddUser } from "../domain/useCases/addUser/addUser";
import { GetAllUsers } from "../domain/useCases/getUser/getAllUsers";

export class UserGateway {
  static async getAllUsers() {
    const userRepo = new UserRepo();
    const users = new GetAllUsers(userRepo);
    const res = await users.execute();

    console.log(res);
  }

  static async addUser(user: IAddUserDto) {
    const userRepo = new UserRepo();
    const addUser = new AddUser(userRepo);
    const res = await addUser.execute(user);
  }
}

UserGateway.getAllUsers();
// UserGateway.addUser({ name: "harsh", city: "Ahmadabad", birthDate: "2001-06-25" });
