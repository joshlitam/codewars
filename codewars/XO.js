/*codewar challenge for the day link: https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
7 kyu: Exes and Ohs
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

// seperate words by space from a string, convert them to lower case, filter x and o, and compare their length
const XO = str => (str.split("").filter(x => x.toLowerCase() == "o").length == str.split("").filter (x => x.toLowerCase() == "x").length) ? true : false

// application
console.log(XO("xxxOoO")) // expected result: true