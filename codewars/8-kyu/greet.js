/*codewar challenge for the day link: https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
8 kyu: Returning strings
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

*/

// use template literals
const greet = name => `Hello, ${name} how are you doing today?`

// application
console.log(greet("Josh")) //expecte result: "Hello, Josh how are you doing today?"