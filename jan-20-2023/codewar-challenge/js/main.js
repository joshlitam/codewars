// Codewar Challenges

const documentName = 'Codewar Challenges January 20, 2023'
document.querySelector('h1').innerText += ` This document is for the ${documentName}. Please see the console log for details`

console.log('Hello, World!')

/* Codewar Challenge 1: 8kyu link https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
Conver number to reversed array of digits*/

// solution: convert number to a string, split the string into an array, reverse the array and convert all elements into a number
const digitize = n => n.toString().split('').reverse().map(x => +x)

// sample 
console.log(digitize(3912)) //expected output: 2193