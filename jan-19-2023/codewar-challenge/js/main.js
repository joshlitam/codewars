// Codewar Challenges

const documentName = 'Codewar Challenges January 19, 2023'
document.querySelector('h1').innerText += ` This document is for the ${documentName}. Please see the console log for details`

console.log('Hello, World!')

/*codewar challenge for the day link: https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
Getting the middle character of a string (middle two characters if str.length is even)
*/

function getMiddle(s)
{
  return (s.length % 2 == 0) ? `${(s.split('')[(s.length/2)-1])}${(s.split('')[(s.length/2)])}` : `${s.split('')[Math.floor(s.length/2)]}`
}

// testing function
console.log(getMiddle('Train'))
console.log(getMiddle('Ball'))

