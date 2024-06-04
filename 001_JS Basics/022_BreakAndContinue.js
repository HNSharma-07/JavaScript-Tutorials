//Break and continue keyword

let i;

for (i = 0; i < 10; i++) {
  if (i == 8) {
    break; // break the FOR loop totally and go to the END semiconol
  } else if (i == 5) {
    continue; // it will not go further only in for loop and it go directly to the starting of for loop
  }

  console.log(i);
} // <<--when BREAKED then come here

//output - 0 1 2 3 4 6 7
