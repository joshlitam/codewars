/*codewar challenge for the day link: https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
7 kyu: Last
Find the last element of the given argument(s).

Examples
last([1, 2, 3, 4] ) // =>  4
last("xyz")         // => "z"
last(1, 2, 3, 4)    // =>  4
In javascript and CoffeeScript a list will be an array, a string or the list of arguments.

(courtesy of haskell.org)


*/

function last(list){
    console.log(arguments)
    let lastArg = arguments[arguments.length - 1]
    return lastArg[lastArg.length - 1] == undefined ? arguments[arguments.length - 1] : lastArg[lastArg.length - 1]
  }
  