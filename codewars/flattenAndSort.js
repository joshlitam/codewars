/*codewar challenge for the day link: https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
7 kyu: Flatten and sort an array
Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

Addendum:

Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well
*/


function flattenAndSort(array) {
  // Good luck, brave code warrior!
  let output = [];
  array.forEach(x => output.push(...x))
  return output.sort((a, b) => a - b);
}