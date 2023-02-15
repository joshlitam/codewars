/*codewar challenge for the day link: https://www.codewars.com/kata/578553c3a1b8d5c40300037c/train/javascript
7 kyu: One's and Zeroes
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

// use a for loop to count binaries
const binaryArrayToNumber = arr => {
    let num = 0
    let subtractor = 1
    for (i = 0; i < arr.length; i++) {
      num += Math.pow(2, arr.length - subtractor) * arr[i]
      subtractor += 1
      console.log(num)
    }
    return num
  };

// application
console.log(binaryArrayToNumber([0,1,0,1])) //expected result: 5