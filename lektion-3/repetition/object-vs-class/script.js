let hans_obj = {
    firstName: "Hans",
    lastName: 'Mattin-Lassei',
    age: 37,
    weight: 92.4,
    isActive: true,
    skills: ["C#","JS"],
    address: {
        addressLine: "Nordkapsvägen 1",
        zipCode: "123 45",
        city: "Vega"
    }
}

let tommy_obj = {
    firstName: "Tommy",
    lastName: "Mattin-Lassei",
    age: 39,
    isActive: true,
    Skills: ["C#"],
    addresses: [
        {
            addressLine: "Österled 13",
            zipcode: "73246",
            City: "Arboga"
        }
    ],

    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let message = {
    deviceId: "device1",
    temperature: 0,
    humdity: 88
}







class User {
    constructor(firstName, lastName, age, weight, isActive, skills, address) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.weight = weight
        this.isActive = isActive
        this.skills = skills
        this.address = address
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

let hans = new User("Hans","Mattin-Lassei",37,92.4,true,["C#","JS"],{adressLine: "Nordkapsvägen 1", zipcode: "12345", City: "VEGA"})
hans.middleName = "Bengt Lennart"

console.log(hans.fullName())
