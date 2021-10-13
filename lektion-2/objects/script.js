/* 
    OBJECT - key: value         
        JS:                                     { firstName: 'Hans', age: 37 }
        JSON (JavaScript Object Notation):      { "firstName": "Hans", "age": 37 }
*/
const domainName = 'domain.com'

// JS Object
let jsUser = {
    firstName : "Hans",
    lastName: 'Mattin-Lassei',
    age: 37,
    skills: ['C#',"HTML","CSS","JS","Python","C","C++"],
    address: {
        addressLine: "Nordkapsvägen 1",
        zipCode: "136 57",
        city: "Vega"
    },

    fullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Konvertera till och från JSON
let toJson = JSON.stringify(jsUser)
let fromJson = JSON.parse(toJson)
// console.log(toJson)
// console.log(fromJson)


const deviceId = "tempsensor-1"
let temperature = 22.2
let humidity = 56.2

let message = { deviceId, temperature, humidity }
let json = JSON.stringify(message)
console.log(json)



let invoice = {
    id: 1,
    isShipped: true,
    invoiceDate: "2021-10-13 11:33:01",
    dueDate: "2021-11-12",
    deliveryTerms: "fritt vårt lager",
    ourReference: "online",
    customer: {
        id: 001,
        name: "Hans Mattin-Lassei",
        address: {
            addressLine: "Nordkapsvägen 1",
            zipCode: "136 57",
            city: "Vega"
        },
        contactInformation: {
            email: "hans.mattin-lassei@domain.com",
            phone: "073-123 12 12"
        }
    },
    products: [
        { productId: "V12311", price: 700.00, quantity: 2 },
        { productId: "43144112", price: 1500.00, quantity: 1 },
        { productId: "SPCS2++", price: 128.50, quantity: 5 }
    ]
}

let jsonInvoice = JSON.stringify(invoice)
console.log(jsonInvoice)
