/*codewar challenge for the day link: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
7 kyu: Shortest Word

Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

// seperate words by space from a string, get their length, and apply Math.min to get shortest length
const findShort = s =>  Math.min(...s.split(" ").map(x => x.length))

// application
console.log(findShort("Train", "Car", "Airplane")) // expected result: 3