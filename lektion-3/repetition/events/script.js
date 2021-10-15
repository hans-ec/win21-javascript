document.getElementById("firstName").addEventListener("keyup", (event) => validateLength(event, "Förnamn"))

document.getElementById("lastName").addEventListener("keyup", (event) => validateLength(event, "Efternamn"))

document.getElementById("password").addEventListener("keyup", (event) => { 
    validateLength(event, "Lösenord", 8)
})

document.getElementById("confirmPassword").addEventListener("keyup", function(event) {
    compareValue(document.getElementById("password").value, event, "Lösenord")
})




