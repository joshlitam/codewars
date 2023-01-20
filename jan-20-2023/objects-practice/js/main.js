// Come up with with a parent class
// Extend that parent class into two children
// Use Encapsulation, Abstraction, Inheritance, and Polymorphism 
// class Contractor{
//     constructor(name,role){
//         this._name = name
//         this._role = role
//     }
//     get name(){
//         return this._name
//     }
//     get role(){
//         return this._role
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs!`)
//     }
// }
// class Front extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// class Back extends Contractor{
//     constructor(name,role,tech){
//         super(name,role)
//         this._tech = tech
//     }
//     get tech(){
//         return this._tech
//     }
//     sayHello(){
//         console.log(`Hello, I am on the ${this._role} team at #100Devs and I use ${this._tech}`)
//     }
// }
// let bob = new Contractor('Bob','Front-end')
// let simba = new Front('Simba','Front-end','React')
// let machi = new Back('The Machine','Back-end','Node')

// let agency = [bob,simba,machi]

// for(person of agency){
//     person.sayHello()
// }

class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }

    get name() {
        return this._name
    }

    get role() {
        return this._role
    }

    describe() {
        return `My name is ${this._name}. My role in the agency is: ${this._role}`
    }
}

class FrontEndDev extends Contractor {
    constructor(name, role, specialty) {
        super(name, role)
        this._specialty = specialty
    }

    describe() {
        return `My name is ${this._name}. My role in the agency is: ${this._role}. My specialty is creating ${this._specialty}.`
    }
}

class BackEndDev extends Contractor {
    constructor(name, role, favoriteServer) {
        super(name, role)
        this._favoriteServer = favoriteServer
    }

    createServer() {
        return `I am proficient in creating databases using the ${this._favoriteServer} server`
    }
}

let josh = new FrontEndDev('Josh', 'Front-End Dev', 'User Experience Interfaces')
let joe = new BackEndDev('Joe', 'Back-End Dev', 'AWS')
let agencyPeople = [josh, joe]

for (person of agencyPeople) {
    console.log(person.describe())
}