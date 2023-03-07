/*codewar challenge for the day link: https://www.codewars.com/kata/55c3026406402936bc000026/train/javascript
7 kyu: Insert Dashes 2
This is a follow up from my kata Insert Dashes.
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('*') between each even numbers in num
For example:
insertDashII(454793) --> 4547-9-3
insertDashII(1012356895) --> 10123-56*89-5

Zero shouldn't be considered even or odd.
*/

function insertDashII(num) {
    const arr = num.toString().split("")
    for (i = 0; i < arr.length; ++i) {
      if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i] != 0 && arr[i+1] != 0) {
        arr.splice(i+1, 0, "*")
      } else if (arr[i] % 2 == 1 && arr[i+1] % 2 == 1) {
        arr.splice(i+1, 0, "-")
      }
    }
    return arr.join("")
 }