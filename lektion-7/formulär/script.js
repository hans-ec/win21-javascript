if(window.screen.width >= 768) {
    document.getElementById('signInForm').classList.add('border', 'bg-white', 'shadow')
}

function validateEmailAddress(email) {
    const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regEx.test(email))
        return true

    return false
}

const validatePassword = (password) => {
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if(!regEx.test(password))
        return true

    return false
}



function onSubmit(event) {
    event.preventDefault()
    const errors = []

    for(let element of event.target) {
        switch(element.type) {
            case 'email':
                errors[0] = validateEmailAddress(element.value)
                break;

            case 'password':
                errors[1] = validatePassword(element.value)
                break;
        }
    }

    console.log(errors)
}
