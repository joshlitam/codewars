/*codewar challenge for the day link: https://www.codewars.com/kata/55960bbb182094bc4800007b/train/javascript
7 kyu: Insert Dashes
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).
*/

function insertDash(num) {
    const arr = num.toString().split("")
     return arr.map((x, i) => (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 1]) ? x + "-" : x).join("")
  }
  