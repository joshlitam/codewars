/*codewar challenge for the day link: https://www.codewars.com/kata/574e4175ff5b0a554a00000b/train/javascript
7 Kyu: Convert Improper Fraction to Mixed Numeral
In Math, an improper fraction is a fraction where the numerator (the top number) is greater than or equal to the denominator (the bottom number) For example: 5/3 (five third).

A mixed numeral is a whole number and a fraction combined into one "mixed" number. For example: 1 1/2 (one and a half) is a mixed numeral.

Task
Write a function convertToMixedNumeral to convert the improper fraction into a mixed numeral.

The input will be given as a string (e.g. '4/3').

The output should be a string, with a space in between the whole number and the fraction (e.g. '1 1/3'). You do not need to reduce the result to its simplest form.

For the purpose of this exercise, there will be no 0, empty string or null input value. However, the input can be:

a negative fraction
a fraction that does not require conversion
a fraction that can be converted into a whole number
*/

function convertToMixedNumeral(parm){
    const arr = parm.split("/")
    if (arr[0] % arr[1] == 0) {
      return (`${Math.floor(arr[0]/arr[1])}`)
    } else {
      if (arr[0]/arr[1] < 1 && arr[0]/arr[1] > 0) {
        return `${arr[0] % arr[1]}/${arr[1]}`
      } else if (arr[0] > 0) {
        return `${Math.floor(arr[0]/arr[1])} ${arr[0] % arr[1]}/${arr[1]}`
      } else if (arr[0]/arr[1] > -1) {
        return `${arr[0] % arr[1]}/${arr[1]}`
      } else if (arr[0] < -1) {
        return `${Math.ceil(arr[0]/arr[1])} ${(arr[0] * -1) % arr[1]}/${arr[1]}`
      }
      
    }
    
  }