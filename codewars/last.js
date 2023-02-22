/*codewar challenge for the day link: https://www.codewars.com/kata/57d86d3d3c3f961278000005/train/javascript
7 kyu: 99 Problems, #1: last in list
Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null
*/

const last = xs => xs.length > 0 ? xs[xs.length-1] : null