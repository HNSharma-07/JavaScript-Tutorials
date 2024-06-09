//New keyword
//-----------
// 3 works done by New key word
// 1)) create empty object  --- this = {}
// 2)) return this means emptyobject{}
// 3)) automatic joints reference of prototype ---- no need to type const user = Object.create(createUser.prototype);

// constructor function
function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "la la la la ";
};

const user1 = new CreateUser(
  "Kapil",
  "Sharma",
  "kappu@gmail.com",
  35,
  "Netflix india"
);

console.log(user1); // {firstName: 'Kapil', lastName: 'Sharma', email: 'kappu@gmail.com', age: 35, address: 'Netflix india'} + [[prototype]]

console.log(user1.is18()); //true

//--------------------

for (let key in user1) {
  console.log(key);
} // firstName -lastName-email-age-address- about - is18 - sing

for (let key in user1) {
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
} // firstName -lastName-email-age-address

//------------------------
// new XXXXXX

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("John", 30);
const person2 = new Person("Alice", 25);

// When you use new, a new object is created, and this inside the constructor function refers to the new object.

console.log(person1); // {name: 'John', age: 30}
