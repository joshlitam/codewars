/*codewar challenge for the day link: https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
7 kyu: Row Weights
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
*/

function rowWeights(array){
    let team1 = [array[0]]
    let team2 = []
    if (array.length > 1) {
      for (i = 1; i < array.length; ++i) {
        if (i % 2 == 0) {
          team1.push(array[i])
        }  else {
          team2.push(array[i])
        } 
      }
    } else {
      team2.push(0)
    }
    return [team1.reduce((a, b) => a + b, 0), team2.reduce((a, b) => a + b, 0)]
    
  }