/*codewar challenge for the day link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
7 kyu: Is this a triangle?
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

// use conditionals to make sure each 2 sides is greater than the third and all are greater than 0
const isTriangle = (a, b, c) => (a > 0 && b > 0 && c > 0 && (a + b > c && b + c > a && a + c > b))

// application
console.log(isTriangle(1,2,2)) //expected result: true