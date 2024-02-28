/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    //code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers = (a, b) => a + b;

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Well, hello');

const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines
const returnMulitpleLines = () => (
    `<p>
    This is a multi line return
    </p>`
)
console.log(returnMulitpleLines());