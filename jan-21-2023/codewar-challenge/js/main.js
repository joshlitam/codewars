// Codewar Challenges

const documentName = 'Codewar Challenges January 21, 2023'
document.querySelector('h1').innerText += ` This document is for the ${documentName}. Please see the console log for details`

console.log('Hello, World!')

/* Codewar Challenge 1: 6kyu link https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
Who likes it?*/

// use if statements to determine how many people like this
function likes(names) {
    let a = ""
    if (names.length == 1) {
      a = `${names[0]} likes this`
    } else if (names.length == 2) {
      a = `${names[0]} and ${names[1]} like this`
    } else if (names.length == 3) {
      a = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length > 3) {
      a = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    } else {
      a = "no one likes this"
    }
    
    return a
  }

// application
console.log(likes(['John', 'Mark', 'Joseph']))