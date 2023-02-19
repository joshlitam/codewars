/*codewar challenge for the day link: https://www.codewars.com/kata/5890579a34a7d44f3b00009e/train/javascript
7 Kyu: Number Manipulation I (Easy)
For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000


*/

const manipulate = num => {
    let arr = num.toString().split("")
    let middleDigit = (arr.length / 2)
    arr.map((x, i) => {
      if (i >= middleDigit) {
        arr[i] = 0
      }
    })
    return +arr.join("")
  }