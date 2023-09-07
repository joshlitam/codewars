/*codewar challenge for the day link: https://www.codewars.com/kata/57b4dd38d2a31c75f7000299/train/javascript
7 kyu: Make the small words big!
Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...

Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.

For example:

"The quick brown fox jumps over the lazy dog"

Should become:

"THE qck brwn FOX jmps vr THE lzy DOG"

For the purposes of this kata, mid-word punctuation counts towards the character limit of a word.

e.g: "it's / I'm" should become: "t's / I'M"
*/

function smallWordHelper(sentence){
  let vowels = "aeiou"
  let vowelsArr = vowels.split("")
  let str = sentence.split(" ").map(x => {
    if (x.length < 4) {
      x = x.toUpperCase()
    } else {
      x = x.split("").filter(y => vowelsArr.includes(y.toLowerCase()) ? y = "" : y).join("")
    }
    return x
  }).join(" ")
  return str
}