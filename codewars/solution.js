/*codewar challenge for the day link: https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript
7 Kyu: String ends with?
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/

/* solution: use splice to check if the ending of the string is the same as the 2nd string */
const solution = (arr, end) => {
    const ending = end.length
    if (arr === end) {
      return true
    } else {
    return (end === (arr.split("").splice(arr.length - end.length, arr.length - 1)).join(""))
    }
  }

// application
console.log(solution("samurai", "ai")) //expected output: true