// rafce - extension ES7 React/Redux/GraphQL/React-Native snippets


import React from 'react'
import './Alert.css';

const Alert = ({title, message}) => {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <div className="container-fluid d-flex">
                <i className="far fa-exclamation-triangle"></i>
                <div className="ms-2"> 
                    <strong>{title}</strong> {message}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        </div>
    )
}

export default Alert