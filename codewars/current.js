/*codewar challenge for the day link: https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
8 Kyu: Thinkful - Logic Drills: Traffic light

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

function updateLight(current) {
  
    if (current == 'green') {
      current = 'yellow'
    } else if (current == 'yellow') {
      current = 'red'
    } else {
      current = 'green'
    }
    return current
  }
