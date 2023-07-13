/*codewar challenge for the day link: https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
6 kyu: Reverse every other word in the string
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){
    return str.split(" ").map((x, i) => i % 2 !== 0 ? x.split("").reverse().join("") : x).join(" ").trim()
  }