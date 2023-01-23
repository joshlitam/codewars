/*codewar challenge for the day link: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
8 Kyu: Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/

// solution: convert number to a string, split the string into an array, reverse the array and convert all elements into a number
const digitize = n => n.toString().split('').reverse().map(x => +x)

// application
console.log(digitize(3912)) //expected output: 2193