/*codewar challenge for the day link: https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript
8 Kyu: Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

// solution: use reduce to add all sums of an array
const squareSum = arr => arr.reduce((acc, currentVal) => acc + currentVal*currentVal, 0)

// application
console.log(squareSum([1,3,4])) //expected output: 25