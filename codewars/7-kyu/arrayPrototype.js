/*codewar challenge for the day link: https://www.codewars.com/kata/581351c40d8f13bc450008b8/train/javascript
7 kyu: Extending JavaScript Objects: Get First & Last Array Element
Your task is to extend JavaScript Array object, with methods .first() and .last(), so you can get respectively first or last element of the array.

var a = [2, 5, 7, 3 ,4];

a.first();  // 2
a.last();   // 4
Note: in case of empty array, methods should return undefined.
*/

Array.prototype.first = function() {
    return this[0]
  }
  
  Array.prototype.last = function() {
    return this[this.length - 1]
  }