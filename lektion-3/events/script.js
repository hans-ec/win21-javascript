import { validateEmail, validateMinLength, validatePassword } from "./validate.js";

document.getElementById("name").addEventListener("keyup", function(e) {
    validateMinLength(e.target)
})

document.getElementById("email").addEventListener("keyup", function(e) {
    validateEmail(e.target)
})

document.getElementById("password").addEventListener("keyup", function(e) {
    validatePassword(e.target)
})

document.getElementById("message").addEventListener("keyup", function(e) {
    validateMinLength(e.target, 5)
})

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault()

    for (let element of e.target)   
        switch(element.type) {
            case 'text': 
                validateMinLength(element)
                break;
            
            case 'email': 
                validateEmail(element)
                break;

            case 'password': 
                validatePassword(element)
                break;

            case 'textarea': 
                validateMinLength(element, 5)
                break;
        }
})