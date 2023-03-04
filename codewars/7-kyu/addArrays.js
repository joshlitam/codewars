/*codewar challenge for the day link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
7 kyu: Mumbling
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

// seperate characters in a string and repeat them based on index, joined by a hyphen
const accum = s => s.split("").map((x, i) => (x.toUpperCase() + x.toLowerCase().repeat(i))).join("-")

// application
console.log(accum("AzmfasS"))