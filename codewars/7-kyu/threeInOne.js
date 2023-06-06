/*codewar challenge for the day link: https://www.codewars.com/kata/572cb264362806af46000793/train/javascript
7 kyu: Training JS #24: methods of arrayObject---splice() and slice()
Task
Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.

Note1: You should not modify the original array.

Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have to verify the validity of the parameter, and do not worry about the number of elements of the array is not a multiple of 3.
*/

function threeInOne(arr){
    let output = []
    for (i = 0; i < arr.length; i+=3) {
      output.push(arr.slice(i, i+3).reduce((a, b) => a + b, 0))
    }
    return output
  }