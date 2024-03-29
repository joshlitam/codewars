/*codewar challenge for the day link: https://www.codewars.com/kata/566044325f8fddc1c000002c/train/javascript
7 kyu: Return a string's even characters.
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/

function evenChars(string) {
    if (string.length > 1 && string.length < 101) {
      return string.split("").filter((x, i) => i % 2 != 0)
    } else {
      return "invalid string"
    }
    
  }