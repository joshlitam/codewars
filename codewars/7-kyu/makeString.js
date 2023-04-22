/*codewar challenge for the day link: https://www.codewars.com/kata/5639bdcef2f9b06ce800005b/train/javascript
7 kyu: Return String of First Characters
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/

function makeString(s){
    return s.split(" ").map(x => x[0]).join("")
  }
  