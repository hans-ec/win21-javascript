/* 
    DATA TYPES IN JS:                                       String, Number, Boolean, Object, Null, Undefined
    DECLARATION OF VARIABLES:                               var, let, const
    NAMING CONVENTION OF VARIABLES AND FUNCTIONS:           camelCase
*/

// STRING
const domainName = 'domain.com'
let firstName = "Hans"
let lastName = 'Mattin-Lassei '

let fullName = `${firstName.trim()} ${lastName.trim()}`
let email = `${ fullName.toLocaleLowerCase().replace(' ','.') }@${domainName}`
console.log(email)
console.warn(email)
console.error(email)

// NUMBER
let age = 37
let weight =  92.3

// BOOLEAN
let enabled = true


// DOM - Document Object Model
const app = document.getElementById('app')
    app.innerText = email
    app.innerHTML = `<p style="font-size: 2.5rem">${email}</p>`