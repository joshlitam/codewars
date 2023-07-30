/*codewar challenge for the day link: https://www.codewars.com/kata/586538146b56991861000293/train/javascript
6 kyu: If you can read this...
Task
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

function to_nato(words) {
	return words.split("").map(x => {
    if (x == " ") {
      return ""
    } else if (x == "?") {
      return "?"
    } else if (x == ".") {
      return "."
    } else if (x == ",") {
      return ","
    } else if (x == "!") {
      return "!"
    } else {
      return NATO[x.toLowerCase()]
    }
  }).filter(x => x !== "").join(" ")
}