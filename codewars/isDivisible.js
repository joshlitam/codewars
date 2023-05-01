/*codewar challenge for the day link: https://www.codewars.com/kata/558ee8415872565824000007/train/javascript
7 kyu: Is n divisible by (...)?
Create a function isDivisible(n,...) that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

isDivisible(6,1,3)--> true because 6 is divisible by 1 and 3
isDivisible(12,2)--> true because 12 is divisible by 2
isDivisible(100,5,4,10,25,20)--> true
isDivisible(12,7)--> false because 12 is not divisible by 7
This kata is following kata: http://www.codewars.com/kata/is-n-divisible-by-x-and-y


*/

function isDivisible(){
    let modulo = []
    for (i = 1; i < arguments.length; ++i) {
      modulo.push(arguments[0] % arguments[i])
    }
    return modulo.filter(x => x != 0).length > 0 ? false : true
  }