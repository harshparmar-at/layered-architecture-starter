export class UserEntity {
  constructor(private name: string, private city: string, private birthDate: Date, private id?: number) {}

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getCity() {
    return this.city;
  }

  getBirthDate() {
    return this.birthDate;
  }

  getAge() {
    return this.calculateAge();
  }

  calculateAge() {
    const currentDate = new Date();
    const dob = new Date(this.birthDate);
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
