/*codewar challenge for the day link: https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
8 Kyu: ASCII Total

You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291
*/

function uniTotal (string) {
    let sum = 0;
    for (i = 0; i < string.length; i++) {
      sum += string.charCodeAt(i);
    }
    return sum;
  }