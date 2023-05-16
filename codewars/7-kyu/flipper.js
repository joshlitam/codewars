/*codewar challenge for the day link: https://www.codewars.com/kata/594946120f7b28c70300008d/train/javascript
7 kyu: Its all backwards
I give you this: ['This', 'Is', 'a' 'Example');

You give me back this: 'examplE a iS thiS'

So. I want what I give you back in reverse order, with only the last letter of each item capitalized. If the item is a single letter word and not capitilized when I give it to you, do not capitalize it.


*/

function flipper(stringArr){
    return stringArr.map(x => x.length > 1 ? x.slice(0, x.length-1).toLowerCase() + x[x.length - 1].toUpperCase() : x).reverse().join(" ")
  }