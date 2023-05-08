/*codewar challenge for the day link: https://www.codewars.com/kata/5a0efbb7c374cb69970000cf/train/javascript
7 kyu: Reversed Message
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

*/

function reverseMessage(str) {
    return str.split("").reverse().join("").split(" ").map(x => x ? x[0].toUpperCase() + x.slice(1).toLowerCase() : x).join(" ")
  }