/*codewar challenge for the day link: https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
7 kyu: Largest pair sum in array
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

function largestPairSum (numbers) {
    let num1 = Math.max(...numbers)
    let num2 = numbers.indexOf(num1) == numbers.lastIndexOf(num1) ? Math.max(...numbers.filter(x => x !== num1)) : num1
    return num1 + num2
  }