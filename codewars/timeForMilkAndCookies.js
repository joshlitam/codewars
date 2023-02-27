/*codewar challenge for the day link: https://www.codewars.com/kata/52af7bf41f5a1291a6000025/train/javascript
7 Kyu: Milk and Cookies for Santa
Happy Holidays fellow Code Warriors!
It's almost Christmas Eve, so we need to prepare some milk and cookies for Santa! Wait... when exactly do we need to do that?

Time for Milk and Cookies
Complete the function function that accepts a Date object, and returns true if it's Christmas Eve (December 24th), false otherwise.

Keep in mind Javascript's Date month is 0 based!
*/

function timeForMilkAndCookies(date){
  let month = date.getMonth()
  let day = date.getDate()
  
  if (month == 11 && day == 24) {
    return true
  } else {
    return false
  }
}