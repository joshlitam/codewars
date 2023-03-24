/*codewar challenge for the day link:https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
6 kyu: Break camelCase
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const solution = string => string.split("").map((x, i) => x != x.toLowerCase() ? " " + x:x).join("")
