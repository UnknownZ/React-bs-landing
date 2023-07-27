import React from 'react'

function Card({ imageURL, title, description, btnLabel, btnUrl }) {
    return (
        <div className="col-sm-6 mb-3 mb-sm-0">
            <div className="card h-100">
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={btnUrl} className="btn btn-primary">{btnLabel}</a>
                </div>
            </div>
        </div>
    )
}
export default Card
