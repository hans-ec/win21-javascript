import React from 'react'

function ListGroupItem({item}) {
    return (
        <li className={ `list-group-item ${ item.completed ? 'disabled text-danger' : '' }`}>{item.id} - {item.title}</li>
    )
}

export default ListGroupItem
