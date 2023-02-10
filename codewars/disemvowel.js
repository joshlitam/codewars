/*codewar challenge for the day link: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
7 kyu: Disemvowel Trolls

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// create an array of vowels and use filter to remove it from a string
const disemvowel = string => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    const noVowels = string.split("").filter(x => !vowels.includes(x)).join("")
    return noVowels
  }

// application
console.log(disemvowel("Toys are awesome")) // expected result: Tys r wsm