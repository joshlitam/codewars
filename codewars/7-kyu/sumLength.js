/*codewar challenge for the day link: https://www.codewars.com/kata/571965ccdf7fdb10a00000ea/train/javascript
7 kyu: Sum and Length

In this kata you must return a string value, where the first part is the sum of positive numbers and the second part is the number of negative numbers.
Knowing that the first '0' is negative, the second is positive, the third is negative, and so on...
*/

function sumLength (arr){
	let filter = arr.filter(x => x == 0).length
  let numberOfZeros = filter % 2 == 0 ? filter/2 : (Math.floor(filter/2)) + 1
  return `${arr.filter(x => x > 0).reduce((a, b) => a + b, 0)} ${arr.filter(x => x < 0).length + numberOfZeros}`
}