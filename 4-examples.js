// SIMPLE MESSAGE CALLBACK EXAMPLE
// Higher order function
const welcomeUser = (callback, username) => {
  callback(username)
}

// Callbacks declaration
const completeDataMessage = (username) => {
  console.log(`Welcome! Everything is great, ${username}!`);
}

const missingDataMessage = (username) => {
  console.log(`Welcome! You profile is missing some data, ${username}!`);
}

// Invoking
welcomeUser(completeDataMessage, 'Pedro');
welcomeUser(missingDataMessage, 'Pedro');


// MATH RESULT CALLBACK EXAMPLE
// Higher order function
const result = (val1, val2, callback) => {
  callback(val1, val2)
}

// Callbacks declaration
const sum = (num1, num2) => console.log(num1 + num2)
const minus = (num1, num2) => console.log(num1 - num2)
const multiply = (num1, num2) => console.log(num1 * num2)
const divide = (num1, num2) => console.log(num1 / num2)

// Invoking
result(2, 2, sum)
result(2, 2, minus)
result(2, 2, multiply)
result(2, 2, divide)
