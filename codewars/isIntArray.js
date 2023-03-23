/*codewar challenge for the day link:https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript
6 kyu: Is Integer Array
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
    if (Array.isArray(arr)) {
      const numbers = arr.filter(x => typeof x == "number")
      const filter = numbers.filter(x => x % 1 == 0)
      return filter.length == arr.length
    } else {
      return false
    }
  }