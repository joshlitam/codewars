/*codewar challenge for the day link: https://www.codewars.com/kata/55b95c76e08bd5eef100001e/train/javascript
7 kyu: Counting in the Amazon
The Arara are an isolated tribe found in the Amazon who count in pairs. For example one to eight is as follows:

1 = anane
2 = adak
3 = adak anane
4 = adak adak
5 = adak adak anane
6 = adak adak adak
7 = adak adak adak anane
8 = adak adak adak adak

Take a given number and return the Arara's equivalent.
*/

function countArara(n) {
  let str = ""

  for (i = 2; i <= n; i += 2) {
    str += "adak "
  }
  
  if (n % 2 == 1) {
    str += "anane"
  }
    
return str.trim()
}