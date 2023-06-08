/*codewar challenge for the day link: https://www.codewars.com/kata/580435ab150cca22650001fb/train/javascript
7 kyu: Find the lucky numbers
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]
Don't worry about bad input, you will always receive a finite list of integers.
*/

var filterLucky=x=>{
    return x.map(y => y.toString().split("")).filter(z => z.includes("7")).map(a => Number(a.join("")))
  }