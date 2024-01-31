interface IGetAllUser {
  id: number;
  name: string;
  city: string;
  birthDate: Date;
  age: number;
}

export class GetAllUser {
  constructor(private user: IGetAllUser) {}

  getId() {
    return this.user.id;
  }

  getName() {
    return this.user.name;
  }
}
