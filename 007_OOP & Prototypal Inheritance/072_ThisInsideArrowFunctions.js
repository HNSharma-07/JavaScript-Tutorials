// This inside arrow functions

// arrow functions

const user = {
  firstName: "harshit",
  age: 8,
  about: () => {
    console.log(this.firstName, this.age);
  },
};

user.about(); //undefined undefined

//arrow fucntion do not have Own this.x
//matlab arrow function ka this uske surrounding ka ek level upper hoga matlab abhi WINDOW object hoga
//levels like USER1 se ek lvl upper mean WINDOW object

user.about(user); //undefined undefined

user.about.call(user); //undefined undefined

//======================================
//short syntax for methods
const user1 = {
  firstName: "harshit",
  age: 8,
  about: function () {
    console.log(this.firstName, this.age);
  },
};

//short method
const user2 = {
  firstName: "harshit",
  age: 8,
  about() {
    console.log(this.firstName, this.age);
  },
};

//both are same

user1.about(); //harshit 8
user2.about(); //harshit 8
