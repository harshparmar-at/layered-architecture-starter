import { GetAllUser } from "../../entities/getAllUser";

export interface IGetAllUserRepo {
  getAllUser(): Promise<GetAllUser[]>;
}
