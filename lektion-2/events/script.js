/* 
    EVENTS - EventHandler

    Triggers: click, focus, blur, keydown, keyup etc...
    
    DOM (Document Object Model)     =   document.
    BOM (Browser Object Model)      =   window.
*/

let count = 0

document.getElementById('submitForm').addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(e.target['firstName'].value)
})