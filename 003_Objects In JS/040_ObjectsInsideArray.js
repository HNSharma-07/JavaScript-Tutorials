// objects inside array
// very useful in real world applications

const users = [
  { user_id: 1, firstName: "Harsh", gender: "Male" },
  { user_id: 2, firstName: "harsh*t", gender: "Gay" },
  { user_id: 3, firstName: "Ketul", gender: "Female" },
];

for (let user of users) {
  console.log(user); // {user_id: 1, firstName: 'Harsh', gender: 'male'}
  //{user_id: 2, firstName: 'harsh*t', gender: 'Gay'}
  //{user_id: 3, firstName: 'Ketul', gender: 'Female'}

  console.log(user.user_id); // 1 - 2- 3

  console.log(user.firstName); // Harsh - harsh*t - Ketul
}
