// 2015 / es6
// class keyword
// class are fake

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called");

    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years old.`;
  }

  is18() {
    return this.age >= 18;
  }

  sing() {
    return "la la la la ";
  }
}

const user1 = new CreateUser(
  "Harsh",
  "Sharma",
  "hn07sharma@gmail.com",
  23,
  "Footpath"
);

console.log(user1);
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));
