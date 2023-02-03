/*codewar challenge for the day link: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
7 kyu: Reverse Words

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

// seperate characters in a string, reverse their order and join them again
const reverseWords = str => str.split(' ').map(x => x.split('').reverse().join('')).join(' ')

// application
console.log(reverseWords("The boss is lazy")) //expected result ("ehT ssob si yzal")