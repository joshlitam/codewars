/*codewar challenge for the day link: https://www.codewars.com/kata/59b2963132779166d2001018/train/javascript
7 Kyu: Multiply the strings in the array
You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
*/

/* solution: use reduce function to multiply both numbers and convert it to string */
const arrMultiply = arr => arr.reduce((acc, int) => +acc * +int, 1).toString()

// application
console.log(arrMultiply('2', '5')) //expected output: '10'