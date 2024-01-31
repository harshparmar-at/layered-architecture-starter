interface IUser {
  name: string;
  city: string;
  birthDate: Date;
  id?: number;
}

export class User {
  constructor(private user: IUser) {}

  getId() {
    return this.user.id;
  }

  getName() {
    return this.user.name;
  }

  getCity() {
    return this.user.city;
  }

  getBirthDate() {
    return this.user.birthDate;
  }

  getAge() {
    return this.calculateAge();
  }

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
}
