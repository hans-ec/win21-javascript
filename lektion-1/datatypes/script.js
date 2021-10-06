/* 
    DATATYPER

    JS              C#                              SQL
    ------------------------------------------------------------------------------------------------------------------------------------------------------------
    String          String                          char,varchar,nvarchar                               till för text           let firstName = "Hans"
    Number          int,long,double,decimal,float   bit,smallint,int,bigint,money,decimal,float         till för tal            let number = 1, number = 1.1
    Boolean         bool (Boolean)                  bool                                                sant eller falskt       let isActive = true
    Object          object, null                    ----                                                till för objekt         let user = { firstName = "Hans" }
    null            null                            null                                                är "ingenting"          let value = null
    Undefined       ----                            ----                                                odefinerat              let value = undefined
    Symbol          ----                            ----

    (Array, Object, null) = Object

*/

// STRING - till för text

let firstName = "Hans"
let lastName = 'Mattin-Lassei'
let address = `Nordkapsvägen 1`          //   <= (shift + ´)
let city = "VEGA"
var sentence = "Hej jag heter ... och jag bor på ... i ...."
var sentence = "Hej jag heter " + firstName + " " + lastName + " och jag bor på " + address + " i " + city + "."
var sentence = `Hej jag heter ${firstName} ${lastName} och jag bor på ${address} i ${city}.`
console.log(sentence);

let category = "Computers"
let subCategory = "Laptops"
var apiUrl = "http://localhost:7071/api/products?category=" + category
var apiUrl = "http://localhost:7071/api/products?category=" + category +"&subcategory=" + subCategory
var apiUrl = ` http://localhost:7071/api/products?category=${category}&subcategory=${subCategory}`
console.log(apiUrl);

var modifiedApiUrl = apiUrl.toLocaleUpperCase()
var modifiedApiUrl = apiUrl.toLocaleLowerCase()
console.log(modifiedApiUrl)

var count = apiUrl.length
var trimmed = apiUrl.trim()
console.log(count)
console.log(trimmed)

// NUMBER  - till för tal
var value = 1
var value = 1.1
var value = 123e-5
var value = 123e5
var value = 0.123456789012345678
var value = 9234567890123456
var value = 9999999999999992
console.log(value)


// BOOLEAN - sant eller falskt
var isActive = true
var isActive = false
console.log(isActive)


// NULL och Undefined
var ref                 //    <= undefined
var ref = null          //    <= object
var ref = undefined     //    <= undefined       

console.log(typeof ref)