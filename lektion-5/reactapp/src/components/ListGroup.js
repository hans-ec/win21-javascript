import React, { useState } from 'react'
import ListGroupItem from './ListGroupItem'

function ListGroup() {

    const [items, setItems] = useState(["Item 1", "Item 1", "Item 3", "Item 4"])


    return (
        <ul className="list-group my-5">
            
            {
                items.map((item, index) => ( <ListGroupItem key={index} title={item} /> ))
            }

        </ul>
    )
}

export default ListGroup
