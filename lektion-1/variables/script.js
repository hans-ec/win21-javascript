/* 
    Variabler är en container som du kan lagra information i

    camelCase       C/C++/Java/Javascript       firstName
    Pascal          C#/PowerShell               FirstName
    snake_case      Python                      first_name      

    vid deklarering av variabler:
    firstName       = "Hans"        <= gör absolut inte så här
    var firstName   = "Hans"        <= undvik att göra så här
    let firstName   = "Hans"        <= gör så här
    const firstName = "Hans"        <= gör så här för ett värde som aldrig ändras
*/


let firstName = "Hans"
firstName = "Anna"

const pi = 3.1415

console.log(firstName);
console.log(pi);
