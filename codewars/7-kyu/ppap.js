/*codewar challenge for the day link: https://www.codewars.com/kata/583c9a256e3994d1bf000638/train/javascript
7 kyu: PPAP

Take two arrays consisting of two strings in each array and combine them into one hyphen seperated string. The first character of each word should be capitalized, no matter the input case. The word common to both arrays should appear as the first and last words in the new string.

Finally, the order of the final string should be the non-common word in the second array as the second word, and the non-common word in the first array as the 3rd word.
*/

function ppap(arr1, arr2) {
    let commonWords = []
    let arr1Lower = arr1.map(x => x.toLowerCase())
    let arr2Lower = arr2.map(x => x.toLowerCase())
    let a 
    let b
    arr1Lower.forEach(x => {
      if (arr1Lower.includes(x) && arr2Lower.includes(x)) {
        commonWords.push(x)
        commonWords = commonWords.join("").split("").map((x, i) => i == 0 ? x.toUpperCase() : x).join("")
        a = arr1Lower.filter(y => y != x).join("").split("").map((x, i) => i == 0 ? x.toUpperCase() : x).join("")
        b = arr2Lower.filter(y => y != x).join("").split("").map((x, i) => i == 0 ? x.toUpperCase() : x).join("")
      }
    })
    console.log(a, b, commonWords)
    return commonWords + "-" + b + "-" + a + "-" + commonWords
  }