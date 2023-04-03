/*codewar challenge for the day link: https://www.codewars.com/kata/57eaec5608fed543d6000021/train/javascript
7 kyu: Divide and Conquer
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/

function divCon(x){
    let total = 0
    x.forEach(y => typeof y == "number" ? total += y : total -= y)
    return total
  }