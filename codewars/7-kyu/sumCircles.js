/*codewar challenge for the day link: https://www.codewars.com/kata/56143efa9d32b3aa65000016/train/javascript
7 kyu: Some Circles
Write a function that takes as its parameters one or more numbers which are the diameters of circles.

The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".

You don't know how many circles you will be given, but you can assume it will be at least one.

So:

sumCircles(2) == "We have this much circle: 3"
sumCircles(2, 3, 4) == "We have this much circle: 23"
Translations and comments (and upvotes!) welcome!


*/

function sumCircles() {
  let output = []
  for (i = 0; i < arguments.length; i++) {
    output.push(arguments[i]);
  }
  return `We have this much circle: ${Math.round(output.map(x => (Math.pow((x/2), 2) * Math.PI)).reduce((a, b) => a + b, 0))}`
}