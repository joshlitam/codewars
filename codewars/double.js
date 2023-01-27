/*codewar challenge for the day link: https://www.codewars.com/kata/53951fff369894e4f10007a9/train/javascript
6 Kyu: Use map() to double the values in an array

Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.

function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
}
For example:
var someNumbers = [1,2,10,57];
double(someNumbers); // should return [2,4,20,114]/
*/

const double = r => r.map(x => x*2)

// testing function
console.log(double([2,5,10,20])) //expected result = [4,10,20,40]

