/*codewar challenge for the day link: https://www.codewars.com/kata/57a0885cbb9944e24c00008e/train/javascript
8 Kyu: Remove exclamation marks

Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
    return s.split("").filter(x=>x!=="!").join("")
  }
