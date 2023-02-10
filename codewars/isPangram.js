/*codewar challenge for the day link:https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
6 kyu: Array.diff
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

// use filter to check if a string contains each letter
const isPangram = string => {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
                     "v", "w", "x", "y", "z"]
    let pangram = alphabet.filter(x => !string.toLowerCase().split("").includes(x))
    return pangram.length == 0
  }

// application
console.log(isPangram("The quick brown fox jumps over the lazy dog.")) //expected result: true