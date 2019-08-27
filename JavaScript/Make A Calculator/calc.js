
// Make a Calculator! using prompt(), and variables, make a program that does the following:
// 1. Prompts the user for first number.
// 2. Stores that first number
// 3. Prompts the user for the second number.
// 4. stores that number and responds with the SUM by using an alert.


// BONUS: Make a program that can subtract, multiply, and also divide!

var firstNumber, secondNumber, answer, choice;

firstNumber = Number(prompt("Enter your first number: "));
secondNumber = Number(prompt("Enter your second number: "));
choice = prompt("Would you like to add, subtract, multiply, or divide? ");
choice = choice.toLowerCase();

if (choice === "add") {
  answer = firstNumber + secondNumber;
} else if (choice == "subtract") {
  answer = firstNumber - secondNumber;
} else if (choice == "multiply") {
  answer = firstNumber * secondNumber;
} else if (choice == "divide"){
  answer = firstNumber / secondNumber;
} else {
  alert("Invalid choice!");
}

alert("The answer is " + answer);
