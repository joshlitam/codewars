/*codewar challenge for the day link: https://www.codewars.com/kata/5840946ea3d4c78e90000068/train/javascript
7 kyu: Gryffindor vs Slytherin Quidditch Game
It's the most hotly anticipated game of the school year - Gryffindor vs Slytherin! Write a function which returns the winning team.

You will be given two arrays with two values.

The first given value is the number of points scored by the team's Chasers and the second a string with a 'yes' or 'no' value if the team caught the golden snitch!

The team who catches the snitch wins their team an extra 150 points - but doesn't always win them the game.

gameWinners([150, 'yes'],[200, 'no']) //'Gryffindor wins!'
gameWinners([400, 'no'],[350, 'yes']) //'Slytherin wins!'
If the score is a tie return "It's a draw!""

** The game only ends when someone catches the golden snitch, so one array will always include 'yes' or 'no.' Points scored by Chasers can be any positive integer.
*/

function gameWinners(gryffindor, slytherin) {
    const team1 = gryffindor.map(x => typeof x == 'number' ? x : x == 'yes' ? 150 : 0).reduce((a, b) => a+b, 0)
    const team2 = slytherin.map(x => typeof x == 'number' ? x : x == 'yes' ? 150 : 0).reduce((a, b) => a+b, 0)
    return team1 == team2 ? "It's a draw!" : (team1 > team2 ? "Gryffindor wins!" : "Slytherin wins!")
    }