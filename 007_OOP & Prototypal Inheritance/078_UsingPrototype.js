//Use prototype
//-----------------------------------

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype); // {} + carry value of Prototype
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "la la la la ";
};

const user1 = createUser(
  "kapil",
  "sharma",
  "kappu@gmail.com",
  35,
  "netflix india"
);

console.log(user1); //createUser {firstName: 'kapil', lastName: 'sharma', email: 'kappu@gmail.com', age: 35, address: 'netflix india'}
//  +  [[Prototype]] Object where -about : ƒ () , is18 : f() , sing : f() existed

console.log(user1.is18()); //true
