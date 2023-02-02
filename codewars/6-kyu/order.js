/*codewar challenge for the day link: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
6 kyu: Your order, please

Your taskzis to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

// split the string into an array, use sort to check each number in each string and sort it from 1-9, then join the array into a string
const order = arr => {
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    const wordsArr = arr.split(" ") //["is2", "Thi1s", "T4est", "3a"]
    const array = wordsArr.sort((a, b) => a.split("").filter(x => numbers.includes(+x)) - b.split("").filter(x => numbers.includes(+x)))
    return array.join(" ")
  }

// application
console.log(order('4of th3 go2od of1')) // expecte result = 'of1 go2od th3 4of'