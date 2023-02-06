/*codewar challenge for the day link: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
8 Kyu: Century From Year
Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

// solution: divide year by 100 and use math.ceil to check which century
const century = year => Math.ceil(year/100)

// application
console.log(century(1704)) //expected output: 18