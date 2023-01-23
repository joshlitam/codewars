// The JS Way Exercises

const documentName = 'The JS Way Exercises'
document.querySelector('h1').innerText += ` This document is for the ${documentName}. Please see the console log for details`

console.log('Hello, World!')



// Exercise 1: Dogs
class Dog {
    constructor(name, species, size) {
        this.name = name
        this.species = species
        this.size = size
    }
    bark() {
        if (this.size > 60) {
            return('Grrr! Grrr!')
        } else {
            return('Woof! Woof!')
        }
    }
}

// Testing new Dog class
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);

// Exercise 2: Character Inventory

class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
      this.xp = 0; // XP is always zero for new characters
      this.gold = 10; // Gold is always 10 for new characters
      this.keys = 1; // Keys is always 1 for new characters
    }
    // Attack a target
    attack(target) {
      if (this.health > 0) {
        const damage = this.strength;
        console.log(
          `${this.name} attacks ${target.name} and causes ${damage} damage points`
        );
        target.health -= damage;
        if (target.health > 0) {
          console.log(`${target.name} has ${target.health} health points left`);
        } else {
          target.health = 0;
          const bonusXP = 10;
          console.log(
            `${this.name} eliminated ${target.name} and wins ${bonusXP} experience points, ${target.gold} gold and ${target.keys} key(s)`
          );
          this.xp += bonusXP;
          this.gold += target.gold
          this.keys += target.keys
          target.gold = 0
          target.keys = 0
        }
      } else {
        console.log(`${this.name} can’t attack (they've been eliminated)`);
      }
    }
    // Return the character description
    describe() {
      return `${this.name} has ${this.health} health points, ${this
        .strength} as strength and ${this.xp} XP points, ${this.gold} gold and ${this.keys} key(s)`;
    }
  }

// Testing Character class

const aurora = new Character("Aurora", 150, 25);
const glacius = new Character("Glacius", 130, 30);

console.log("Welcome to the adventure! Here are our heroes:");
console.log(aurora.describe());
console.log(glacius.describe());

const monster = new Character("Spike", 40, 20);
console.log("A wild monster has appeared: it's named " + monster.name);

monster.attack(aurora);
monster.attack(glacius);
aurora.attack(monster);
glacius.attack(monster);

console.log(aurora.describe());
console.log(glacius.describe());

// Exercise 3: Account List

class Account {
  constructor(name) {
    this.name = name
    this.balance = 0 // Balance is always initially set to 0
  }

  credit(value) {
    this.balance += value
  }

  describe() {
    return `owner: ${this.name}, balance: ${this.balance}`
  }
}

// Testing Account Class

const sean = new Account('Sean')
const brad = new Account('Brad')
const georges = new Account ('Georges')

sean.credit(1000)
console.log(sean.describe())
brad.credit(1000)
console.log(brad.describe())
georges.credit(1000)
console.log(georges.describe())