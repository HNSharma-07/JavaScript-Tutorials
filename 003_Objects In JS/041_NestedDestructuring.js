// nested destructuring

const users = [
  { user_id: 1, firstName: "Harsh", gender: "male" },
  { user_id: 2, firstName: "harsh*t", gender: "Gay" },
  { user_id: 3, firstName: "Ketul", gender: "Female" },
];

const [{ firstName }, , { gender }] = users;

console.log(firstName); // Harsh
console.log(gender); // Female

//-----------------------
//chainging varaibles

const [{ firstName: var1, user_id }, , { gender: var2 }] = users;

console.log(var1); // Harsh
console.log(user_id); // 1
console.log(var2); // Female
