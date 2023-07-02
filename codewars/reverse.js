/*codewar challenge for the day link: https://www.codewars.com/kata/52b74e0936d582d9210005ff/train/javascript
7 kyu: esreveR gnirtS
Create a function called reverse for the String prototype that will allow the following functionality:

"String".reverse();// => returns "gnirtS"
"Super awesome string".reverse();// => returns "gnirts emosewa repuS"
The reverse function should NOT modify the original string.
*/

//Create reverse function for the String prototype
String.prototype.reverse = function() {
    let output = []
    this.split("").forEach(x => output.unshift(x))
    return output.join("")
  }