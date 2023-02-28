/*codewar challenge for the day link: https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript
7 kyu: Count consonants
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

function consonantCount(str) {
  const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", 
                     "v", "w", "x", "y", "z"]
  return str.split("").filter(x => consonants.includes(x.toLowerCase())).length
}