//*********************************************************************
//Use this webiste to test run --> https://www.typescriptlang.org/tools
//*********************************************************************

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 1 - For Loop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}

// https://www.w3schools.com/js/js_loop_for.asp

// i = 0 means we are initializing a variable called 'i' and setting its initial value to 0.
// i < 5 means we are defining a condition that checks if the value of 'i' is less than 5.
// This condition will be evaluated repeatedly in a loop.

// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 2 - While Loop
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// https://www.w3schools.com/js/js_loop_while.asp

let count = 0;
while (count < 5) {
  console.log(count); // Output: 0, 1, 2, 3, 4
  count++;
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 3 - If Statement
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const age = 18;
if (age >= 18) {
  console.log("You are an adult"); // Output: You are an adult
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 4 - If-Else Statement
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside"); // Output: It's hot outside
} else {
  console.log("It's not too hot"); // Output: It's not too hot
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 5 - Switch Statement
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the start of the week"); // Output: It's the start of the week
    break;
  case "Friday":
    console.log("It's the end of the week"); // Output: It's the end of the week
    break;
  default:
    console.log("It's a regular day"); // Output: It's a regular day
}
