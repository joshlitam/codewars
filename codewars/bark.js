/*codewar challenge for the day link: https://www.codewars.com/kata/54dba07f03e88a4cec000caf/train/javascript
8 Kyu: Barking mad

Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.
*/

function Dog (breed) {
    this.breed = breed;
    this.bark = function() {
      return "Woof"
    }
  }
  
  var snoopy = new Dog("Beagle");
  
  
  var scoobydoo = new Dog("Great Dane");
  
  