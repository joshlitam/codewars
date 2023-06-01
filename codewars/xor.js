/*codewar challenge for the day link: https://www.codewars.com/kata/584d2c19766c2b2f6a00004f/train/javascript
7 kyu: Boolean Logic from Scratch
Task
You need to implement two functions, xor and or, that replicate the behaviour of their respective operators:

xor = Takes 2 values and returns true if, and only if, one of them is truthy.
or = Takes 2 values and returns true if either one of them is truthy.
When doing so, you cannot use the or operator: ||.

Input
Not all input will be booleans - there will be truthy and falsey values [the latter including also empty strings and empty arrays]
There will always be 2 values provided
*/

const or = (a, b) => {
    if (Boolean(a) !== Boolean(b)) {
      return Boolean(a) ? true : Boolean(b)
    } else {
      return Boolean(a)
    }
  };
  
  const xor = (a, b) => {
    return Boolean(a) === Boolean(b) ? false : true 
    
  };