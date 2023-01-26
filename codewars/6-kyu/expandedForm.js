/*codewar challenge for the day link: https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript
6kyu: Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/

// function below
function expandedForm(num) {
  // split string into an array
  let numbersToDigits = num.toString().split('')

  // convert all elements into a number
  let numbers = numbersToDigits.map(x => +x)

  // set up multiplier for digits place
  let multiplier = Math.pow(10, numbers.length - 1)

  // loop thru each digit and multiply to get the correct position
  for (i = 0; i < numbers.length; i++) {
    numbers[i] *= multiplier
    multiplier /= 10
  }

  // filter array to take out all 0 digits
  let numbersFiltered = numbers.filter(x => x !== 0)

  // use string concatenation to create the string
  let str = ""
  str += numbersFiltered[0]

  // concatenate starting from index 1
  for (i = 1; i < numbersFiltered.length; i++) {
    str += ` + ${numbersFiltered[i]}`
  }
  return str
}

// application
console.log(expandedForm(70201)) //expected result = 70000 + 200 + 1