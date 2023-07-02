/*codewar challenge for the day link: https://www.codewars.com/kata/57e0206335e198f82b00001d/train/javascript
7 kyu: esrever esreveR!
In this kata you must take an input string, reverse the order of the words, and reverse the order of the letters within the words.

But, as a bonus, every test input will end with a punctuation mark (! ? .) and the output should be returned with the mark at the end.

A few examples should help clarify:

esrever("hello world.") == "dlrow olleh."

esrever("Much l33t?") == "t33l hcuM?"

esrever("tacocat!") == "tacocat!"
Quick Note: A string will always be passed in (though it may be empty) so no need for error-checking other types.
*/

function esrever( str ){
    console.log(str.slice(str.length - 1, str.length))
    return str.slice(0, str.length - 1).split("").reverse().join("") + str.slice(str.length - 1, str.length)
  }