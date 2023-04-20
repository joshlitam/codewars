/*codewar challenge for the day link: https://www.codewars.com/kata/5356ad2cbb858025d800111d/train/javascript
7 kyu: Name Array Capping
Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

example

capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
*/

function capMe(names) {
    return names.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
  }