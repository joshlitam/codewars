/*codewar challenge for the day link: https://www.codewars.com/kata/55b4f9906ac454650900007d/train/javascript
7 kyu: String Chunk
You should write a function that takes a string and a positive integer n, splits the string into parts of length n and returns them in an array. It is ok for the last element to have less than n characters.

If n is not a number or not a valid size (> 0) (or is absent), you should return an empty array.

If n is greater than the length of the string, you should return an array with the only element being the same string.

Examples:

stringChunk('codewars', 2) // ['co', 'de', 'wa', 'rs']
stringChunk('thiskataeasy', 4) // ['this', 'kata', 'easy']
stringChunk('hello world', 3) // ['hel', 'lo ', 'wor', 'ld']
stringChunk('sunny day', 0) // []
*/

function stringChunk(str, n) {
    let output = []
    let split = str.split("")
    if (typeof n !== "number" || n <= 0) {
      return []
    } else {
      while (split.length > 0) {
      output.push(split.splice(0, n).join(""))
      }
      return output
    }
  }