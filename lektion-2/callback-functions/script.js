/* 
    Callback functions
*/

function GetTodo(id, callback) {     
    fetch('https://jsonplaceholder.typicode.com/todos/'+ id)
        .then(response => response.json())
        .then(json => callback(json))
}

GetTodo(2, function(data) {
    console.log(data)
    document.getElementById("title").innerText = data.title
    document.getElementById("completed").innerText = data.completed
})
