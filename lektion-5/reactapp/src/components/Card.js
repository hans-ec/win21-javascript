import React from 'react'

const Card = ({ imageUrl, title, text}) => {
    return (
        <div className="card shadow h-100" >
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Lägg till</a>
            </div>
        </div>
    )
}

export default Card
