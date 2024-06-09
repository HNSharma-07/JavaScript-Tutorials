//What is prototype
//simply object that provided by the function
//-----------------------------------

function hello() {
  console.log("hello world");
}

// javascript function ===> function  + object

// name property ---> tells function name
console.log(hello.name); //hello

// you can add your own properties
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty); //very unique value

// function provides more usefull properties.

//--------------------------------------
//functions provide some free space where we can add KEY-VALUE-PAIR which known as prototype
// **ONLY function provides prototype

console.log(hello.prototype); // {}    //op- {constructor: ƒ}

hello.prototype.abc = "ABC";
hello.prototype.xyz = "XYZ";
console.log(hello.prototype); //{abc: 'ABC', xyz: 'XYZ', constructor: ƒ}

console.log(hello.prototype.abc); // ABC

hello.prototype.sing = function () {
  return "Lonely";
};
console.log(hello.prototype.sing()); // Lonely
