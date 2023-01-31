/*codewar challenge for the day link: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript
7 Kyu: Testing 1-2-3

Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
Write a function which takes a list of strings and returns each line prepended by the correct number.
The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// use map to get the index of each element and use template notation to change the value
const number = arr => arr.map((x, i) => x = `${i + 1}: ${x}`)

// testing function
console.log(number(['c', 'a', 'b']))) //expected result = ['1: c', '2: a', '3: b']

