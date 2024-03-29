/*codewar challenge for the day link: https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript
7 kyu: Get key/value pairs as arrays
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]
Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?
*/

function keysAndValues(data){
  let keys = []
  let values = []
  for (let key in data) {
    keys.push(key)
    values.push(data[key])
  }
  return [keys, values]
}