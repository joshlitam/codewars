/*codewar challenge for the day link: https://www.codewars.com/kata/582642b1083e12521f0000da/train/javascript
7 kyu: Array Mash
Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

function arrayMash (array1, array2) {
    let output = []
    for (i = 0; i < array1.length; i++) {
      output.push(array1[i])
      output.push(array2[i])
    }
    return output
  }