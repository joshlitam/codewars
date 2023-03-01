/*codewar challenge for the day link: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
8 Kyu: Is it a Palindrome
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
    return x.split("").reverse().join("").toLowerCase() == x.toLowerCase()
  }
