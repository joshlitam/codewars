/*codewar challenge for the day link: https://www.codewars.com/kata/56a75b91688b49ad94000015/train/javascript
7 kyu: https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)
*/

function vowelIndices(word){
  let wordArr = word.split("")
  let arr = []
  let vowels = ["a", "e", "i", "o", "u", "y"]
  wordArr.forEach((x, i) => {
    if (vowels.includes(x.toLowerCase())) {
      arr.push(i + 1)
    }
  })
  return arr
}