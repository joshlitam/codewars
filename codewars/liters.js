/*codewar challenge for the day link:https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript
8 kyu: Keep Hydrated!

Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5
*/

// Solution: use math.floor to get the lowest value
const litres = num => Math.floor(num * 0.5)

// application
console.log(litres(3)) //expected output: 1