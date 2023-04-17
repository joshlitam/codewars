/*codewar challenge for the day link: https://www.codewars.com/kata/59b843b58bcb7766660000f6/train/javascript
7 kyu: Acrostic Reader
An acrostic is a text in which the first letter of each line spells out a word. It is also a quick and cheap way of writing a poem for somebody, as exemplified below :



Write a program that reads an acrostic to identify the "hidden" word. Specifically, your program will receive a list of words (reprensenting an acrostic) and will need to return a string corresponding to the word that is spelled out by taking the first letter of each word in the acrostic.
*/

function readOut(acrostic) {
    let word = ""
    acrostic.forEach(x => word += x[0])
    return word
  }