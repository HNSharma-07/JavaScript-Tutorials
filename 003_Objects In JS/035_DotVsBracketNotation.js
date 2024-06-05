// difference between dot and bracket notaion

const person = {
  name: "parth",
  age: 22,
  "person hobbies": ["driving", "playing", "sing"],
};

// console.log(person.person hobbies); -->we cannot write like this bcz it will throw ERROR

//so use BRACKET NOTATION
console.log(person["person hobbies"]); // ['driving', 'playing', 'sing']

const key = "Master";

person[key] = "Champ In Flirting"; //  {Master: "Champ In Flirting"}

console.log(person);
