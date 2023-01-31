/*codewar challenge for the day link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript
7 Kyu: List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

const filter_list = arr => arr.filter(x => typeof x == 'number')

// testing function
console.log(filter_list([2,5,'man', 'car'])) //expected result = [2, 5]

