/*codewar challenge for the day link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
7 kyu: Two to One
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// use sort and last index of to combine and sort characters
const longest = (str1, str2) => {
    const combined = str1 + str2
    const sorted = combined.split("").filter((x, i) => combined.lastIndexOf(x) == i).sort().join("")
    return sorted
  }  

// application
console.log(longest("aretheyhere", "yestheyarehere")) //expected result: "aehrsty"