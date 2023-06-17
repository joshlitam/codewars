/*codewar challenge for the day link: https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript
7 kyu: Return the first M multiples of N
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

Ex.

multiples(3, 5.0)
should return

[5.0, 10.0, 15.0]
*/

function multiples(m, n){
    let output = []
    for (i = 0; i < m; ++i) {
      output.push(n * (i+ 1))
    }
    return output
  }