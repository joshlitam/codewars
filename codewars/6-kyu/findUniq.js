/*codewar challenge for the day link: https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
6 kyu: Find the Unique Number
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

// Solution: Use filter with indexOf and lastIndexOf to find the unique number
const findUniq = arr => arr.filter(num => arr.indexOf(num) == arr.lastIndexOf(num))[0]

// application
console.log(findUniq([0, 1, 0 ,0 ,0])) //expected result: 1