/*codewar challenge for the day link: https://www.codewars.com/kata/55b1fd84a24ad00b32000075/train/javascript
7 kyu: Selective fear of numbers
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/

var AmIAfraid = function(day, num){
    let d = day.toLowerCase();
    let x;
    console.log(d, num)
    switch (d) {
        case "monday":
        x = num == 12
        break
        case "tuesday":
        x = num > 95
        break
        case "wednesday":
        x = num == 34
        break
        case "thursday":
        x = num == 0
        break
        case "friday":
        x = num % 2 == 0
        break
        case "saturday":
        x = num == 56
        break
        case "sunday":
        x = num == 666 || num == -666
        break
    }
    return x
  }