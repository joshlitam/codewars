/*codewar challenge for the day link: https://www.codewars.com/kata/5889177bf148eddd150002cc/train/javascript
7 kyu: TIY-FizzBuzz
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?
*/

function tiyFizzBuzz(sentence){
  let vowels = ["a", "e", "i", "o", "u"]
  let wordsArray = sentence.split("").map(x => {
    if (vowels.includes(x.toLowerCase())) {
      if (x.toUpperCase() == x) {
        x = "Iron Yard"
      } else {
        x = "Yard"
      }
    } else if (x == " "){
      x = " "
    } else if (x.toLowerCase() !== x.toUpperCase()) {
      if (x.toUpperCase() == x) {
        x = "Iron"
      } else {
        x = x
      }
    }   
    return x
  })
  return wordsArray.join("")
}