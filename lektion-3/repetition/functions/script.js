/* 
    classic
    function theName() {} (krånglar med ordet this)

    ES6 - arrow/lambda function (krånglar med ordet this)
    const theName = () => {}

*/

function validateLength(input, minLength = 2) {
    if(input.length > minLength)
        console.log(true)
    else
        console.log(false)
}

function confirmPassword(password, confirmPassword) {
    if(password === confirmPassword)
        console.log(true)
    else    
        console.log(false)
}

// validateLength(document.getElementById("firstName").value, 5)
// validateLength(document.getElementById("lastName").value, 1)

let inputPassword = document.getElementById("password").value
let inputConfirmPassword = document.getElementById("confirmPassword").value

confirmPassword(inputPassword, inputConfirmPassword)