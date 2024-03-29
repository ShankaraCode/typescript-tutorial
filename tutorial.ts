//*********************************************************************
//Use this webiste to test run --> https://www.typescriptlang.org/tools
//*********************************************************************

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Ex 1a - checking exercise
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let a = 1 + 2  
let b = a + 3
let c = {
apple: a,
banana: b
}

console.log(a); //print a
console.log(b); //print b
console.log(c); //print c


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Ex 1b - checking exercise
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

//add the line below. 

let d = c.apple * 4 // c.apple here means we are accesing the objects
console.log(d); //print d

//Before proceeding to next exercise, try to add "2" to number 2 and see what happens. Notice the error.

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Ex 2 - more checking exercise
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function squareOf(n) {
return n * n
}
squareOf(2) // evaluates to 4
squareOf('z') // evaluates to NaN

console.log(squareOf(2)); //should show a number
console.log(squareOf('z')); //should show a Nan

//Question : Why is there a read squiggly line under n in squareOf (n)


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Ex 3 - string exercise
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// Save the file as index.ts
var greet: string = "Greetings ";
var icp: string = "to all ICP Blockchainers";
console.log(greet  + icp);


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Ex 4 - more string exercise
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let variable1: "a" | "b" | "c";
 
variable1 = "a";
console.log(variable1); // No error
 
// variable1 = "d";
// console.log(variable1); // Why is this an error? How to fix it?
