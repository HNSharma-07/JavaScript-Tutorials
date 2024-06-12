// Closure Example 3
// application of closure in real world project

function func() {
  let counter = 0;

  return function () {
    if (counter < 1) {
      console.log("Hii");
      counter++;
    } else {
      console.log(`you have called me ${counter} time try after some hours`);
      counter++;
    }
  };
}

let x = func(); // whole anonymous func

x(); // Hii from x
x(); // you have already called me 1 time try after some hours
x(); // you have already called me 2 time try after some hours

let y = func(); // whole anonymous func
y(); // Hii from y
y(); // you have already called me 1 time try after some hours

x(); // you have already called me 3 time try after some hours
