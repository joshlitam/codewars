/*codewar challenge for the day link:https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
6 kyu: Unique In Order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

// use forEach to check for duplicate elements
const uniqueInOrder = str => {
    const arr = []
    let splitStr
    
    if (Array.isArray(str)) {
      splitStr = str
    } else {
      splitStr = str.split("")
    }
    
    splitStr.forEach((x, i) => {
      if (splitStr[i] == splitStr[i+1]) {
        
      } else {
        arr.push(x)
      }
    })
  
    return arr
  }

// application
console.log(uniqueInOrder([1,1,2,2,3,3,4,5])) //expected result: 1,2,3,4,5