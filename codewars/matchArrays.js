/*codewar challenge for the day link: https://www.codewars.com/kata/561046a9f629a8aac000001d/train/javascript
7 kyu: Array Comparator
You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.
*/

function matchArrays(v,r){
    let num = 0
    v.forEach(x => r.includes(x) ? num += 1 : num += 0)
    return num
  }