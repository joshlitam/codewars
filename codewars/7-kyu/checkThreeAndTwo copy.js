/*codewar challenge for the day link: https://www.codewars.com/kata/5a9e86705ee396d6be000091/train/javascript
7 kyu: Check three and two
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
    const first = array.sort().filter(x => x == array[0]).length
    const last = array.sort().filter(x => x == array[4]).length
    return (first + last == 5 && first < 4 && last < 4)
  }