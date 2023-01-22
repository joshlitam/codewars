// Codewar Challenges

const documentName = 'Codewar Challenges January 22, 2023'
document.querySelector('h1').innerText += ` This document is for the ${documentName}. Please see the console log for details`

console.log('Hello, World!')

/* Codewar Challenge 1: 6kyu link https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
Array.diff*/

// remove all elements in array a that are present in array b
const arrayDiff = (a, b) => a.filter(x => !b.includes(x))

// application
console.log(arrayDiff([1,2], [1]))