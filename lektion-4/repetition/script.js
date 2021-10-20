function validMinValue(value, minValue = 2) {
    if(value.length < minValue)
        return false 

    return true
}
function validEmail(value) {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(!regEx.test(value))
        return false

    return true
}
function validPassword(value) {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    
    if(!regEx.test(value))
        return false

    return true
}
function checkValidForm(elements) {
    let disable = false
    let errors = document.querySelectorAll('.is-invalid')
    let submitButton = document.querySelectorAll('.submit')[0]   

    elements.forEach(element => {
        if(element.value === "" || errors.length > 0)
            disable = true
    })     

    if(submitButton !== undefined)
        submitButton.disabled = disable
}
function setEventListeners() {
    forms.forEach(element => {
        switch(element.type) {
            case "text":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validMinValue(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        checkValidForm(forms)
                    }
                })
                break;
    
            case "email":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validEmail(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        checkValidForm(forms)
                    }
                })
                break;
    
            case "password":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validPassword(e.target.value)) {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        checkValidForm(forms)
                    }
                })
                break;
    

            case "textarea":
                element.addEventListener("keyup", function(e) { 
                    
                    if(!validMinValue(e.target.value, 5)) {
                        e.target.classList.add("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "block"
                        checkValidForm(forms)
                    }                 
                    else {
                        e.target.classList.remove("is-invalid");
                        document.getElementById(`${e.target.id}-error`).style.display = "none"
                        checkValidForm(forms)
                    }
                })
                break;
        }     
    })
}
function onSubmit(e) {
    // Kommer ersättas med C# framöver
    e.preventDefault()
    console.log("submitted")
}

var forms = document.querySelectorAll('.needs-validation')
setEventListeners()
checkValidForm(forms)



