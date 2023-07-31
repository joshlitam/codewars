/*codewar challenge for the day link: https://www.codewars.com/kata/596a5e32634dad2a3c00003f/train/javascript
7 kyu: Make every letter after X into caps.
Imagine a book author has hired us to create a function that takes his book as a string as input and finds all instances of a letter that we will call 'x' (case-sensitive) and turns all the letters after 'x' into a capital letter.

For example.

makeEveryLetterAfterXCaps('and larry walked into the park late to chase a squirrel', 'l')

Should return:

"and lArry walKed into the park lAte to chase a squirrel"

If the letter after x is already in caps it should stay in caps.

Note that the swapping occurs considering the modified string, so makeEveryLetterAfterXCaps('aaaa', 'a') will result into "aAaA"
*/

var makeEveryLetterAfterXCaps = function (str, letter) {
  let arr = str.split("")
  for (i = 1; i < arr.length; ++i) {
    if (arr[i - 1] == letter) {
      arr[i] = arr[i].toUpperCase()
    }
  }
  return arr.join("")

}