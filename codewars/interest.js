/*codewar challenge for the day link: https://www.codewars.com/kata/59cd0535328801336e000649/train/javascript
7 kyu: Simple Interest and Compound Interest
Simple interest on a loan is calculated by simply taking the initial amount (the principal, p) and multiplying it by a rate of interest (r) and the number of time periods (n).

Compound interest is calculated by adding the interest after each time period to the amount owed, then calculating the next interest payment based on the principal PLUS the interest from all previous periods.

Given a principal p, interest rate r, and a number of periods n, return an array [ total owed under simple interest, total owed under compound interest ]

Notes:

Round all answers to the nearest integer
Principal will always be an integer between 0 and 9999
interest rate will be a decimal between 0 and 1
number of time periods will be an integer between 0 and 50
*/

function interest(P,r,n) {
    let compound = P
    for (i = 0; i < n; ++i) {
      compound += (compound * r)
    }
    return [Math.round(P + (P * r * n)), Math.round(compound)]
  }