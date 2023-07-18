/*codewar challenge for the day link: https://www.codewars.com/kata/52988f3f7edba9839c00037d/train/javascript
7 kyu: The reject() function
Implement a function which filters out array values which satisfy the given predicate.

reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]
*/

function reject(array, predicate) {
  return array.filter(x => !predicate(x))
}