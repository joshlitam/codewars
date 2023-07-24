/*codewar challenge for the day link: https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript
7 kyu: sillyCASE
Create a function that takes a string and returns that string with the first half lowercased and the last half uppercased.

eg: foobar == fooBAR

If it is an odd number then 'round' it up to find which letters to uppercase. See example below.

sillycase("brian")  
//         --^-- midpoint  
//         bri    first half (lower-cased)  
//            AN second half (upper-cased) 
*/

function sillycase(silly) {
    return silly.split("").splice(0, Math.ceil(silly.length/2)).join("").toLowerCase() + 
      silly.split("").splice(Math.ceil(silly.length/2), silly.length - 1).join("").toUpperCase()
  }