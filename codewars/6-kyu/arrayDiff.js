/*codewar challenge for the day link:https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
6 kyu: Array.diff
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

Example: 
arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

// remove all elements in array a that are present in array b
const arrayDiff = (a, b) => a.filter(x => !b.includes(x))

// application
console.log(arrayDiff([1,2], [1]))