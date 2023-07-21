/*codewar challenge for the day link: https://www.codewars.com/kata/57ee31c5e77282c24d000024/train/javascript
7 kyu: Paul's Misery
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/

function paul(x){
  let score = x.map(y => {
    if (y == "kata") {
      y = 5;
    } else if (y == "Petes kata") {
      y = 10;
    } else if (y == "eating") {
      y = 1;
    } else {
      y = 0;
    }
    return y;
  }).reduce((a, b) => a + b, 0)
  
  let str;
  if (score < 40) {
    str = "Super happy!";
  } else if (score >=40 && score < 70) {
    str = "Happy!";
  } else if (score >= 70 && score < 100) {
    str = "Sad!";
  } else {
    str = "Miserable!";
  }
  console.log(score)
  return str;
}