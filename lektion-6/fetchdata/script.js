// GET - Hämta
fetch("https://localhost:44363/api/products")
.then(res => res.json())
.then(data => {
    console.log(data)
})

async function fetchData() {
    const res = await fetch("https://localhost:44363/api/products")
    const data = await res.json()
    
    console.log(data)
}
fetchData()



// POST - Spara
let json = JSON.stringify({ name: "product 1", vendor: "hasse", vendorArticleNumber: '1231', shortDescription: 'en,text,här', image: "https://url.com"})

fetch("https://localhost:44363/api/products", {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'post',
    body: json
})

async function postData() {
    await fetch("https://localhost:44363/api/products", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: json
    })
}
postData()


// C# 5 veckor
// Datalagring C# 5 veckor
// ASP.NET MVC C# 5 veckor
// ASP.NET WEBAPI C# 4 veckor