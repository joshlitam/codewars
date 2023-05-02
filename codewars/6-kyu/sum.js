/*codewar challenge for the day link:https://www.codewars.com/kata/57ab606e53ba3339da0000a2/train/javascript
6 kyu: sum function
Write a sum function which will work properly when invoked using either syntax below.

sum(2,3);  // Outputs 5
sum(2)(3); // Outputs 5
HINT : use closures
*/

function sum(x) {
    if (arguments.length > 1) {
      return arguments[0] + arguments[1]
    } else {
       return function(y) {
        return x+y
      }
    }
  }