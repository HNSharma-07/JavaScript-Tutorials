//First solution to that problem
//----------------------------------------------

const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = createUser("Parth", "Mistry", "parth@gmail.com", 27, "Dharavi");
const user2 = createUser(
  "harshit",
  "vashist",
  "harshit@gmail.com",
  19,
  "my address"
);
const user3 = createUser(
  "Aditya",
  "Machhi",
  "Aadi@gmail.com",
  22,
  "mara L par"
);

console.log(user1.about()); //Parth is 27 years old.
console.log(user3.about()); //Aditya is 22 years old.

//PROBLEM
// previous problem is solved
// but what if there is not any object is User1 and we want to acces it from another object
// to give the introduction of  __proto__ , [[prototype]] move to file of that topics
