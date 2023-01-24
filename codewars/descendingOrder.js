/*codewar challenge for the day link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
7 Kyu: Descending Order
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/

/* solution: convert number to a string, split the string into an array, sort array into descending order, 
join array, and convert to number */
const descendingOrder = n => Number(n.toString().split("").sort((a, b) => b-a).join(""))

// application
console.log(descendingOrder(3214)) //expected output: 4321