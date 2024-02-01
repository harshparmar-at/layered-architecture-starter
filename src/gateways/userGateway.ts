import { IAddUserDto } from "../domain/interfaces/dtos/addUserDto";
import { UserRepo } from "../infrastructure/repo/userRepoImpl";
import { AddUser } from "../domain/useCases/addUser/addUser";
import { GetAllUsers } from "../domain/useCases/getUser/getAllUsers";

export class UserGateway {
  static async getAllUsers() {
    const repo = new UserRepo();
    const useCase = new GetAllUsers(repo);
    const res = await useCase.execute();

    console.log(res);
  }

  static async addUser(dto: IAddUserDto) {
    const repo = new UserRepo();
    const useCase = new AddUser(repo);
    const res = await useCase.execute(dto);
  }
}

UserGateway.getAllUsers();
// UserGateway.addUser({ name: "harsh", city: "Ahmadabad", birthDate: "2001-06-25" });
