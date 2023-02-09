/*codewar challenge for the day link: https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript
7 Kyu: Isograms

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false
*/

// solution: check if there are more than 1 instance of each character in a string
const isIsogram = string => {
    const arr = string.toLowerCase().split("")
    const arr2 = arr.filter(x => arr.indexOf(x) == arr.lastIndexOf(x))
    return (arr2.join("") == string.toLowerCase())
  }

// testing function
console.log(isIsogram("dexterity")) //expected result = false

