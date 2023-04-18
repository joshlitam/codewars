/*codewar challenge for the day link: https://www.codewars.com/kata/5a08bb3c80171f4b040000fc/train/javascript
7 kyu: Podcast Speed Listening Calculator
If you have ever listened to an audiobook or podcast, you may have had the option to change the play speed of the audio. This allows you to increase or decrease the speed that you listen to your content.

I want you to calculate the time it takes to listen to the audio when the play speed is varied. The time should be rounded down to whole seconds.
*/

function speedListen(audioLength, playSpeed) {
    // 
    let time = audioLength.split(':')
    let h = time[0][0] == 0 ? time[0][1] : time[0]
    let m = time[1][0] == 0 ? time[1][1] : time[1]
    let s = time[2][0] == 0 ? time[2][1] : time[2]
    let totalSeconds = ((+h*3600) + (+m*60) + +s)/playSpeed
    let newTime = new Date(totalSeconds * 1000).toISOString().slice(14, 19)
    return (Math.floor(totalSeconds / 3600) > 9 ? Math.floor(totalSeconds / 3600) : "0" + Math.floor(totalSeconds / 3600)) + ":" + newTime;
    
  }