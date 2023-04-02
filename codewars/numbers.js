/*codewar challenge for the day link: https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/javascript
7 kyu: Evens times last
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.


*/

function evenLast(numbers) {
    let multiplier = (numbers[numbers.length - 1])
    let multiplied = numbers.map(x => x * multiplier)
    let sum = multiplied.filter((x, i) => i % 2 == 0).reduce((a, b) => a + b, 0)
    return sum
  }