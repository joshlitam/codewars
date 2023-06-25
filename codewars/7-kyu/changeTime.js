/*codewar challenge for the day link: https://www.codewars.com/kata/56b84da91d36bbfd7a0006e0/train/javascript
7 kyu: Timmy Time
Write a function changeTime which increases or decreases given time. Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes. Let see some examples:

changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'
*/

function changeTime(input, delta) {
    let hours = +input.split(":")[0]
    let mins = +input.split(":")[1]
    if (mins == "00" && delta == -1) {
      mins = 59
      if (hours == "00") {
        hours = 23
      } else {
        hours = hours - 1
      }
    } else if (mins == "59" && delta == 1) {
      console.log(hours, mins)
      mins = "00"
      if (hours == 23) {
        hours = "00"
      } else {
        hours += 1
      }
    } else {
      mins += delta
    }
    console.log(hours.toString().length, mins.toString().length)
    if (hours.toString().length == 1) {
      hours = "0" + hours
    }
        
    if (mins.toString().length == 1) {
      mins = "0" + mins
    }
    return hours + ":" + mins
  }