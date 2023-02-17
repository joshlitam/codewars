/*codewar challenge for the day link: https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript   
8 Kyu: Sort and Star

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

const twoSort = str => str.sort()[0].split("").join("***")
