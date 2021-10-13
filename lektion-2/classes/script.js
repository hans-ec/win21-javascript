/* 

    OBJECT VS. CLASS

*/

// OBJECT - Inte optimalt
let user1 = { firstName: "Hans", lastName: "ML", age: 37, fullName: function() { return `${this.firstName} ${this.firstName}` }}
let user2 = { firstName: "Tommy", laastName: "ML", age: 39, fullName: function() { return `${this.firstName} ${this.firstName}` }}
let user3 = { firstName: "Anki", lastName: "ML", age: 42, fullName: function() { return `${this.firstName} ${this.firstName}` }}



// CLASS (template) - Optimalt
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    fullName() { return `${this.firstName} ${this.firstName}`}
}

var user4 = new User("Hans", "ML", 37)
var user5 = new User("Tommy", "ML", 39)
var user6 = new User("Anki", "ML", 42)