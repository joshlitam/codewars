/*codewar challenge for the day link: https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript
7 kyu: How many consecutive numbers are needed?
Create the function consecutive(arr) that takes an array of integers and return the minimum number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.

For example:
If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Numbers in arr will be unique.
*/

function consecutive(arr) {
    const sortedArr = arr.sort((a, b) => a-b)
    const consecutiveArr = []
    for (i = arr[0]; i <= arr.length; ++i) {
      consecutiveArr.push(i)
    }
    if  (arr.length == 0) {
      return 0
    } else if (consecutiveArr == sortedArr) {
      return 0
    } else {
      return Math.max(...sortedArr) - Math.min(...sortedArr) - arr.length + 1
    }
    
  }