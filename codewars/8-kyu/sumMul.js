/*codewar challenge for the day link: https://www.codewars.com/kata/57241e0f440cd279b5000829/train/javascript
8 Kyu: Sum of Multiples

Your Job
Find the sum of all multiples of n below m

Keep in Mind
n and m are natural numbers (positive integers)
m is excluded from the multiples
Examples
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"
*/

function sumMul(n,m){
    let output = []
    if (n >= m) {
      return "INVALID"
    } else {
      let num = n
      while (n < m) {
        output.push(n)
        n += num
      }
      return output.reduce((a, b) => a + b, 0)
    }
  }