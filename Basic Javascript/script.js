


//  1. VARIABLES AND DATA TYPES

console.log("Task 1: Variable and Data Types");

let name="AMOL";
const age=20;
var IsStudent=true;
let hobby;
const address=null;
console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(IsStudent));
console.log(typeof(hobby));
console.log(typeof(address));

// 2. HOISTING DEMO

console.log("Task 2: Hoisting Demo");

try{
    console.log(num);
     let num=20;
} catch(error){
    console.log("Error with let hoisting:",error.message);
}
// Error with let hoisting: Cannot access 'b' before initialization
// It happens because of Temporal Dead Zone(TDZ)-a feature of how javascript handles variables declared with let and const keywords.

/*JavaScript Engine thinks like this:
🧠 "Okay, I see a let b, so I’ll reserve space for b in memory during hoisting."
🛑 "BUT I will not assign it any value yet — and nobody is allowed to touch it until that let b = 20; line actually runs."
🤨 "Uh-oh, someone tried to access b before it's initialized."
💥 "Throw ReferenceError: Cannot access 'b' before initialization"*/

// 3. User Greeting (Conditionals)

console.log("Task 3: User Greeting (Conditionals)");

let UserName=prompt("Enter your your name:");
let UserAge=parseInt(prompt("Enter your age:"));

if(UserAge<18){
    alert(`Hey ${UserName}, You're a teen!`);
   
}
else if(UserAge >=18 && UserAge<=60 ){
    alert(` Welcome ${UserName} , You're an adult!`);
  
}
else{
    alert(`Hello ${UserName}, You're a senior citizen!`);
    
}

// 4. Looping Numbers

//for loop to print numbers from 1 to 10
console.log("For loop (1 to 10):");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("While loop (Even numbers 2 to 20):");
let num = 2;
while (num <= 20) {
  console.log(num);
  num += 2;
}
console.log("Do...while loop (10 to 1):");
let countdown = 10;
do {
  console.log(countdown);
  countdown--;
} while (countdown >= 1);


// 5. FUNCTIONS

console.log("Task 1: A function add(a, b) that returns the sum");
let a=2,b=3;
function add(a,b){
    return a+b;
}

console.log("Task 2: A function expression to return the square of a number");
let number=prompt("Enter a number to see its square:");
function ReturnSquare(number){
    return number*number;
}

console.log("Task 3: An arrow function to greet a user with their name");
const greet = (Name) => `Hello, ${Name}! I hope you are doing well`;

console.log("Output of the above functions :");
console.log(`The sum of ${a} and ${b} is:`,add(a,b));
console.log(`The square of ${number} is:`,ReturnSquare(number));
console.log(greet("Arush"));


// 6. CALLBACK PRACTICE

(console.log(" Task 6: Callback Practice"));
function processNumber(num, callback) {
  callback(num);
}

processNumber(5, function(n) {
  console.log(`Double of ${n} :`, n * 2);
});

// 7. 🏁 BONUS: SIMPLE CALCULATOR

console.log("Task 7: Building a Basic Calculator");
console.log(" Please provide two numbers and an operator (+, -, *, /) using the prompt windows.");

let num1=parseFloat(prompt("Enter the first number:"));
let num2=parseFloat(prompt("Enter the second number:"));
let operator= prompt("Enter operator (+, -, *, /):").trim();

let result;
try{
  switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    break;
  default:
    result = "Invalid operator";
}
alert(`Result: ${result}`);
} catch(error){
    alert(error.message);
}

