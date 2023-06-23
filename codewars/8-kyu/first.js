/*codewar challenge for the day link: https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript
8 Kyu: pick a set of first elements

Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

If n == 0 return an empty sequence []

Examples
var arr = ['a', 'b', 'c', 'd', 'e'];
first(arr) //=> ['a'];
first(arr, 2) //=> ['a', 'b']
first(arr, 3) //=> ['a', 'b', 'c'];
first(arr, 0) //=> [];
*/
function first(arr, n) {
    let output = []
    if (n == 0) {
        return output
    } else if (!n) {
        return [arr[0]]
    } else if (n > arr.length) {
        return arr
    } else {
        for (i = 0; i < n; i++) {
            output.push(arr[i])
        }
        return output
    }
}
