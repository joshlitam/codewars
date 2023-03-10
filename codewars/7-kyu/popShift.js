/*codewar challenge for the day link: https://www.codewars.com/kata/57cec34272f983e17800001e/train/javascript
7 kyu: Pop Shift
You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.


*/

function popShift(s){
    let arr1 = []
    let arr2 = []
    let splitStr = s.split("")
    
    while (splitStr.length > 1) {
      const pop = splitStr.pop()
      const shift = splitStr.shift()
      arr1.push(pop)
      arr2.push(shift)
    }
    return [arr1.join(""), arr2.join(""), splitStr.join("")]
  }