import { IAddUserDto } from "../interfaces/dtos/addUser";

export class User {
  constructor(private user: IAddUserDto) {}
  calculateAge() {
    const currentDate = new Date();
    const dob = new Date(this.user.birthDate);
    const birthYear = dob.getFullYear();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;

    const birthMonth = dob.getMonth();
    const currentMonth = currentDate.getMonth();
    const birthDay = dob.getDate();
    const currentDay = currentDate.getDate();

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
      age--;
    }

    return age;
  }

  getUserInfo() {
    return {
      ...this.user,
      age: this.calculateAge(),
    };
  }
}
