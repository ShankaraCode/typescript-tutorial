//*********************************************************************
//Use this webiste to test run --> https://www.typescriptlang.org/tools
//*********************************************************************

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 2a - Assigning Variables Using let
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let age = 25;
console.log(age); // Output: 25​

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 2b -  Assigning Variables Using const
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const name = "John";
console.log(name); // Output: John

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 2c -  Variable Types (specifying the type)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let isStudent: boolean = true;
let score: number = 90;
let greeting: string = "Hello";

console.log(isStudent); // Output: true
console.log(score); // Output: 90
console.log(greeting); // Output: Hello

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 2d -  Variable Type Inference (without specifying the type)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let x = 10; // x is inferred as number
let y = "Hello"; // y is inferred as string

console.log(x); // Output: 10
console.log(y); // Output: Hello

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 2e -  Variable Scope
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function printNumber() {
    let number = 42; // number is scoped to the function
    console.log(number); // Output: 42
}

printNumber(); // calling the method printNumber()

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Ex 2f -  Variable Shadowing
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
let count = 10;

function printCount() {
    let count = 20; // shadowing the outer count variable
    console.log(count); // Output: 20
}

printCount();
console.log(count); // Output: 10