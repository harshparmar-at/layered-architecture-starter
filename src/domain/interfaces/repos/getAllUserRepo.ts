export interface IGetAllUserRepo {
  getAllUser(): Promise<
    {
      name: string;
      id: number;
    }[]
  >;
}
