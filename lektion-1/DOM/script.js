// document.getElementById("fullName").innerText = "Hans Mattin-Lassei"
// document.getElementById("fullName").innerHTML = "<strong>Hans Mattin-Lassei</strong>"
// console.log(document.getElementById("fullName").innerText)

document.getElementById('fullName').value = "Hans 1"
document.getElementsByName('fullName')[0].value = "Hans 2"
document.getElementsByTagName('input')[0].value = "Hans 3"
document.getElementsByClassName('fullName')[0].value = "Hans 4"

document.querySelector('#fullName').value = "Hans 5"
document.querySelector('input').value = "Hans 6"
document.querySelector('.fullName').value = "Hans 7"

// JQuery variant
// $('#id').value
// $('.class').value

let fullName = document.getElementById('fullName').value
document.querySelector('#results').innerHTML = fullName
console.log(fullName)