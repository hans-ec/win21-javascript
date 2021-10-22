import React, {useState, useEffect} from 'react'
import ListGroupItem from './ListGroupItem'

const TodoList = () => {
    
    const [todos, setTodos] = useState([])
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => setTodos(data))
    }, [])

    
    return (
        <ul className="list-group my-5">
            
            {
                todos.map(item => ( <ListGroupItem key={item.id} item={item} /> ))
            }

        </ul>
    )
}

export default TodoList
