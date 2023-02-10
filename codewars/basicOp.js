/*codewar challenge for the day link: https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
8 Kyu: Basic Mathematical Operations

Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

// solution: use switch statements to determine the operation
const basicOp = (op, num1, num2) => {
    switch (op) {
        case '+':
        return num1 + num2
        break
        
        case '-':
        return num1 - num2
        break
        
        case '*':
        return num1 * num2
        break
        
        case '/':
        return num1 / num2
        break
    }
  }

// application
console.log(basicOp('+', 1704, 22)) //expected output: 1726