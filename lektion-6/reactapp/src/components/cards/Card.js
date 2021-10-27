import React from 'react'
import './Card.css'

const Card = ({item}) => {

    const shortDescription = item.shortDescription.split(',')
    let inStockState = 'text-success'
    
    if(item.amountInStock === 0)
        inStockState = 'text-danger'
    if(item.amountInStock >= 5 && item.amountInStock < 10)
        inStockState = 'text-warning' 

    return (
        <div className="card h-100 ">           
            <div className="card-body">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <h5 className="card-title text-dark">{item.name}</h5>
                <p className="text-muted"><small>{item.vendor} {item.vendorArticleNumber}</small></p>
                <p className="card-text text-dark">
                    <small>
                    <ul>
                        { 
                            shortDescription.map(sd => ( <li>{sd}</li> ))
                        }
                    </ul>
                    </small>
                </p>
                <p className="text-danger" style={{fontWeight: 700, fontSize: 1.5 + 'rem'}}>{item.price}:-</p>
                <div className="d-flex align-items-center justify-content-end">
                    <i className="far fa-heart me-3 text-dark"></i>
                    <i className="fas fa-exchange-alt me-3 text-dark"></i>
                    <button className="btn btn-secondary"><i className="fas fa-shopping-cart me-2"></i>  Lägg till</button>
                </div>
            </div>
            <div className="card-footer">
                <small className="text-muted">
                    <i className={ `${inStockState} fas fa-box me-2`}></i> lagerstatus
                </small>
            </div>
        </div>
    )
}

export default Card
