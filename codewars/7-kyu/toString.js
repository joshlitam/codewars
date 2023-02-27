/*codewar challenge for the day link: https://www.codewars.com/kata/578e8fb075ffd1891e000a6a/train/javascript
7 Kyu: Milliseconds
In this kata you'll be given a value expressed in milliseconds. Your job is to convert this value to a nicely readable format like this "hh:mm:ss".

Some basic rules:

Your answer should be returned as a string
Don't use any leading zeros before your string, e.g.
"1:00:00" // is correct;

"1:00" // is correct;

"01:00" // is not correct;
Always show the number of minutes and seconds, but don't show the hours if less than one hour
"0:59:00" // is not correct;

"59:00" // is correct;
Always round down to the nearest whole second
If the value is less than 1 hour, don't show the hours at all
The highest possible value will be 86,400,000 milliseconds, i.e. 24 hours
*/

function toString(time) {

    let convertedTime = time/1000
    let seconds = (convertedTime)
    let minutes = seconds / 60
    let hours = minutes / 60
    
    let endingSeconds = Math.floor(seconds % 60)
    let endingMinutes = Math.floor(minutes % 60)
    let endingHours = Math.floor(hours)
    
    if (endingSeconds < 10) {
      endingSeconds = `0${endingSeconds}`
    } else {
      endingSeconds = endingSeconds
    }
    
    if (endingHours > 0) {
      if (endingMinutes < 10) {
       endingMinutes = `0${endingMinutes}`
      } else {
       endingMinutes = endingMinutes
      }
      return `${endingHours}:${endingMinutes}:${endingSeconds}`
    } else {
      return `${endingMinutes}:${endingSeconds}`
    }
  }