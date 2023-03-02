/*codewar challenge for the day link:https://www.codewars.com/kata/59f897ecc374cb9ed90000c2/train/javascript
6 kyu: Monkey Talk
Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.
*/

function monkeyTalk(phrase){
    console.log(phrase)
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const changedPhrase = phrase.split(" ").map(x => x.split("")).map(x => vowels.includes(x[0].toLowerCase()) ? 'eek' : 'ook').join(" ")
    return changedPhrase[0].toUpperCase() + changedPhrase.slice(1) + "."
  }