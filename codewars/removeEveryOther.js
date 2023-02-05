/*codewar challenge for the day link: https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
8 Kyu: Removing Elements
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
None of the arrays will be empty, so you don't have to worry about that!
*/

// solution: use filter to remove every odd element
const removeEveryOther = arr => arr.filter((x, i) => i % 2 == 0)

// application
console.log(removeEveryOther([3912, 2, 1])) //expected output: [3912, 1]