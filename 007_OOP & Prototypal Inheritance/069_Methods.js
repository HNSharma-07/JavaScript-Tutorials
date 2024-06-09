// methods --- function inside the Object is known as METHOD
// function inside object

const person = {
  name: "Harsh",
  age: 23,
  about: function aboutUS() {
    console.log(`person name is ${this.name}`, `person age is ${this.age}`);
  },
  //here this = person(object name)
};

console.log(person.about); // ƒ aboutUS(){console.log(`person name is ${person.name}`,`person age is ${this.age}`)}

person.about(); //person name is Harsh person age is 23

//---------------------------------------------------
function Info() {
  console.log(`person name is ${this.name}`, `person age is ${this.age}`);
}

const person1 = {
  name: "dhruv",
  age: 22,
  about: Info, //we are not calling the function - we are just giving the values
};

const person2 = {
  name: "neel",
  age: 29,
  about: Info,
};

//here in the object PERSON1 we are calling the function under about
person1.about(); //person name is dhruv person age is 22
person2.about(); //person name is neel person age is 29
