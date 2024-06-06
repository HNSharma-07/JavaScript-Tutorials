// Lexical Scope
// like LOCAL VARIABLE and GLOBAL VARIABLE

function myApp() {
  //main function

  const myVar = "value69"; //--global variable

  function myFunc1() {
    // sub function 1
    const myVar = "value69func1";
    console.log("inside myFunc1", myVar);
  }

  const myFunc2 = function () {
    //sub function 2
    // const myVar = "value69func2";
    console.log("inside myFunc2", myVar);
  };

  const myFunc3 = () => {}; //sub function 3

  console.log(myVar);

  myFunc1(); // myVar = value69func1 -- local variable

  myFunc2(); // myVar =  value1  -- global variable

  myFunc3(); // myVar =  undefined -- global variable
}

myApp();

//OUTPUT -
//           value69
//           inside myFunc1 value69func1
//           inside myFunc2 value69
