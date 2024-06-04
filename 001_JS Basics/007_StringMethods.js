// some of the imp(widely used) string methods:
// trim() -- remove extra spaces ifthere is not any character
// toUpperCase() -- all capital letters
// toLowerCase() -- all small letters
// slice() -- take some character from string

let a = "     Harsh     "; 
console.log(a); //      Harsh
console.log(a.length); //15

let b = a.trim();
console.log(b); //Harsh
console.log(b.length); //5

//a.slice(starting index , end index - 1 )

let newString = b.slice(0, 2); 
console.log(newString); // Ha
