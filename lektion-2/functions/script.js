/* 
    functions       =    fristående
    methods         =    ligger inuti ett object/class

    var, function   =   GLOBALT   (C# = static)
    let, const      =   LOKALT (ES6)
*/

// JS - inte optimalt
function greeting_V1(name) {
    return `Welcome ${name}!`
}

// ES6 - optimalt (arrow-function/lambda-function)
const greeting_V2 = (name) => {
    return `Welcome ${name}!`
}

const greeting_V3 = (name) => `Welcome ${name}!`

// console.log(greeting_V1("Hans"))
// console.log(greeting_V2("Hans"))
// console.log(greeting_V3("Hans"))



// Bad Practise - en funktion gör flera olika saker...
const createUser = (user) => {
    let isValid = false
    let isSignedUp = false
    let isSignedIn = false

    if(user != null) {
        // validating user code here
        isValid = true

        if(isValid == true) {
            // signup user code here
            isSignedUp = true
    
            if(signUpValid == true) {
                // signin user code here
                isSignedIn = true
    
                if (isSignedIn = true) {
                    // redirect to profile page code here
                }
            }
        }
    }
}

// Best Practise - en funktion gör endast en sak
const validateUser = (data) => { 
    // validating user code here with return value of true or false
}
const registerUser = (data) => {
    // signup user code here with return value of true or false 
}
const loginUser = (email, password) => {
    // signin user code here with return value of true or false
}
const redirectUser = (id) => {
    // redirect to profile page code here
}

const signUpSignIn = (formData) => {
    if(validateUser(formData)) {
        if(registerUser(formData)) {
            let user = loginUser(formData.email, formData.password)
            redirectUser(user.id)
        }
    }
}
